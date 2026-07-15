---
layout: page
title: writing
permalink: /blog/
description: Engineering notes on code intelligence, static analysis, and building tools for coding agents.
nav: true
nav_order: 4
---

<div class="tag-category-list">
  <ul class="p-0 m-0">
    {% for tag in site.display_tags %}
      <li>
        <i class="fa-solid fa-hashtag fa-sm"></i>
        <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">{{ tag }}</a>
      </li>
      {% unless forloop.last %}<li aria-hidden="true">&bull;</li>{% endunless %}
    {% endfor %}
  </ul>
</div>

<ul class="post-list">
  {% for post in site.posts %}
    {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
    <li>
      <h2><a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p>{{ post.description }}</p>
      <p class="post-meta">{{ read_time }} min read &nbsp;&middot;&nbsp; {{ post.date | date: '%B %d, %Y' }}</p>
      <p class="post-tags">
        {% for tag in post.tags %}
          <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}"><i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}</a>
          {% unless forloop.last %}&nbsp;{% endunless %}
        {% endfor %}
      </p>
    </li>
  {% endfor %}
</ul>
