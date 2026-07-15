---
layout: page
title: Plume
description: A graph-database-agnostic JVM bytecode frontend and benchmarking suite for code property graph research.
importance: 4
category: open source
contribution: Past maintainer
github: https://github.com/plume-oss/plume
---

Plume constructs code property graph ASTs from JVM bytecode and stores them across multiple graph-database backends. It was built to make the performance and engineering trade-offs between static-analysis storage systems measurable rather than anecdotal.

## Past maintenance

I was Plume's primary maintainer from 2020 to 2024. The project supported research into incremental data-flow analysis and graph-database performance, and its original frontend became the basis for Joern's `jimple2cpg` frontend.

Plume remains available for existing users and experiments, but I recommend Joern for new code property graph research. My current open-source development is centered on Bifrost and Anvil.

<div class="project-links" aria-label="Plume project links">
  <a class="btn btn-outline-primary" href="https://github.com/plume-oss/plume">Source</a>
  <a class="btn btn-outline-primary" href="https://plume-oss.github.io/plume-docs/">Documentation</a>
  <a class="btn btn-outline-primary" href="https://plume-oss.github.io/plume/latest/api/io/github/plume/oss/index.html">API reference</a>
  <a class="btn btn-outline-primary" href="https://github.com/plume-oss/plume/issues">Issue tracker</a>
</div>
