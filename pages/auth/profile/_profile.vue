<template>
  <div id="profile" class="container-fluid">
    <div class="jumbotron">
      <div class="profileimage">
        <object class="profile img-fluid unselectable" :data="baseURL + getUserInfo.profileimg"/>  
        <span class="edit">Change Picture<input id="profileimg" type="file"><button class="btn btn-main" @click="editProfilepicture">Change</button></span>
      </div>
      <h3 class="display-6">Well, hello there</h3>
      <h4 class="display-4 name unselectable">{{ getUserInfo.name }}</h4>
      <Table :head="['ID', 'Name', 'Email', 'Rank']" :body="[getUserInfo.id, getUserInfo.name, getUserInfo.email, getUserInfo.role.name]"></Table>
      <div v-if="isAuthenticated" class="offcanvas offcanvas-start text-light bg-dark" tabindex="-1" id="offcanvasEditProfile" aria-labelledby="offcanvasEditProfileLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Edit Profile</h5>
          <button type="button" class="btn btn-red" data-bs-dismiss="offcanvas" aria-label="Close">&times;</button>
        </div>
        <div class="offcanvas-body">
          <ProfileChangePassword></ProfileChangePassword>

          <!-- <div class="form-floating custom mt-3">
            <input type="password" class="form-control shadow-none" v-model="password.email" :class="{'is-valid': password.email.match(this.emailRegex), 'is-invalid': !password.email.match(this.emailRegex) || password.email.length == 0}">
            <label for="floatingPassword">Change Email</label>
          </div>
          <button @click="changePassword" class="btn btn-main">Change Email</button> -->
        </div>
      </div>
      <ul class="nav nav-tabs bg-dark">
        <li class="nav-item">
          <a class="nav-link active" data-bs-toggle="tab" href="#tab1">Posts</a>
        </li>
        <li v-if="isAuthenticated && profile" class="nav-item">
          <a class="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasEditProfile" aria-controls="offcanvasEditProfile">Edit Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="tab" href="#tab2" title="Your Reviews">Review</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="tab" href="#tab3" title="Your Timeline">Timeline</a>
        </li>
      </ul>
      <div class="tab-content">
        <div id="tab1" class="tab-pane fade active show">
          <div class="" v-for="(post, i) in userposts" :key="i" data-match-height="news-items">
            <NewsNewscard :post="post" :i="i"></NewsNewscard>
          </div>
        </div>
        <div id="tab2" class="tab-pane fade">
          
        </div>
        <div id="tab3" class="tab-pane fade">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: "profile",
  //middleware: "isAuthenticated",
  data() {
    return {
      profilePicture: null,
      emailRegex: /^\S+@\S+\.\S+$/,
      stringRegex: /^[a-zA-Z0-9]*$/,
      userposts: []
    }
  },
  async asyncData({ $axios, $config, params, $store, $auth }) {
    let baseURL = $config.baseURL;
    //console.log(params)
    if (!params.profile) {
      //const user = $store.getters.getUserInfo;
      return {
        baseURL
      }
    } else {
      const user = await $axios.$get("api/auth/getUserId/" + params.profile, {
        /*headers: {
          "authorization": `Basic ${$auth.strategy.token.get().split(" ")[1]}`
        }*/
      })
      
      return {
        user,
        params,
        baseURL
      }
    }
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
    },
    profile() {
      if (this.isAuthenticated) {
        if (!this.params.profile) return false
        if (this.$store.getters.getUserInfo.id == this.params.profile) return true
      } else {
        return false
      }
    }
  },
  methods: {
    async getNewsPost() {
      const posts = await this.$axios.get("api/news/getnewspostuser/" + this.getUserInfo.name)
      //console.log(posts)
      this.userposts = posts.data.posts
    },
    timeSince(date) {
      return moment(date).fromNow(true)
    },
    async editProfilepicture() {
      const data = new FormData();
      data.append("profileimg", document.getElementById('profileimg').files[0])
      if (!this.$auth.strategy.token.get().split(" ")[1]) {
        return
      }
      const user = await this.$axios.$post("/api/auth/changeProfileimg", data, {
        headers: {
          "authorization": `Basic ${this.$auth.strategy.token.get().split(" ")[1]}`
        }
      }).then(async (res) => {
          this.showSnackbar(res.message)
      })
      return user;
    },
    showSnackbar(message, type) {
      this.$notifier.showMessage({ content: message, color: type })
    },
    hashPassword(password) {
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(password, salt);
      return {
          hash
      };
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
    this.getNewsPost()
  }
};
</script>
<style lang="scss">
$colorpalette: (
    "moonlit": linear-gradient(to right, #0f2027, #203a43, #2c5364),
    "argon": linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9),
    "velvet-sun": linear-gradient(to top, #e1eec3, #f05053),
    "meridian": linear-gradient(45deg, #283c86, #45a247)
);

// Website colorscheme
$maincolors: (
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
#profile {
  top: 0;
  position: relative;
  .levelprogress {  
    position: relative;
    background: url("/images/UI/XPbar.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}
html {
  height: auto;
}

.nav {
  margin: 0rem 0;
  margin-bottom: 0;
  .nav-item {
    padding: 1rem 0;
    .nav-link {
      color: colorscheme('white');
      //border-top: 2px solid transparent;
      border-radius: none;
      text-decoration: none;
      &.active, &.show {
          background: none;
          border: none;
          
          color: colorscheme('lime');
          border-bottom: 2px solid colorscheme('lime');
      }
    }
  }
}
.jumbotron {
  .profileimage {
    position: relative;
    align-self: center;
    margin: auto;
    transition: 0.5s;
    padding: 1.5rem;
    width: 20rem;
    height: 20rem;
    outline: none;
    border: none;
    border-radius: 50%;
    transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    &:hover {
      transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease;
      .profile {
        filter: none;
      }
      .edit {
        display: block;
        background: rgba(0,0,0,0.3);
      }
    }
    .edit {
      position: absolute;
      width: 85%; 
      height: 85%;  
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: none;
      color: #fff;
      transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease;
    }
    .profile {
      transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease;
      max-width:100%;
      max-height:100%;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
.gold-text {
    background: linear-gradient(to bottom, #cfc19f 24%, #524f2c 26%, #cfc19f 28%, #cfc19f 29%, #ffecb4 45%, #3a2c1f 65%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

</style>
