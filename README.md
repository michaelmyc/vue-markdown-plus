# vue-markdown-plus

[![npm](https://img.shields.io/npm/v/vue-markdown-plus.svg?style=flat)](https://www.npmjs.com/package/vue-markdown-plus)
[![npm](https://img.shields.io/npm/l/vue-markdown-plus.svg?style=flat)](https://www.npmjs.com/package/vue-markdown-plus)
[![npm](https://img.shields.io/npm/dt/vue-markdown-plus.svg?style=flat)](https://www.npmjs.com/package/vue-markdown-plus)

> This package does not support `vue1.X.X`.

A powerful and highspeed Markdown component for Vue.

This is an extension to [miaolz123](https://github.com/miaolz123)'s [vue-markdown](https://github.com/miaolz123/vue-markdown). The last update to vue-markdow was in 2017, and is not actively maintained (dependencies contain security vulnerabilities). This package intends to be a safe, up-to-date alternative to vue-router. 

Quick start: `<vue-markdown-plus>i am a ~~tast~~ **test**.</vue-markdown-plus>`

Supported Markdown Syntax:

* [x] automatic table of contents
* [x] table & class customize
* [x] *SyntaxHighlighter
* [x] definition list
* [x] strikethrough
* [x] GFM task list
* [x] abbreviation
* [x] custom attributes (class, id, etc.)
* [x] superscript
* [x] subscript
* [x] footnote
* [x] insert
* [x] *katex
* [x] emoji
* [x] mark

`*SyntaxHighlighter` work with [Prism](https://prismjs.com)

`*katex` needs [katex css](https://unpkg.com/katex/dist/katex.min.css).

# Example

[simple](https://github.com/6etacat/vue-markdown-plus/blob/master/example/simple)

[webpack-simple](https://github.com/6etacat/vue-markdown-plus/blob/master/example/webpack-simple)

[Live Demo](https://michaelmao.me/vue-markdown-plus)

# Installation

### Browser globals

> The **dist** folder contains `vue-markdown.js` with the component exported in the `window.VueMarkdownPlus` object.

```html
<body>
  <vue-markdown>i am a ~~tast~~ **test**.</vue-markdown>
</body>
<script src="path/to/vue.js"></script>
<script src="path/to/vue-markdown-plus.js"></script>
<script>
    Vue.use(VueMarkdownPlus);
    var vm = new Vue({
        el: "body"
    });
</script>
```

### NPM

```shell
$ npm install --save vue-markdown-plus
```

### Yarn

```shell
$ yarn add vue-markdown-plus --save
```

## CommonJS

```js
var VueMarkdownPlus = require('vue-markdown-plus');

new Vue({
  components: {
    'vue-markdown-plus': VueMarkdownPlus
  }
})
```

## ES6 (Vue-CLI users)

After installing via Yarn or NPM, use the following snippet in the script portion of the Vue component which you wish to render the Markdown.

```js
import VueMarkdownPlus from 'vue-markdown-plus';

new Vue({
  components: {
    VueMarkdownPlus
  }
})
```

# Slots

```html
<vue-markdown>this is the default slot</vue-markdown>
```

After setting up the middleware in your vue component above, using the embedded markdown is as easy as writing it between the `vue-markdown` tags.

VueMarkdown has a default slot which is used to write the `markdown` source.

TIP: The default slot only renders **once** at the beginning, and it will overwrite the prop of `source`!

# Props

| Prop | Type | Default | Describe |
| ---- | ---- | ------- | ------- |
| watches | Array | `["source", "show", "toc"]` | HTML refresh automatically when the prop in this array changed |
| source | String | `null` | the markdown source code |
| show | Boolean | `true` | enable render to the default slot automatically |
| html | Boolean | `true` | enable HTML syntax in source |
| xhtml-out | Boolean | `true` | `<br></br>` => `<br />` |
| breaks | Boolean | `true` | `\n` => `<br>` |
| linkify | Boolean | `true` | autoconvert URL-like text to link |
| emoji | Boolean | `true` | `:)` => `😃` |
| typographer | Boolean | `true` | enable some language-neutral replacement and quotes beautification |
| lang-prefix | String | `language-` | CSS language prefix for fenced blocks |
| quotes | String | `“”‘’` | use `“”‘’` for Chinese, `„“‚‘` for German, `«»„“` for Russian |
| table-class | String | `table` | customize html class of the `<table>` |
| task-lists | Boolean | `true` | enable GFM task list |
| toc | Boolean | `false` | enable automatic table of contents |
| toc-id | String | `undefined` | the HTML id to render TOC |
| toc-class | String | `table` | customize html class of the `<ul>` wrapping the TOC |
| toc-first-level | Number | `2` | use `2` if you want to skip `<h1>` from the TOC |
| toc-last-level | Number | `'toc-first-level' + 1` | use `5` if you want to skip `<h6>` from the TOC |
| toc-anchor-link | Boolean | `true` | enable the automatic anchor link in the headings |
| toc-anchor-class | String | `toc-anchor` | customize the anchor class name |
| toc-anchor-link-symbol | String | `#` | customize the anchor link symbol |
| toc-anchor-link-space | Boolean | `true` | enable inserting a space between the anchor link and heading |
| toc-anchor-link-class | String | `toc-anchor-link` | customize the anchor link symbol class name |
| anchorAttributes | Object | `{}` | anchor tag attributes such as `target: '_blank'` or `rel: 'nofollow'` |
| prerender | Function (String) String | `null` | filter function before markdown parse |
| postrender | Function (String) String | `null` | filter function after markdown parse |

# Events

| Name | Param[Type] | Describe |
| ---- | --------- | -------- |
| rendered | outHtml[String] | dispatch when render finish |
| toc-rendered | tocHtml[String] | dispatch when TOC render finish, never dispatch if the toc[prop] is `false` |

# Thanks

- [markdown-it](https://github.com/markdown-it/markdown-it)
- [miaolz123](https://github.com/miaolz123)
- [transtone](https://github.com/transtone)
- [**brandonferens**](https://github.com/brandonferens)

# Contributions

- [6etacat](https://github.com/6etacat)
- [miaolz123](https://github.com/miaolz123)
- [brandonferens](https://github.com/brandonferens)
- [brianbancroft](https://github.com/brianbancroft)
- [nikolasp](https://github.com/nikolasp)
- [mbackonja](https://github.com/mbackonja)
- [Endi1](https://github.com/Endi1)
- [printscreen](https://github.com/printscreen)
- [killix](https://github.com/killix)
- [LeFnord](https://github.com/lefnord)
- [FlorianWendelborn](https://github.com/FlorianWendelborn)

# License

Copyright (c) 2016 [6etacat](https://github.com/6etacat) by [MIT](https://opensource.org/licenses/MIT)
