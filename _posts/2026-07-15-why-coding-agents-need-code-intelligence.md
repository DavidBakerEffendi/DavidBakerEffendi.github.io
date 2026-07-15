---
layout: post
title: Why coding agents need code intelligence beyond text search
date: 2026-07-15 09:00:00 +0200
permalink: /blog/2026/why-coding-agents-need-code-intelligence/
description: Text search is indispensable, but coding agents also need structural identity, exact relationships, and explicit proof boundaries.
tags:
  - agents
  - code intelligence
  - static analysis
og_image: https://davidbakereffendi.github.io/assets/img/social-preview.png
---

Text search is one of the best tools in a coding agent's toolbox. It is fast, transparent, and works before a project builds. If I know an error message, configuration key, or unusual identifier, a literal search is often the shortest path to the relevant code.

The mistake is treating that strength as proof that text search is a complete model of a program. Source code is text, but a repository is also a system of declarations, references, scopes, imports, types, and calls. Many software-engineering questions are questions about those relationships rather than about spelling.

## A match is not an identity

Suppose an agent searches for `parse` in a large repository. The results may include a method declaration, calls to several unrelated methods with the same name, comments, tests, generated files, and strings used in documentation. A human can often disambiguate these results by opening files and reconstructing context. An agent can do the same, but the cost grows quickly and the conclusion remains easy to overstate.

Code intelligence changes the unit of evidence. Instead of returning every occurrence of a token, it can return the declaration of `Parser.parse`, exact reference sites associated with that declaration, or the enclosing method around a matching expression. The answer is smaller because the question is more precise.

This distinction matters most in multi-language repositories. A class, import, call, or field access has different concrete syntax across Java, Python, Rust, TypeScript, and Ruby. Asking every agent workflow to rediscover those differences from text pushes language knowledge into prompts and brittle regular expressions. A normalized structural layer can represent the shared concepts while preserving language-specific analysis where the semantics genuinely differ.

## Structure first, semantics when needed

[Bifrost](https://github.com/BrokkAi/bifrost) uses Tree-sitter parsers as a common syntax foundation and adapts grammar-specific nodes into reusable facts. Its Rune IR layer gives structural queries a portable vocabulary for concepts such as functions, calls, assignments, and imports.

That structural index should stay lean. A coding agent usually does not need every possible relationship graph resident in memory for every request. Declarations and other durable facts can be indexed incrementally, while deeper analysis is constructed when a tool call needs it. Usage relationships, import edges, summaries, and type hierarchies can then be cached or recomputed for the affected work as files change.

This lazy boundary is not only a performance technique. It makes the evidence behind an answer visible. A structural query can say, “this expression has the requested shape.” A usage traversal can separately say, “this indexed declaration is an exact semantic user.” Combining the two is powerful precisely because they are not silently conflated.

## Capability boundaries are part of correctness

Consider a query that finds files importing the file that declares `target`. That result identifies candidate importer files. It does **not** prove that those files call `target`, use that particular declaration, or even reference it by name. Import-file reachability and symbol usage are different relationships.

A trustworthy code-intelligence tool should preserve that boundary in its API and result provenance. If a library declaration is outside the indexed workspace, omitting it is safer than manufacturing a declaration from a matching name. If an analysis can prove only a direct import edge, the result should not be presented as a call site.

Coding agents are especially vulnerable to fluent overclaiming: a plausible narrative can bridge gaps in the evidence without making those gaps obvious. Typed tools and explicit result domains make it easier for both the model and the person reviewing its work to see what has actually been established.

## A practical layered workflow

The useful choice is not “text search or static analysis.” A good agent moves between layers:

1. Use text search for literals, diagnostics, comments, configuration, and other exact source text.
2. Use symbol search when the declaration name is known.
3. Use structural queries when code shape matters more than symbol identity.
4. Use reference or usage tools when the question is about an exact declaration relationship.
5. Use import and type-hierarchy traversal only when those result domains answer the question being asked.

Each step narrows the evidence without requiring a fully compiled workspace. The agent reads less irrelevant code, and the final explanation can cite a stronger chain of facts.

## The goal is better questions

Code intelligence does not make text search obsolete, and it does not remove the need to inspect source. It lets an agent ask questions that map more closely to the structure of software: Where is this declared? Which exact declarations use it? What contains this call? Which types derive from this base? Which files directly import this file?

Those questions are valuable because their answers have defined meanings. For coding agents, that precision is not an optional IDE convenience. It is a way to spend context on the right code and to keep the boundary between a candidate and a proven relationship honest.
