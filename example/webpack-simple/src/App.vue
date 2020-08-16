<template>
  <div id="app">
    <vue-markdown-plus>The time of **NOW** is :</vue-markdown-plus>
    <vue-markdown-plus :source="source"></vue-markdown-plus>
    <vue-markdown-plus :anchor-attributes="anchorAttrs">[A link to a website](https://google.com)</vue-markdown-plus>
    <vue-markdown-plus>
SyntaxHighlighter by highlight.js:

``` js
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
             ` class="${cls}"`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }
}
```
    </vue-markdown-plus>
    <vue-markdown-plus>**Custom Style**: Adds *style*{.red} using custom classes and ids</vue-markdown-plus>
    <vue-markdown-plus>**Inline Math**: $\sqrt{3x-1}+(1+x)^2$</vue-markdown-plus>
    <vue-markdown-plus></vue-markdown-plus>
    <vue-markdown-plus>**Block Math**</vue-markdown-plus>
    <vue-markdown-plus>$$\begin{array}{c}

      \nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
      = \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

      \nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

      \nabla \cdot \vec{\mathbf{B}} & = 0

      \end{array}$$
    </vue-markdown-plus>
    <vue-markdown-plus>
### Solar System Exploration, 1950s – 1960s

- [ ] Mercury
- [x] Venus
- [x] Earth (Orbit/Moon)
- [x] Mars
- [ ] Jupiter
- [ ] Saturn
- [ ] Uranus
- [ ] Neptune
- [ ] Comet Haley
    </vue-markdown-plus>
  </div>
</template>

<script>
import VueMarkdownPlus from 'vue-markdown-plus'

export default {
  name: 'app',
  data () {
    return {
      source: new Date().toLocaleTimeString(),
      anchorAttrs: {
        target: '_blank',
        rel: 'noopener noreferrer nofollow'
      }
    }
  },
  components: {
    VueMarkdownPlus
  },
  mounted () {
    setInterval(() => {
      this.source = new Date().toLocaleTimeString();
    }, 1000);
  }
}
</script>

<style>
.red {
  color: red;
}
</style>
