---
layout: page
title: Projects
permalink: /projects/
description: My main work is SlopCop and Bifrost, alongside secondary and historical software projects.
nav: true
nav_order: 3
horizontal: true
---

My main work is [SlopCop](/projects/slopcop.html), an online static analysis tool that runs incremental, diff-based checks on code changes, and [Bifrost](/projects/bifrost.html), the structural analysis toolkit underneath it. I also contribute to [Anvil](/projects/anvil.html); Joern and Plume cover earlier open-source work.

{% assign sorted_projects = site.projects | sort: 'importance' %}

<div class="projects">
  <div class="container px-0">
    <div class="row row-cols-1">
      {% for project in sorted_projects %}
        {% include projects_horizontal.liquid %}
      {% endfor %}
    </div>
  </div>
</div>
