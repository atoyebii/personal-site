---
title: "Mid-2020 Site Updates"
date: 2020-04-22T10:55:56-04:00
draft: true
---

More tweaks to the UI, now using a more full screen homepage design and an alternative color scheme. I've also started to use some ideas from [tailwind.css](https://tailwindcss.com/) in terms of moving to a more utility focused css approach to reduce CSS bundle size.

## Performance Changes

| Asset | Original | New | % Change | Note |
| ------ | -------- | --- | -------- | --- |
| CSS | 20kb | 24kb | <span class="text-red">+20%</span> |  |
| JS | 2.71kb | 3.95kb | <span class="text-red">+45%</span> | <sup>1</sup> |
| Images | | | |
| All | | | 

<sup>1</sup> This is expected as the homepage effect is in JS but from 2kb this is within my budget
<sup>2</sup> 
