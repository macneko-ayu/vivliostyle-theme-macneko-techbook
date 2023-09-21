---
class: content
---

<div class="doc-header">
  <h1>Vivliostyle Theme Example</h1>
  <div class="doc-author">your name</div>
</div>

# Vivliostyle Theme Example

This sample is based on [VFM (Vivliostyle Flavored Markdown) document](https://vivliostyle.github.io/vfm/vfm). If you need more information, please check the document.

## Code

```javascript
function main() {}
```

### with caption

```javascript:app.js
function main() {}
```

or

```javascript title=app.js
function main() {}
```

long code

```scss
body.content {
  h1 {
    display: none;
  }
}

div.doc-header {
  @if $print-mode {
    border-left: 4pt solid $color_black;
    border-bottom: 2pt solid $color_black;
  }
  @else {
    border-left: 4pt solid $color_green_dark;
    border-bottom: 2pt solid $color_green_dark;
  }
  padding-top: 5pt;
  padding-left: 14pt;
  padding-bottom: 10pt;
  margin-bottom: 20pt;
  position: relative;

  h1 {
    display: block;
  }
}

div.doc-header::before {
  content: "";
  position: absolute;
  width: 100%;
  height: calc(100% + 2pt);
  @if $print-mode {
    border-left: 2pt solid $color_black;
  }
  @else {
    border-left: 2pt solid $color_green_dark;
  }
  top: 0pt;
  left: 2pt;
}

div.doc-author {
  text-align: right;
}
```

long code block with caption

```scss:_base.scss
body.content {
  h1 {
    display: none;
  }
}

div.doc-header {
  @if $print-mode {
    border-left: 4pt solid $color_black;
    border-bottom: 2pt solid $color_black;
  }
  @else {
    border-left: 4pt solid $color_green_dark;
    border-bottom: 2pt solid $color_green_dark;
  }
  padding-top: 5pt;
  padding-left: 14pt;
  padding-bottom: 10pt;
  margin-bottom: 20pt;
  position: relative;

  h1 {
    display: block;
  }
}

div.doc-header::before {
  content: "";
  position: absolute;
  width: 100%;
  height: calc(100% + 2pt);
  @if $print-mode {
    border-left: 2pt solid $color_black;
  }
  @else {
    border-left: 2pt solid $color_green_dark;
  }
  top: 0pt;
  left: 2pt;
}

// 著者名
div.doc-author {
  text-align: right;
}
```


## Footnotes

VFM is developed in the GitHub repository[^1].
Issues are managed on GitHub[^issues].
Footnotes can also be written inline^[This part is a footnote.].

[^1]: [VFM](https://github.com/vivliostyle/vfm)
[^issues]: [Issues](https://github.com/vivliostyle/vfm/issues)

## Frontmater

(You can define metadata on the top of the Markdown file. Try to set `lang` option `ja` in the frontmatter! If you need more information, please check [Frontmatter part in VFM document](https://vivliostyle.github.io/vfm/vfm#frontmatter).)

## Hard new line

(Try to set the `hardLineBreaks` option `true` in the frontmatter!)

はじめまして。

Vivliostyle Flavored Markdown（略して VFM）の世界へようこそ。
VFM は出版物の執筆に適した Markdown 方言であり、Vivliostyle プロジェクトのために策定・実装されました。

## Image

![](<./assets/Logo%20(Mark%20+%20Type).png>)

### with caption and single line

![Vivliostyle Logo](<./assets/Logo%20(Mark%20+%20Type).png>)

![Vivliostyle Logo](<./assets/Logo%20(Mark%20+%20Type).png> 'distributed on the official website'){id="image" data-sample="sample"}

text ![Vivliostyle Logo](<./assets/Logo%20(Mark%20+%20Type).png>)

## Math equation

inline: $x = y$

display: $$1 + 1 = 2$$

## Raw HTML

<div class="custom">
  <p>Hey</p>
</div>

### with Markdown

<div class="custom">

- hoge
- fuga

</div>

## Ruby

This is {Ruby|ルビ}

### Escape pipe in ruby body

{a\|b|c}

## Sectionization

## Plain

## Introduction {#intro}

## Welcome {.title}

## Level 2

### Level 3

> ## Not Sectionize
