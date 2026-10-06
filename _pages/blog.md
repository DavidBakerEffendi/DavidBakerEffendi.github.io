---
layout: page
title: Writing
permalink: /blog/
description: Selected writing on code intelligence, static analysis, coding agents, and earlier program-analysis research.
nav: true
nav_order: 4
---

I write about Bifrost, the SlopCop online scanner, and the practical work of building and evaluating static analysis. Most of my current posts appear on the [SlopCop blog](https://blog.brokk.ai/), which is still hosted at blog.brokk.ai. This page is a curated index rather than a separate personal blog.

## Recent writing at SlopCop

<ul class="post-list">
  <li>
    <h2><a class="post-title" href="https://blog.brokk.ai/following-untrusted-data-through-a-database/">Following untrusted data through a database</a></h2>
    <p>Modeling storage boundaries in Bifrost so taint analysis can connect writes to later reads, with explicit API identity, key matching, and analysis limits.</p>
    <p class="post-meta">SlopCop &nbsp;&middot;&nbsp; September 21, 2026</p>
  </li>
  <li>
    <h2><a class="post-title" href="https://blog.brokk.ai/what-is-the-best-static-analysis-tool-for-your-use-case/">What is the best static analysis tool for your use case?</a></h2>
    <p>Using DataFlowBench to compare analyzer trade-offs for CI, editor and agent loops, security review, and workflows where false positives matter most.</p>
    <p class="post-meta">SlopCop &nbsp;&middot;&nbsp; September 9, 2026</p>
  </li>
  <li>
    <h2><a class="post-title" href="https://blog.brokk.ai/the-taint-analysis-power-ranking/">The Taint Analysis Power Ranking</a></h2>
    <p>How frozen positive and negative cases compare eight analyzers, keeping precision, recall, language coverage, responsiveness, and incomplete results distinct.</p>
    <p class="post-meta">SlopCop &nbsp;&middot;&nbsp; September 8, 2026</p>
  </li>
  <li>
    <h2><a class="post-title" href="https://blog.brokk.ai/why-we-switched-slopcop-to-flash-3-5/">Why we switched SlopCop to Flash 3.5</a></h2>
    <p>A benchmark-driven look at model cost, speed, stability, tool use, and report quality in a multi-agent code-review system.</p>
    <p class="post-meta">SlopCop &nbsp;&middot;&nbsp; June 3, 2026</p>
  </li>
  <li>
    <h2><a class="post-title" href="https://blog.brokk.ai/slopcop-forensics-for-your-codebase/">SlopCop: Forensics for your codebase</a></h2>
    <p>How static-analysis signals and specialist agents can turn maintainability findings into evidence-backed remediation work.</p>
    <p class="post-meta">SlopCop &nbsp;&middot;&nbsp; May 19, 2026</p>
  </li>
  <li>
    <h2><a class="post-title" href="https://blog.brokk.ai/building-a-javascript-reference-graph-with-an-agent/">Building a JavaScript Reference Graph With an Agent</a></h2>
    <p>Lessons from using an agent, domain expertise, adversarial tests, and iterative review to build production reference analysis.</p>
    <p class="post-meta">SlopCop &nbsp;&middot;&nbsp; May 4, 2026</p>
  </li>
  <li>
    <h2><a class="post-title" href="https://blog.brokk.ai/stop-allocating-nothing-how-we-tripled-java-treesitter-performance/">Stop Allocating Nothing: How We Tripled Java TreeSitter Performance</a></h2>
    <p>Tracing unnecessary JNI allocations and garbage-collection pressure to a small null-node handling path.</p>
    <p class="post-meta">SlopCop &nbsp;&middot;&nbsp; April 23, 2026</p>
  </li>
</ul>

[See all posts on the SlopCop blog](https://blog.brokk.ai/author/david/) or [subscribe to its RSS feed](https://blog.brokk.ai/rss/).

## Earlier writing

### [Learning Type Inference for Enhanced Dataflow Analysis](https://medium.com/@dbakereffendi/learning-type-inference-for-enhanced-dataflow-analysis-3efed70ee52b)

A practical introduction to the CodeTIDAL5 and JoernTI work behind our 2023 ESORICS paper, connecting learned type inference to more precise data-flow analysis.

My [older Medium archive](https://medium.com/@dbakereffendi) documents an earlier period of work focused heavily on code property graphs and graph-database backends. I keep it available as historical context rather than a statement of my current focus.
