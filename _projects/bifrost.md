---
layout: page
title: Bifrost
description: Multi-language static analysis that gives coding agents and developer tools a structural view of real repositories, even when the code does not build.
importance: 1
category: open source
github: https://github.com/BrokkAi/bifrost
---

Bifrost is Brokk's open-source, Rust-based static-analysis toolbox for AI coding harnesses, editors, and large repositories. It parses unbuilt or partially broken codebases, including mixed-language workspaces, so tools can navigate code structure and relationships without relying on text search alone.

## Interfaces

The same analysis engine is available through:

- The [`brokk-bifrost` Rust crate](https://crates.io/crates/brokk-bifrost)
- An [MCP server](https://brokkai.github.io/bifrost/mcp/) for coding agents
- An [LSP server](https://brokkai.github.io/bifrost/lsp/) for editors
- A [command-line interface](https://brokkai.github.io/bifrost/cli/)
- A native [Python client](https://brokkai.github.io/bifrost/python-client/)

## Structural and semantic queries

Bifrost maps language-specific syntax into Rune IR, a normalized representation that supports portable structural queries. Semantic relationships such as usages, imports, declaration ownership, and type hierarchies are indexed or constructed on demand when a query requests them.

This Rune Query Language expression selects each indexed declaration that encloses a call to a function named `audit`:

```lisp
(enclosing-decl
  (call :callee (name "audit")))
```

RQL is the experimental, human-facing S-expression syntax used by Bifrost's REPL. MCP clients use the canonical JSON representation of the same query model. The [query documentation](https://brokkai.github.io/bifrost/code-querying/) explains the boundary between structural matches and semantic traversal, while the [language tutorials](https://brokkai.github.io/bifrost/code-query-tutorials/) pair executable queries with exact results.

## Maturity and language coverage

Bifrost is under active development. Its normalized query engine is at schema version 2; the RQL frontend remains explicitly experimental. Current analyzers cover C, C++, C#, Go, Java, JavaScript, PHP, Python, Ruby, Rust, Scala, and TypeScript.

Claims on this page follow the public project documentation so they remain straightforward to update as the supported surface changes.

<div class="project-links" aria-label="Bifrost project links">
  <a class="btn btn-outline-primary" href="https://github.com/BrokkAi/bifrost">Source</a>
  <a class="btn btn-outline-primary" href="https://brokkai.github.io/bifrost/">Documentation</a>
  <a class="btn btn-outline-primary" href="https://crates.io/crates/brokk-bifrost">Crate</a>
  <a class="btn btn-outline-primary" href="https://brokkai.github.io/bifrost/code-query-tutorials/">Examples</a>
  <a class="btn btn-outline-primary" href="https://github.com/BrokkAi/bifrost/issues">Issue tracker</a>
</div>
