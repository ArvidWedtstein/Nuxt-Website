<template>
  <div class="news container">
    <div class="row">
      <div class="col-md-8 post-main">
        <h3 class="pb-3 mb-4 border-bottom">TestPost</h3>
        <div class="blog-post">
          <div class='inputBox bg-github p-3'>
            <input id="title" type='text' name='title' class="blog-post-title" placeholder="Title" v-model="title"/>
          </div>
          <p class="blog-post-meta text-muted">date by <a class="link" href="#">author</a></p>
          <div class="inputBox bg-github p-3">
            <textarea data-provide="markdown" placeholder="Text" v-model="description"></textarea>
          </div>
          <hr>
          <div class="inputBox bg-github p-3" v-for="(bblock, abc) in textBlock" :key="abc">
            <textarea v-model="bblock.text" placeholder="Text"></textarea>
          </div>
          <div class="inputBox bg-github p-3" v-for="(sectblock, sd) in sectionBlock" :key="sd">
            <input v-model="sectblock.header" placeholder="Header">
            <br>
            <textarea v-model="sectblock.text" placeholder="Content"></textarea>
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
          <h4>Text Blocks</h4>
          <div class="btn-group space">
            <button @click="addTextBlock()" class="btn btn-main">+ Add Text Block</button>
            <button @click="removeTextBlock()" class="btn btn-red">-</button>
          </div>
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
          <h3 class="pb-3 mb-4 border-bottom">Test Post</h3>
          <div class="blog-post">
            <h2 class="blog-post-title">{{ title }}</h2>
            <p class="blog-post-meta text-muted">creationdate by <a class="link" href="#">you</a></p>
            <p>{{ description }}</p>
            <hr>
            <div v-for="(blogg, ccc) in textBlock" :key="ccc" >
              <p>{{ blogg.text }}</p>
            </div>
            <hr>
            <div v-for="(blcck, ddd) in sectionBlock" :key="ddd">
              <h2>{{ blcck.header }}</h2>
              <p>{{ blcck.text }}</p>
              <hr>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="btn btn-github">Publish</button>
    <div class="container center">
  <ul class="list "id="list">
    <li draggable="true"
        v-for="(item, index) in items"
        :key="index"
        v-on:dragstart="dragstart($event)"
        v-on:dragenter="dragenter($event, index)"
        v-on:dragend="dragend($event, index)"
        >{{item.label}}<span>{{item.id}}</span></li>
    <li ref="ph" class="ph">Placeholder</li>
  </ul>
</div>
    <ArvidFooter></ArvidFooter>
  </div>
</template>

<script>
import moment from 'moment';
import Vue from 'vue';
export default {
  data() {
    return {
      author: '',
      title: '',
      description: '',
      textBlocks: 0,
      sectionBlocks: 0,
      textBlock: [],
      sectionBlock: []
    }
  },
  content: {
    nestedProperties: ['author.name']
  },
  async asyncData({ $content, params, $axios, $config }) {
    /*let baseURL = $config.baseURL;
    const post = await $axios.$get("api/news/getnewspost/" + params.slug);
    console.log(post.posts[0])
    return {
      post: post.posts[0],
      baseURL,
      params
    }*/
  },
  methods: {
    addTextBlock() {
      //this.textBlock[`textBlock${this.textBlocks}`] = {"text": ""}
      this.textBlock.push({text: ""})
      console.log(this.textBlock)
    },
    removeTextBlock() {
      if (this.textBlock.length <= 0) return; 
      this.textBlock.pop();
    },
    addSectionBlock() {
      //this.textBlock[`textBlock${this.textBlocks}`] = {"text": ""}
      this.sectionBlock.push({header: "", text: ""})
      console.log(this.sectionBlock)
    },
    removeSectionBlock() {
      if (this.sectionBlock.length <= 0) return; 
      this.sectionBlock.pop();
    },
    updateTextBlock(obj, prop, event) {
      // REPLACE LINK WHEN BEFORE POST IS DISPLAYED
      /*let txt = event.target.value;
      var urlRegex = /(https?:\/\/[^\s]+)/g;
      txt = txt.replace(urlRegex, function(url) {
        return '<a class="link" href="' + url + '">' + url + '</a>';
      })
      console.log(txt)*/
      Vue.set(obj, prop, event.target.value);
    },
    timeSince(date) {
      return moment(date).fromNow(true)
    },
    formatDate(date) {
      return moment(date).format("DD MMMM, YYYY")
    },
    showSnackbar(message) {
	  this.$notifier.showMessage({ content: message, color: '#ff0000' })
	},
    editPost(i) {
      //var post = document.getElementById(`post${i}`)
      this.currenteditpost = i
      //post.contentEditable = true;
      //post.appendChild(savebtn)
    },
    async deletePost(i) {
      console.log(this.article.posts[i])
      const post = await this.$axios.$delete("api/news/deletenewspost", {id: this.article.posts[i]._id}).then((res) => {
        this.showSnackbar(res.message)
      })
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

  },
  mounted() {
      this._placeholder = this.$refs.ph;
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
    }
  }
  .sidebar {
    //background-color: colorscheme('blue');
    border-radius: 0.25rem;
  }
}
</style>