---
layout: page
title: projects
permalink: /projects/
description: Open-source software for code intelligence, static analysis, and coding agents.
nav: true
nav_order: 3
horizontal: true
---

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
