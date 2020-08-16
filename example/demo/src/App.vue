<template>
  <div id="app">
    <h2>VueMarkdownPlus Live Demo</h2>
    <div class="flex">
      <div class="checkbox">
        <label><input v-model="show" type="checkbox">show</label>
      </div>
      <div class="checkbox">
        <label><input v-model="html" type="checkbox">html</label>
      </div>
      <div class="checkbox">
        <label><input v-model="breaks" type="checkbox">breaks</label>
      </div>
      <div class="checkbox">
        <label><input v-model="linkify" type="checkbox">linkify</label>
      </div>
      <div class="checkbox">
        <label><input v-model="emoji" type="checkbox">emoji</label>
      </div>
      <div class="checkbox">
        <label><input v-model="typographer" type="checkbox">typographer</label>
      </div>
      <div class="checkbox">
        <label><input v-model="toc" type="checkbox">toc</label>
      </div>
    </div>
    <div id="toc"></div>
    <div class="grid">
      <textarea v-model="source"></textarea>
      <VueMarkdownPlus :watches="['show','html','breaks','linkify','emoji','typographer','toc']"
      :source="source" :show=show :html=html :breaks=breaks :linkify=linkify :emoji=emoji
      :typographer=typographer :toc=toc toc-id="toc" v-on:rendered="refreshTOC">
      </VueMarkdownPlus>
    </div>
    <a class="github-fork-ribbon" href="https://github.com/6etacat/vue-markdown-plus" data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</a>
  </div>
</template>

<script>
import VueMarkdownPlus from 'vue-markdown-plus';
import defaultMarkdown from './default.md';

export default {
  name: 'Demo',
  components: {
    VueMarkdownPlus,
  },
  data() {
    return {
      source: defaultMarkdown,
      show: true,
      html: false,
      breaks: true,
      linkify: false,
      emoji: true,
      typographer: true,
      toc: false,
    };
  },
  methods: {
    refreshTOC() {
      if (!this.toc) {
        const elt = document.getElementById('toc');
        if (elt) {
          elt.innerHTML = '';
        }
      }
    },
  },
};
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.3/gh-fork-ribbon.min.css");

/* override browser default */
html,
body {
  margin: 0;
  padding: 0;
}

#app {
  padding: 0 10vw;
  padding-top: 5vh;
}

.flex {
  display: flex;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5vw;
}

.scrollable {
  overflow: auto;
}

/* custom css styling */
.red {
  color: red;
}
</style>
