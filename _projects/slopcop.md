---
layout: page
title: SlopCop
description: An online repository scanner and living code review built around static-analysis evidence and bounded deeper AI review.
importance: 2
category: software
contribution: Primary developer
---

SlopCop is an online repository scanner and living code review. It accepts read-only access to selected GitHub repositories, including private repositories, and public repository URLs from GitHub, GitLab, and Bitbucket. Reviews start from the latest default-branch revision without executing repository code, running builds, or installing dependencies.

Its first pass combines static-analysis evidence with findings about correctness, performance, maintainability, tests, credentials, risky APIs, and security-sensitive code. A bounded deeper AI review can add selected source, documentation, architecture, and recent commit context while keeping its scope and incomplete work visible.

SlopCop can propose custom deterministic rules from recurring findings and past fixes. Proposed rules need to be tested against the repository, near misses, and intended behavior before enforcement.

<div class="project-links" aria-label="SlopCop project links">
  <a class="btn btn-outline-primary" href="https://slopcop.com">Homepage</a>
  <a class="btn btn-outline-primary" href="https://slopcop.com/repository-analysis">Repository analysis</a>
</div>
