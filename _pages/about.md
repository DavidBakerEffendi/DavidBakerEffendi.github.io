---
layout: about
title: About
permalink: /
subtitle: Building code intelligence for agents at <a href="https://brokk.ai">Brokk</a>

profile:
  align: right
  image: DavidBaker10005.jpg
  image_circular: false # crops the image to make it circular
  # more_info: >
  #   <p>Cape Town, South Africa</p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I build open-source, multi-language code intelligence for coding agents at [Brokk](https://brokk.ai). [Bifrost](https://github.com/BrokkAi/bifrost) gives agents and developer tools a structural view of unbuilt or partially broken repositories, including mixed-language workspaces.

The analysis stack is available as a Rust crate, MCP server, LSP, and CLI. Its S-expression query language supports portable structural queries, with semantic layers for relationships such as usages, imports, and type hierarchies built on demand. My work sits at the intersection of static analysis, program verification, and AI-assisted software engineering.

<div class="homepage-cta" aria-label="Bifrost resources">
  <a class="btn btn-outline-primary" href="https://github.com/BrokkAi/bifrost">View the source</a>
  <a class="btn btn-outline-primary" href="https://brokkai.github.io/bifrost/">Read the documentation</a>
  <a class="btn btn-outline-primary" href="https://brokkai.github.io/bifrost/code-querying/">Explore query examples</a>
  <a class="btn btn-outline-primary" href="https://twitter.com/SDBakerEffendi">Follow development on Twitter/X</a>
</div>

## How I got here

I came to coding agents through program analysis. My PhD at [Stellenbosch University](https://www.sun.ac.za/english/pgstudies/Pages/Science/Computer-Science.aspx) explored how language-agnostic representations, graph backends, and parallel processing could make static analysis more practical at repository scale. Along the way, I maintained [Plume](/projects/plume/) and contributed to [Joern](/projects/joern/), working directly with the opportunities and limitations of code property graphs.

From 2022 to June 2025, I applied that research at [Whirly Labs](https://whirlylabs.com), leading the development of tailored static-analysis systems for clients. That work shifted my focus from analysis as a research artifact toward code intelligence as dependable product infrastructure: tools that must remain useful on large, evolving, and occasionally broken codebases.

Since 2025, I have been bringing those lessons to AI-assisted software engineering at [Brokk](https://brokk.ai). My current work on [Bifrost](/projects/bifrost/) and [Anvil](/projects/anvil/) focuses on giving coding agents reliable structural context and a reusable execution environment, rather than asking language models to infer everything from text alone.

I remain connected to Stellenbosch University as a visiting lecturer and postgraduate co-supervisor in static program analysis.
