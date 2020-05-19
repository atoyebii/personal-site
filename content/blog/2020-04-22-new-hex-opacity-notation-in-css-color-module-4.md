---
title: "New hex opacity notation in CSS Color Module Level 4"
date: 2020-04-22T10:55:56-04:00
draft: true
---

`RRGGBBAA`! What sounds like some guttural scream developers make when trying to vertically center something in a page, is actually a nifty new CSS property that is working its way into the specification in the form of [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/#hex-notation). This new draft introduces a new way to use alpha (transparency) with hex colors!

The new color module introduces two new hex code formats for colors, a new shorthand 4 digits and a new longform format that is 8 digits. Adding a single or double digit to existing color codes to add alpha transparency functionality to HEX colors. No more translating to rgb to `rgba()` if you want a slightly transparent color!

```css
/* Shorthand hex */
.shorthand_black    { background: #000;  /* Black @ 100% Opacity */ }
.shorthand_black_70 { background: #0007; /* Black @ 70% Opacity  */ }
.shorthand_black_40 { background: #0004; /* Black @ 40% Opacity  */ }

/* Longform hex */
.longform_red    { background: #ED3526;   /* Red(ish) @ 100% Opacity */ }
.longform_red_70 { background: #ED352670; /* Red(ish) @ 70% Opacity  */ }
.longform_red_25 { background: #ED352625; /* Red(ish) @ 25% Opacity  */ }
```

## Browser Support

As this specification module change is still in the draft stage, but it's browser support is currently around 88.52% of users, based on [caniuse#feat=css-rrggbbaa](https://caniuse.com/#feat=css-rrggbbaa). No IE support at all, but for a modern code bases it is something to consider for non-critical CSS effects.

### Example 

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="jamesrwilliams" data-slug-hash="rNOjBLQ" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Short-hand HEX Opacity ">
  <span>See the Pen <a href="https://codepen.io/jamesrwilliams/pen/rNOjBLQ">
  Short-hand HEX Opacity </a> by James R. Williams (<a href="https://codepen.io/jamesrwilliams">@jamesrwilliams</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
