<template>
  <div id="app">
    <div class="toc-container">
      <div id="toc"></div>
    </div>
    <div class="header">
      <h1>VueMarkdownPlus Live Demo</h1>
      <div class="horizontal-flex-container">
        <div class="checkbox">
          <label><input v-model="show" type="checkbox" />show</label>
        </div>
        <div class="checkbox">
          <label><input v-model="html" type="checkbox" />html</label>
        </div>
        <div class="checkbox">
          <label><input v-model="breaks" type="checkbox" />breaks</label>
        </div>
        <div class="checkbox">
          <label><input v-model="linkify" type="checkbox" />linkify</label>
        </div>
        <div class="checkbox">
          <label><input v-model="emoji" type="checkbox" />emoji</label>
        </div>
        <div class="checkbox">
          <label><input v-model="typographer" type="checkbox" />typographer</label>
        </div>
        <div class="checkbox">
          <label><input v-model="toc" type="checkbox" />toc</label>
        </div>
      </div>
    </div>
    <div class="horizontal-flex-container">
      <textarea
        class="full-height horizontal-container content scroller"
        v-model="source"
        v-on:scroll="beginSync"
      ></textarea>
      <div class="full-height horizontal-container scroller" v-on:scroll="beginSync">
        <VueMarkdownPlus
          class="content"
          :source="source"
          :show="show"
          :html="html"
          :breaks="breaks"
          :linkify="linkify"
          :emoji="emoji"
          :typographer="typographer"
          :toc="toc"
          toc-id="toc"
        ></VueMarkdownPlus>
      </div>
    </div>
    <a
      class="github-fork-ribbon"
      href="https://github.com/6etacat/vue-markdown-plus"
      data-ribbon="Fork me on GitHub"
      title="Fork me on GitHub"
      >Fork me on GitHub</a
    >
  </div>
</template>

<script>
import VueMarkdownPlus from "vue-markdown-plus";
import defaultMarkdown from "./default.md";

export default {
  name: "DemoApp",
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
      leader: null,
      timeout: null,
    };
  },
  watch: {
    toc(toc) {
      if (!toc) {
        const elt = document.getElementById("toc");
        if (elt) {
          elt.innerHTML = "";
        }
      }
    },
  },
  methods: {
    beginSync(event) {
      if (!this.leader) {
        this.leader = event.target;
      }
      if (event.target === this.leader) {
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
          this.timeout = null;
          this.leader = null;
        }, 200);
        const { clientHeight, scrollTop, scrollHeight } = event.target;
        const percent = scrollTop / (scrollHeight - clientHeight);
        const scrollers = document.getElementsByClassName("scroller");
        for (let i = 0; i < scrollers.length; i += 1) {
          const elt = scrollers[i];
          if (elt !== this.leader) {
            elt.scrollTop = percent * (elt.scrollHeight - elt.clientHeight);
          }
        }
      }
    },
  },
};
</script>

<style>
/* override browser default */
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

/* github fork color */
.github-fork-ribbon::before {
  background-color: orange;
}

#app {
  padding: 5vh 20vw 5vh 20vw;
  height: 100vh;
}

.toc-container {
  display: flex;
  justify-content: center;
  position: fixed;
  top: calc(5vh + 6rem);
  left: 0;
  width: 20vw;
}

#toc {
  width: 14vw;
}

.header {
  height: 6rem;
}

input[type="checkbox"] {
  margin: 0 0.3rem;
}

.horizontal-flex-container {
  display: flex;
  gap: 0.6rem;
}

.horizontal-container {
  width: calc(30vw - 10px);
}

.full-height {
  margin: 0;
  padding: 0;
  height: calc(90vh - 6rem);
  display: block;
  border: solid #000 1px;
  overflow: auto;
}

.content {
  padding: 1rem;
  resize: none;
}

/* custom css styling */
.red {
  color: red;
}
</style>
