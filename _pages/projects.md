---
layout: page
title: Projects
permalink: /projects/
description: My main work is Bifrost and SlopCop, alongside secondary and historical software projects.
nav: true
nav_order: 3
horizontal: true
---

My main work is [Bifrost](/projects/bifrost/), a structural analysis toolkit for coding agents, and [SlopCop](/projects/slopcop/), an online repository scanner built around evidence-backed living reviews. I also contribute to [Anvil](/projects/anvil/); Joern and Plume cover earlier open-source work.

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
