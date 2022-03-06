<template id="projects">
  <div v-if="!project.hidden || userPerm('HIDE_PROJECT')" class="card flex-md-row mb-4 rad-shadow h-md-250 project">
    <div class="card-body d-flex flex-column align-items-start">
      <strong v-if="project.tags" class="d-inline-block mb-2 text-light"><i style="padding: 0 0.3rem" v-for="(tag, v) in project.tags" :key="v" :class="tag.icon"/></strong>
      <h3 class="mb-0">
        <a class="text-light" :href="project.projectLink">{{ project.name }}</a>
      </h3>
      <div v-if="project.gitlink" class="mb-1 text-muted">{{ project.github.name }}</div>
      <p class="card-text mb-auto">{{ project.description }}</p>
      <div class="btn-group space">
        <a v-if="project.github" class="btn btn-github" :href="project.github.html_url" target="_blank"><i class="fab fa-github"/></a>
        <NuxtLink v-if="project.projectLink" class="btn btn-main card-link" :to="project.projectLink">To Project</NuxtLink>
        <button v-if="userPerm('HIDE_PROJECT') && !project.hidden" type="button" class="btn btn-main" data-bs-toggle="tooltip" data-bs-placement="top" title="Hide" @click="hideProject(project)"><i class="fas fa-eye"/></button>
        <button v-else-if="project.hidden && userPerm('HIDE_PROJECT')" type="button" class="btn btn-main" data-bs-toggle="tooltip" data-bs-placement="top" title="Unhide" @click="hideProject(project)"><i class="fas fa-eye-slash"/></button>
        <button v-if="userPerm('HIDE_PROJECT')" type="button" class="btn btn-red" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" @click="deleteProject(project)"><i class="fas fa-trash-alt"/></button>
      </div>
      <!-- <div class="btn-group space">
        <a class="btn btn-github" @click="isActive = !isActive"><i class="fas fa-bars"/></a>
        <div class="bars" :class="{active: isActive}">
          <a v-if="project.github" class="btn btn-github" :href="project.github.html_url" target="_blank"><i class="fab fa-github"/></a>
          <NuxtLink v-if="project.projectLink" class="btn btn-main card-link" :to="project.projectLink">To Project</NuxtLink>
          <button v-if="userPerm('HIDE_PROJECT') && !project.hidden" type="button" class="btn btn-main" data-bs-toggle="tooltip" data-bs-placement="top" title="Hide" @click="hideProject(project)"><i class="fas fa-eye"/></button>
          <button v-else type="button" class="btn btn-main" data-bs-toggle="tooltip" data-bs-placement="top" title="Unhide" @click="hideProject(project)"><i class="fas fa-eye-slash"/></button>
          <button type="button" class="btn btn-red" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" @click="deleteProject(project)"><i class="fas fa-trash-alt"/></button>
        </div>
      </div> -->
      <div v-if="project.language.length > 0" class="btn-group">
      {{langcolor(lang.name)}}
        <div v-for="(lang, l) in project.language.slice(0, 3)" :key="l" type="button" v-bind:style="'background: '+ langcolor(lang.name)" class="langtags btn"> <!--bg-'+ replace(lang.name)-->
        {{lang.name}} <span>{{lang.percent}}%</span>
        </div>
      </div>
    </div>
    <a href="#" v-if="project.thumbnail">
      <img class="card-img-right d-none d-lg-block maskimage" data-src="holder.js/200x250?theme=thumb" alt="" style="width: 200px;" :src="baseURL + project.thumbnail">	
    </a>
  </div>
</template>

<script>
const axios = require('axios');
const moment = require('moment');

export default {
  name: 'projectcard',
  template: '<projectcard/>',
  transition: 'slide-bottom',
  props: {
    project: {}
  },
  data() {
    return {
      baseURL: "",
      isActive: false
    }
  },
  methods: {
    async langcolor(language) {
      const langcolors = await this.$content('languagecolors').fetch();
      console.log(langcolors[language] || "#ffffff")
      return langcolors[language] || "#ffffff"
    },
    async hideProject(project) {
      this.$store.commit('projects/hide', project._id);
      await this.$axios.$post('/api/project/hideProject', {
        id: project._id,
        isHidden: !project.hidden
      }).then(async (res) => {
        console.log(res)
      })
    },
    async deleteProject(project) {
      this.$store.commit('projects/delete', project._id);
      await this.$axios.$post('/api/project/deleteProject', {
        id: project._id,
      }).then(async (res) => {
        console.log(res)
      })
    },
    replace(string) {
      return string.toLowerCase().replaceAll("#", "sharp").replaceAll("+", "plus").replaceAll(".", "dot");
    },
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
      } else {
        return false;
      }
    },

  },
  mounted() {
    this.baseURL = this.$config.baseURL;
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
.bars {
  -webkit-transition: width 2s ease 0.5s;
  -moz-transition: width 2s ease 0.5s;
  -o-transition: width 2s ease 0.5s;
  transition: width 2s ease 0.5s;
  width: 0px;
  float: left;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  &.active {
    width: 100%;
  }
}

</style>