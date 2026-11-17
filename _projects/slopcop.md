---
layout: page
title: SlopCop
description: An online static analysis tool that runs incremental, diff-based checks on code changes, backed by static-analysis evidence and bounded deeper AI review.
importance: 1
category: software
contribution: Primary developer
---

SlopCop is an online static analysis tool that checks code incrementally. Each check takes a change as a diff against the commit it builds on, so SlopCop examines what changed, in context, instead of re-reviewing the whole repository. Checks run from the `slopcop` CLI or through its MCP server, so coding agents can check their own work before handing it back. SlopCop never executes repository code, runs builds, or installs dependencies.

It accepts read-only access to selected GitHub repositories, including private repositories, and public repository URLs from GitHub, GitLab, and Bitbucket.

Each check combines static-analysis evidence with findings about correctness, performance, maintainability, tests, credentials, risky APIs, and security-sensitive code. A bounded deeper AI review can add selected source, documentation, architecture, and recent commit context while keeping its scope and incomplete work visible. Developers can fix a finding or ignore it as a false positive.

SlopCop can propose custom deterministic rules from recurring findings and past fixes. Proposed rules need to be tested against the repository, near misses, and intended behavior before enforcement.

<div class="project-links" aria-label="SlopCop project links">
  <a class="btn btn-outline-primary" href="https://slopcop.com">Homepage</a>
  <a class="btn btn-outline-primary" href="https://slopcop.com/repository-analysis">Repository analysis</a>
</div>
