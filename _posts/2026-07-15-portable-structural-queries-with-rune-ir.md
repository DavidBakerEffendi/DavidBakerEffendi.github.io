---
layout: post
title: Designing portable structural queries with Rune IR
date: 2026-07-15 10:00:00 +0200
permalink: /blog/2026/portable-structural-queries-with-rune-ir/
description: A normalized query model can span languages without pretending that every language has the same semantics.
tags:
  - code intelligence
  - static analysis
  - Rust
og_image: https://davidbakereffendi.github.io/assets/img/social-preview.png
---

Multi-language source queries have an awkward design constraint. Users want to ask one question across a repository, but parsers expose different node names, field layouts, and syntactic details for each language. A query tied directly to raw Tree-sitter grammars is precise, yet it forces every caller to know those differences. A lowest-common-denominator abstraction is portable, yet it can erase exactly the structure that makes the query useful.

[Bifrost](https://github.com/BrokkAi/bifrost) addresses this with Rune IR: a normalized, source-side representation produced by language adapters. The query engine matches typed concepts such as calls, functions, names, arguments, and imports instead of raw grammar node names. Language-specific analyzers remain responsible for the places where compiler or interpreter semantics differ.

## One structural question, several syntaxes

Take a simple audit question: find calls to a function named `audit`. The surface syntax varies across languages, but the intent is stable. In Bifrost's experimental Rune Query Language (RQL), the structural seed is an S-expression:

```lisp
(call :callee (name "audit"))
```

The `call` head selects a normalized structural kind. The `:callee` role constrains the called expression, and `(name "audit")` applies a name predicate. The query is not a regular expression over source text, and it is not a language-specific Tree-sitter pattern. Each adapter maps the relevant syntax into the facts that satisfy this model.

Portability still needs an escape hatch. A query can be limited to a language or a path while an adapter is being debugged:

```lisp
(language typescript
  (where "src/**/*.ts"
    (call :callee (name "audit"))))
```

Those wrappers refine the candidate set; they do not change the meaning of the structural pattern.

## Structural seeds and typed pipelines

Finding a shape is often only the first step. The useful result may be the declaration containing that shape, the file containing the declaration, or a proven semantic user. Bifrost's schema-version-2 query model represents those operations as an ordered, typed pipeline.

For example, this query returns the smallest indexed declaration enclosing each matching call:

```lisp
(enclosing-decl
  (call :callee (name "audit")))
```

The wrapper changes the result domain from structural matches to declarations. Other steps move between explicit domains: `file-of` maps a match, declaration, or reference to its project file; `imports-of` and `importers-of` follow resolved project-local file edges; `members` and `owner` navigate declaration ownership; and hierarchy steps traverse indexed subtype or supertype relationships.

This typing prevents convenient but invalid compositions. A file importer is not automatically a symbol user. A structural name match is not automatically an indexed declaration. The engine can validate the pipeline before execution and retain the seed-and-edge provenance that produced each derived result.

## Normalization without semantic flattening

Rune IR deliberately normalizes source structure, not every language rule. A Java virtual call, a Python attribute access, and a Rust trait method may share some visible shape while following different resolution semantics. Treating them as identical would make cross-language queries look consistent at the cost of incorrect answers.

The useful split is:

- Normalize concepts whose source structure really is shared.
- Keep adapter mappings explicit and testable per language.
- Delegate semantic relationships to the appropriate language-aware analysis.
- Omit relationships that cannot be proven inside the indexed boundary.

This keeps the human-facing query compact without hiding where language-specific work occurs.

## One model, two representations

RQL is designed for interactive authoring in the Bifrost REPL. It supports completion, validation, multiline input, and readable composition. It is intentionally marked experimental while the vocabulary develops.

MCP clients use canonical JSON for the same `CodeQuery` model. JSON is not a second query language with different behavior; RQL lowers into the JSON-shaped representation before execution. A user can explore a query as an S-expression, inspect its canonical form, and then move the stable payload into an agent or script.

That separation gives each interface an appropriate contract. Humans get a concise notation. Programmatic clients get an explicit schema. The engine gets one model to validate and execute.

## Queries as executable documentation

A normalized IR is only credible when its mappings and examples are tested. Bifrost's language tutorials pair source fixtures with RQL, canonical JSON, and exact expected results. That turns documentation examples into regression tests for the adapters rather than illustrative snippets that can silently drift.

The same discipline helps users understand maturity. A supported-language list should mean that the documented structural concepts are mapped and exercised for those adapters. Experimental syntax should be labelled experimental. A query result should state whether it is a structural match, declaration, reference, or file.

Portable code querying is therefore less about inventing a universal syntax than about preserving useful boundaries: common structure versus language semantics, structural candidates versus proven relationships, and human notation versus machine representation. Rune IR provides the shared vocabulary; typed pipelines and explicit provenance keep that vocabulary honest.
