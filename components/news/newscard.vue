<template>
  <div class="card newspost">
    <img v-if="post.image" class="card-img-top" :src="baseURL + post.image" :alt="post.name" height="400">
    <div v-if="post.author" class="card-header" :id="'post' + i">
      <p v-if="post.author.name">{{ post.author.name }}</p>
      <img style="width: 50px" class="profileImg" v-if="post.author.profileimg" :src="baseURL + post.author.profileimg"/>
    </div>
    <div class="card-body" :id="'post' + i">
      <a :href="'/blog/' + post._id" v-if="post.title" class="card-title">{{ post.title }}</a>
      <p v-if="post.description" v-html="post.description" class="card-text description text-truncate"></p>
    </div>
    <div class="card-footer">
      <small v-if="post.tags" class="badge bg-success m-1" style="text-align: right;"><i v-for="(tag, v) in post.tags" :key="v" :class="tag.icon"/></small>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <a :href="'/blog/'+ post._id" class="btn btn-sm btn-outline-secondary">View</a>
          <a v-if="userPerm('MODIFY_POST')" href="/blog/new-post" class="btn btn-sm btn-outline-secondary">Edit</a>
          <a v-if="userPerm('MODIFY_POST')" @click="deletePost(i)" class="btn btn-sm btn-outline-danger">Delete</a>
        </div>
        <small class="text-muted">Last updated {{timeSince(post.updatedAt)}} ago <i class="fab fa-accessible-icon"/></small>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios');
const moment = require('moment');

export default {
  name: 'newscard',
  template: '<newscard/>',
  transition: 'slide-bottom',
  props: {
    post: {},
    i: 0
  },
  async asyncData({ $auth, $config }) {
    let baseURL = $config.baseURL;
    return {
      baseURL
    }
  },
  methods: {
    timeSince(date) {
      return moment(date).fromNow(true)
    },
    showSnackbar(message) {
      this.$notifier.showMessage({ content: message, color: 'success' })
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
    async deletePost(i) {
      let deletepost = this.$store.state.newspost.news[i];
      this.$store.commit('newspost/delete', this.$store.state.newspost.news[i]._id)
      const post = await this.$axios.$delete("api/news/deletenewspost", {id: deletepost._id}).then((res) => {
        this.showSnackbar(res.message, 'success')
      })
    },
  },
  mounted() {

  },
  computed: {
    getUserInfo() {
      if (this.isAuthenticated) {
        if (this.params == this.$store.getters.getUserInfo.id) {
          return this.$store.getters.getUserInfo;
        } else {
          return this.user.user;
        }
      } else {
        return this.user.user;
      }
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;  
    }
  }
}
</script>
<style lang="scss">


</style>