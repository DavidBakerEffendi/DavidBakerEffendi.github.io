---
layout: about
title: About
permalink: /
subtitle: Building Bifrost and the online scanner at <a href="https://slopcop.com">SlopCop</a>

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

My main work at [SlopCop](https://slopcop.com) is [Bifrost](/projects/bifrost.html) and the [SlopCop online scanner](/projects/slopcop.html). I develop the code intelligence underneath and the repository reviews that put it to use.

[Bifrost](https://github.com/BrokkAi/bifrost) is an open-source, multi-language static-analysis toolbox. It gives coding agents and developer tools a structural view of unbuilt or partially broken repositories, including mixed-language workspaces. The engine is available as a Rust crate, MCP server, LSP, CLI, and Python client, with queries for code structure and relationships such as usages, imports, and type hierarchies.

[SlopCop](https://slopcop.com) brings that analysis into an online repository review. Static checks surface leads; deeper AI review examines the surrounding code and proposes fixes. Findings keep their source evidence and coverage limits visible, so developers can check the diagnosis and decide what to change.

<div class="homepage-cta" aria-label="Bifrost and SlopCop resources">
  <a class="btn btn-outline-primary" href="https://slopcop.com">Scan a repository</a>
  <a class="btn btn-outline-primary" href="https://github.com/BrokkAi/bifrost">Bifrost source</a>
  <a class="btn btn-outline-primary" href="https://brokkai.github.io/bifrost/">Bifrost documentation</a>
  <a class="btn btn-outline-primary" href="https://twitter.com/SDBakerEffendi">Follow development on Twitter/X</a>
</div>

## How I got here

I came to coding agents through program analysis. My PhD at [Stellenbosch University](https://www.sun.ac.za/english/pgstudies/Pages/Science/Computer-Science.aspx) explored how language-agnostic representations, graph backends, and parallel processing could make static analysis more practical at repository scale. Along the way, I maintained [Plume](/projects/plume.html) and contributed to [Joern](/projects/joern.html), working directly with the opportunities and limitations of code property graphs.

From 2022 to June 2025, I applied that research at [Whirly Labs](https://whirlylabs.com), leading the development of tailored static-analysis systems for clients. That work shifted my focus from analysis as a research artifact toward code intelligence as dependable product infrastructure: tools that must remain useful on large, evolving, and occasionally broken codebases.

Since 2025, I have been bringing those lessons to AI-assisted software engineering at [SlopCop](https://slopcop.com). Bifrost and the online scanner connect my work in static analysis and program verification to practical code review: finding a suspicious pattern, checking the evidence, and helping people and coding agents make a useful fix.

I remain connected to Stellenbosch University as a visiting lecturer and postgraduate co-supervisor in static program analysis.
