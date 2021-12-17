<template>
  <div class="news">
    <div class="container">
      <div class="row">
        <div class="col-md-8 post-main">
          <h3 class="pb-3 mb-4 border-bottom">TestPost</h3>
          <div class="blog-post">
            <div class='inputBox bg-github p-3'>
              <input id="title" type='text' name='title' class="blog-post-title" placeholder="Title" v-model="title"/>
            </div>
            <p class="blog-post-meta text-muted">'creationdate' by 'you'</p>
            <div class="inputBox bg-github p-3">
              <textarea placeholder="Description" id="description" v-model="description"></textarea>
            </div>
            <hr>
            <div class="inputBox bg-github p-3" v-for="(sectblock, sd) in sectionBlocks" :key="sd">
              <input v-if="'header' in sectblock" v-model="sectblock.header" placeholder="Header">
              <br>
              <textarea v-if="'text' in sectblock" v-model="sectblock.text" placeholder="Content"></textarea>
            </div>
          </div>
        </div>
        <div class="col-md-4 sidebar">
          <div class="p-3 mb-3">
            <h4 class="font-italic">About</h4>
            <p class="mb-0">
              test <em>AAAAAAAAAAAAAAA</em>
            </p>
          </div>
          <div class="p-3">
            <h4 class="font-italic">Other Posts</h4>
            <ol class="list-unstyled mb-0">
              <li><a class="link" href="#">Other Post</a></li>
            </ol>
          </div>
          <div class="p-3">
            <h4>Sections</h4>
            <div class="btn-group space">
              <button @click="addSectionBlock()" class="btn btn-main">+ Add A Section</button>
              <button @click="removeSectionBlock()" class="btn btn-red">-</button>
            </div>
          </div>
        </div>
      </div>
      <div class="preview-post">
        <div class="row">
          <div class="col-md-8 post-main">
            <h2>Preview</h2>
            <div class="blog-post">
              <h2 class="blog-post-title">{{ title }}</h2>
              <p class="blog-post-meta text-muted">'creationdate' by 'you'</p>
              <p class="blog-post-description"><span v-html="description"></span>{{ description }}</p>
              <hr>
              <div v-for="(blcck, ddd) in sectionBlocks" :key="ddd">
                <h2 v-if="'header' in blcck">{{ blcck.header }}</h2>
                <p v-if="'text' in blcck">{{ blcck.text }}</p>
                <hr>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="m-3 btn btn-github" v-on:click="createpost">Publish</button>
    </div>
    <ArvidFooter></ArvidFooter>
  </div>
</template>

<script>

import moment from 'moment';
export default {
  data() {
    return {
      author: '',
      title: '',
      description: '',
      sectionBlocks: [],
      tags: [],
      stringRegex: /^[a-zA-Z0-9]*$/
    }
  },
  content: {
    nestedProperties: ['author.name']
  },
  async asyncData({ $content, params, $axios, $config }) {

  },
  methods: {
    addSectionBlock() {
      this.sectionBlocks.push({header: "", text: ""})
    },
    removeSectionBlock() {
      if (this.sectionBlocks.length <= 0) return; 
      this.sectionBlocks.pop();
    },
    timeSince(date) {
      return moment(date).fromNow(true)
    },
    formatDate(date) {
      return moment(date).format("DD MMMM, YYYY")
    },
    showSnackbar(message, type) {
	    this.$notifier.showMessage({ content: message, color: type })
	  },
    userPerm(perm) {
      if (this.isAuthenticated) {
        if (this.$store.getters.getUserInfo.role.permissions.includes(perm)) {
          return true;  
        } else {
          return false;
        }
      }
    },
    async createpost() {
      let newblocks = []
      console.log(this.description)
      console.log(tinymce.get("description").getContent())
      this.description = tinymce.get("description").getContent();
      let description = tinymce.get("description").getContent();
      const { title, tags, sectionBlocks } = this;
      if (!title || !description) {
        return this.showSnackbar("Please fill out title and description field", 'success')
      }
      if (!title.match(this.stringRegex)) {
        return this.showSnackbar("One (or more) of the fields contains invalid characters", 'warning')
      }
      let json = {
        title: title,
        description: description,
        author: this.$store.getters.getUserInfo,
        tags: tags
      }
      // Remove Empty Keys
      if (sectionBlocks.length > 0) {
        sectionBlocks.forEach(block => {
          let o = Object.fromEntries(Object.entries(block).filter(([_, v]) => v != "" || null));
          newblocks.push(o)
        })
        console.log(sectionBlocks)
        console.log(newblocks)
        Object.assign(json, {sectionBlocks: newblocks})
      }
      
      
      const data = new FormData();
      //data.append("image", document.getElementById('image').files[0]);
      data.append('json', JSON.stringify(json));
      
      
      const post = await this.$axios.$post("api/news/newspost", data).then((res) => {
        this.showSnackbar(res.message)
      })
      this.$router.push("/blog");
      this.title = '';
      this.description = '';
      this.sectionBlocks = [];
      this.tags = [];
    },
  },
  mounted() {
    tinymce.init({
      selector: '#description',
      plugins: "link",
    });
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;  
    },
  }
}
</script>
<style lang="scss">
$badgeselectcolor: #dddddd;
$colorpalette: (
  "moonlit": linear-gradient(to right, #0f2027, #203a43, #2c5364),
  "argon": linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9),
  "velvet-sun": linear-gradient(to top, #e1eec3, #f05053),
  "meridian": linear-gradient(45deg, #283c86, #45a247)
);

// Website colorscheme
$maincolors: (
  "grey": #212529,
  "darkblue": #192D40,
  "blue": #21303A,
  "cyan": #375D72,
  "lime": #7FCD8A,
  "white": #F4F0E7,
  "lightblue": #5DACB6
);
@function colorscheme($color) {
  @return map-get($maincolors, $color);
}
@function gradientscheme($color) {
  @return map-get($colorpalette, $color);
}
.news {
  list-style-type: none;
  .preview-post {
    .post-main {
      background: colorscheme('darkblue');
      border-radius: 0.5rem;
      padding: 3rem;
      .blog-post-title {
        font-family: 'MedievalSharp';
        &::first-letter {
          position: relative;
          font-size: 3ch;
          color: #f05053;
          text-transform: uppercase;
        }
      }
      .blog-post-description {
        font-weight: 500;
      }
    }
  }
  .sidebar {
    //background-color: colorscheme('blue');
    border-radius: 0.25rem;
  }
}
</style>