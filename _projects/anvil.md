---
layout: page
title: Anvil
description: A reusable Rust agent backend that gives editors, bots, terminal interfaces, and internal tools the same Agent Client Protocol runtime.
importance: 2
category: open source
contribution: Active contributor
github: https://github.com/BrokkAi/anvil
---

Anvil is Brokk's open-source Agent Client Protocol (ACP) server. It separates the agent runtime from its user interface, so editors, review bots, terminal clients, and custom automation can share one implementation of model routing, tool execution, permission handling, session storage, and context management.

## One backend, many clients

Anvil communicates with clients over ACP using JSON-RPC on standard input and output. The client owns the experience; Anvil owns the agent loop and execution semantics. The repository includes setup helpers for Zed and JetBrains as well as small client examples for issue triage, code review, and issue drafting.

Anvil can discover Codex/ChatGPT credentials, Ollama, local ds4 models, OpenRouter, and Amazon Bedrock. Its MCP bridge manages external tool servers per session, with Bifrost included as a pinned local server for structural code intelligence.

Anvil is under active development. It is currently intended to be built from source and connected to an ACP client rather than used as a standalone editor or terminal application.

<div class="project-links" aria-label="Anvil project links">
  <a class="btn btn-outline-primary" href="https://github.com/BrokkAi/anvil">Source</a>
  <a class="btn btn-outline-primary" href="https://github.com/BrokkAi/anvil#quick-start">Quick start</a>
  <a class="btn btn-outline-primary" href="https://github.com/BrokkAi/anvil#client-examples">Client examples</a>
  <a class="btn btn-outline-primary" href="https://github.com/BrokkAi/anvil/issues">Issue tracker</a>
</div>
