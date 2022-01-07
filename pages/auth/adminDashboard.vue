
<template>
  <div id="admin-dashboard" class="container-fluid">
    <ul class="nav nav-tabs nav-justified">
      <li class="nav-item"><a data-bs-toggle="tab" href="#tab1" class="nav-link active">Dashboard</a></li>
      <li class="nav-item"><a data-bs-toggle="tab" href="#tab2" class="nav-link">Users</a></li>
      <li class="nav-item"><a data-bs-toggle="tab" href="#tab3" class="nav-link">Ratings</a></li>
    </ul>

    <div class="tab-content">
      <div id="tab1" class="tab-pane fade active show">
        <div class="jumbotron">
          <h3 class="display-4">Admin Dashboard</h3>
          <div class="row">
            <div class="col-sm-4 d-flex">
              <div class="infobox rad-shadow">
                <div class="ms-3">
                  <div class="d-flex align-items-center">
                    <h3 class="mb-0">{{ users.users.length }}</h3><span class="d-block ms-2">Users</span>
                  </div>
                  <p class="mb-0">Now that's a lotta users</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 d-flex">
              <canvas class="chart rad-shadow" id="rolesChart"></canvas>
            </div>
            <div class="col-sm-4 d-flex">
              <canvas class="chart rad-shadow" id="postsChart"></canvas>
            </div>
          </div>
        </div>
      </div>
      <div id="tab2" class="tab-pane fade">
        <div class="users">
          <div class="nav">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-filter"/></span>
              </div>
              <input type="text" v-model="searchbar" name='search' class="form-control" placeholder="" aria-label="">
            </div>
            <a v-for="(user, i) in filteredList" :key="i" class="users-list" data-bs-toggle="tab" :href="'#tab' + user._id" :class="{active: i === 0}">
              <div class="name">
                <img class="img-fluid" width="50px" :src="baseURL + user.profileimg"/>
                <p class="badge bg-dark rounded-pill">{{ user.name }}</p>
              </div>
              <hr class="line">
              <div class="role">
                <p class="badge rounded-pill" :class="'bg-' + user.role.name">{{ user.role.name }}</p>
              </div>
            </a>
          </div>
          <div class="tab-content">
            <div v-for="(user, i) in filteredList" :key="i" :id="'tab' + user._id" class="tab-pane fade" :class="{'show active': i === 0}">
              <div class='jumbotron'>
                <h1 class='display-4'>{{ user.name }}'s Profile</h1>
                <hr class='my-4'>
                <p class='lead'>{{ user.email }}</p>
                <div class="dropdown">
                  <button class="btn btn-🤯 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Permissions</button>
                  <form class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" data-bs-auto-close="outside" @submit.prevent="changePerms($event, user)">
                    <!--<div v-for="(perm, l) in roles[roles.length-1].permissions" :key="l" class="dropdown-item form-check">
                      <input class="form-check-input" type="checkbox" value="" :id="perm" :checked="user.role.permissions.includes(perm)">
                      <label class="form-check-label" :for="perm">{{ perm }}</label>
                    </div>-->
                    <div v-for="(perm, l) in roles[roles.length-1].permissions" :key="l" class="dropdown-item form-check form-switch">
                      <input class="form-check-input" :id="perm" :checked="user.role.permissions.includes(perm)" type="checkbox">
                      <label class="form-check-label" :for="perm">{{ perm }}</label>
                    </div>
                    <button class="btn btn-🤯" type="submit">Submit</button>
                  </form>
                </div>
                <div class="btn-group">
                  <button class="btn btn-🤯" type="button">{{ user.role.name }}</button>
                  <button type="button" class="btn btn-🤯 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu dropdown-menu-right" data-bs-auto-close="outside">
                    <button v-for="(rank, j) in roles" :key="j" class="dropdown-item" type="button" @click="rolesname(rank.name, user.email)"><span class="icon"><i :class="rank.icon"/></span><span class="roletxt">{{ rank.name }}</span></button>
                  </div>
                </div>
                <p class="lead">Creation Date: {{ formatDate(user.createdAt) }}
                  <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                    99+
                    <span class="visually-hidden">New alerts</span>
                  </span>
                </p>
                <button v-if="!user.banned" data-bs-toggle="tooltip" data-bs-placement="top" :title="'Ban ' + user.name" v-on:click="banUser(user)" class="btn btn-red"><i class="fas fa-gavel"/></button>
                <button v-else v-on:click="unbanUser(user)" data-bs-toggle="tooltip" data-bs-placement="top" :title="'Unban ' + user.name" class="btn btn-success"><i style="transform: rotate(135deg)" class="fas fa-gavel"/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="tab3" class="tab-pane fade">
        <div class="jumbotron" v-for="(review, o) in reviews" :key="o">
          <h1 class="display-4"><i style="color: yellow" v-for="x in review.rating" :key="x" class="fas fa-star" /></h1>
          <p class="lead">{{ review.author }}: "{{ review.review }}"</p>
          <button class="lead link" @click="changeReview(review)">Edit Review</button>
          <div v-if="editReview.active">
            <div class="form-floating custom">
              <input type="text" class="form-control shadow-none" id="floatingSearch" placeholder="Search" v-model="editReview.title">
              <label for="floatingSearch">Edit Author</label>
            </div>
            
            
          </div>
          <hr class="my-4">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const axios = require('axios');
const moment = require('moment');
export default {
  name: "admindashboard",
  middleware: "isAuthenticated",
  data() {
    return {
      role: "",
      searchbar: "",
      loaded: false,
      editReview: {
        active: false,
        user: ""
      }
    };
  },
  async asyncData({ $axios, $store, $config }) {
    const users = await $axios.$get("/api/auth/allusers");
    const roles = await $axios.$get("/api/auth/getRoles");
    const posts = await $axios.$get("/api/news/getnewsposts");
    const reviews = await $axios.get("/api/project/getRatings");
    let baseURL = $config.baseURL;
    return {
      users,
      posts,
      roles: roles.roles,
      baseURL,
      reviews: reviews.data.reviews
    };
  },
  methods: {
    async changeReview(review) {
      this.editReview.active = true
      this.editReview.title = review.author
    },
    async rolesname(role, email) {
      try {
        let token = this.$auth.strategy.token.get().split(" ")[1]
        await this.$axios.$post("/api/auth/postUpdateuser", {
          email: email,
          role: role
        }, {
          "Authorization": `Basic ${token}`
        });
      } catch (err) {
        console.log(err)
      }
    },
    async changePerms(e, user) {
      let userperms = []
      for (let i = 0; i < e.target.length; i++) {
        if (e.target[i].checked) {
          userperms.push(e.target[i].id)
        }
      }
      try {
        let token = this.$auth.strategy.token.get().split(" ")[1]
        await this.$axios.$post("/api/auth/changePerms/" + user._id, {
          permissions: userperms,
          user: user
        }, {
          Headers: {
            "Authorization": `Basic ${token}`
          }
        }).then((res) => {
          console.log(res)
        })
      } catch (err) {
        console.log(err)
      }
      
    },
    async banUser(user) {
      try {
        let token = this.$auth.strategy.token.get().split(" ")[1]
        
        await this.$axios.$post("/api/auth/banUser", user, {
          "Authorization": `Basic ${token}`
        });
      } catch (err) {
        console.log(err)
      }
      this.$nuxt.refresh();
    },
    async unbanUser(user) {
      try {
        let token = this.$auth.strategy.token.get().split(" ")[1]
        await this.$axios.$post("/api/auth/unbanUser", user, {
          "authorization": `Basic ${token}`
        });
      } catch (err) {
        console.log(err)
      }
      this.$nuxt.refresh();
    },
    formatDate(date) {
      return moment(date).format("DD/MM/YY");
    },
    async chart() {
      const rolesCTX = document.getElementById("rolesChart").getContext("2d");
      const postsCTX = document.getElementById("postsChart").getContext("2d");
      let grad = rolesCTX.createLinearGradient(0, 0, 0, 400);
      grad.addColorStop(0.24, "rgba(207, 193, 159, 1)");
      grad.addColorStop(0.26, "rgba(82, 79, 44, 1)");
      grad.addColorStop(0.28, "rgba(207, 193, 159, 1)");
      grad.addColorStop(0.29, "rgba(207, 193, 159, 1)");
      grad.addColorStop(0.45, "rgba(255, 236, 180, 1)");
      grad.addColorStop(0.65, "rgba(58, 44, 31, 1)");
      let postdays = [];
      let lastdays = this.lastDays(5);
      this.posts.posts.forEach(post => {
        let formatteddate = this.formatDate(post.createdAt);
        postdays.push(formatteddate);
      })
      let postsdata = [];
      lastdays.forEach(day => {
        postsdata.push(postdays.filter(x => x == day).length);
      })
      const dataPosts = {
        labels: lastdays,
        datasets: [{
          label: "Posts",
          data: postsdata,
          borderWidth: 1,
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          borderColor: "#fff",
          pointStyle: "rectRounded",
          pointBorderColor: "#F4F0E7",
          tooltipFillColor: "rgba(0,0,0,0.8)",
          tooltipFontStyle: "bold",
          tension: 0,
          fill: false,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#5DACB6",
          hoverBorderWidth: 3,
          hoverBorderColor: "blue",
          inflateAmount: 1,
        }]
      };
      const rolesdata = [];
      const rolesname = [];
      const userroles = [];
      this.users.users.forEach(user => userroles.push(user.role.name))

      this.roles.forEach(role => {
        rolesname.push(role.name)
        rolesdata.push(userroles.filter(x => x == role.name).length);
      })
      const dataRoles = {
        labels: rolesname,
        datasets: [{
          label: "Users",
          data: rolesdata,
          borderWidth: 1,
          //backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          //borderColor: grad,
          borderColor: "#fff",
          hoverBackgroundColor: "rgba(255,255,255,0.3)",
          pointStyle: "rectRounded",
          pointBorderColor: "#F4F0E7",
          tooltipFillColor: "rgba(255,255,255,0.8)",
          tooltipFontStyle: "bold",
          color: "rgba(255,255,255,1)",
          tension: 0,
          inflateAmount: 1,
        }]
      };
      const optionsRoles = {
        responsive: true,
        //events: ['hover'],
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepValue: 1
            },
            scaleLabel: {
              display: true,
              labelString: "Amount"
            }
          }]
        },
        hover: {
          mode: "label"
        },
        title: {
          display: true,
          text: "Roles"
        },
        legend: {
          display: false
        },
      };
      const optionsPosts = {
        responsive: true,
        //events: ['hover'],
        scales: {
          yAxes: [{
            /*gridLines: {
              display: true,
              color: "rgba(255,255,255,0.05)"
            },*/
            ticks: {
              beginAtZero: true,
              stepValue: 1
            },
            scaleLabel: {
              display: true,
              labelString: "Users"
            }
          }],
          xAxes: [{
          /*gridLines: {
            display: true,
            color: "rgba(255,255,255,0.05)"
          },*/
          }]
        },
        title: {
          display: true,
          text: "Posts"
        },
        legend: {
          display: false
        }
      };
      const rolesChart = new Chart(rolesCTX, { type: "bar", data: dataRoles, options: optionsRoles });
      const postsChart = new Chart(postsCTX, { type: "line", data: dataPosts, options: optionsPosts });
    },
    lastDays(days, date) {
      var result = [];
      for (var i = 0; i < days; i++) {
        let d = new Date();
        d.setDate(d.getDate() - i);
        d = this.formatDate(d);
        result.push(d);
      }
      return (result);
    },
    showSnackbar(message) {
      this.$notifier.showMessage({ content: message, color: '#ff0000' })
    },
  },
  mounted() {
    if (document.getElementById("rolesChart")) {
      this.chart();
    }
  },
  computed: {
    filteredList() {
      if (!this.users)
        return;
      return this.users.users.filter(user => {
        return user.name.toLowerCase().includes(this.searchbar.toLowerCase()) ||
        user._id.toLowerCase().includes(this.searchbar.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchbar.toLowerCase()) ||
        user.role.name.toLowerCase().includes(this.searchbar.toLowerCase());
      });
    }
  },
};

</script>
<style lang="scss">
$colorpalette: (
  "moonlit": linear-gradient(to right, #0f2027, #203a43, #2c5364),
  "argon": linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9),
  "velvet-sun": linear-gradient(to top, #e1eec3, #f05053),
  "meridian": linear-gradient(45deg, #283c86, #45a247),
  "bluegreen": linear-gradient(45, #402565, #30BE96)
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
@mixin rad-shadow {
  border: 1px solid hsl(200 10% 50% / 15%);
  box-shadow: 0 1rem .5rem -.5rem;
  box-shadow:
    0 2.8px 2.2px hsl(200 50% 3% / calc(.3 + .03)),
    0 6.7px 5.3px hsl(200 50% 3% / calc(.3 + .01)),
    0 12.5px 10px hsl(200 50% 3% / calc(.3 + .02)),
    0 22.3px 17.9px hsl(200 50% 3% / calc(.3 + .02)),
    0 41.8px 33.4px hsl(200 50% 3% / calc(.3 + .03)),
    0 100px 80px hsl(200 50% 3% / .3)
  ;
}
$border-radius: 0.25rem;
#admin-dashboard {
  #tab2 {
    .users {
      overflow: hidden;
      display: flex;
      flex-direction: row;
      .tab-content {
        margin: 4rem;
        width: 100%;
        .permlist {
          list-style-type: none;
          width: 10vw;
        }
      }
      .nav {
        &::-webkit-scrollbar {
          width: 0;  /* Remove scrollbar space */
          background: transparent;  /* Optional: just make scrollbar invisible */
        }
        //background: colorscheme('lightblue');
        border: 1px solid colorscheme('white');
        padding: 1rem;
        padding-right: 2rem;
        margin-top: 0;
        width: 20rem;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        height: 45rem;
        overflow-x: hidden;
        flex-direction: column;
        flex-wrap: nowrap;
        .users-list {
          background: colorscheme('blue');
          padding: 0.5rem 1rem;
          margin: 0.2rem;
          color: colorscheme('white');
          border-radius: 0.5rem;
          width: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          border: none;
          justify-content: flex-start;
          align-content: flex-start;
          align-items: flex-start;
          border: 3px solid transparent;
          transition: all 200ms ease-in-out;
          &.active, &.show {
            border: 3px solid colorscheme('lime');
          }
          &:hover {
            &.active {
              border: 3px solid rgba(colorscheme('lime'), 1);
            }
            border: 3px solid rgba(colorscheme('lime'), 0.3);

          }
          .name {
            font-size: 2ch;
            flex: 1 1 auto;
            display: flex;
            flex-direction: row;
            position: relative;
            align-items: center;
            justify-content: flex-start;
            color: colorscheme('white');
            img {
              flex: 0 0 auto;
              border-radius: 50%;
            }
          }
          .line {
            flex: 1 1 auto;
            margin-top: 0.5rem !important;
            margin-bottom: 0.5rem !important;
            background: colorscheme('white');
            width: 100%;
          } 
        }
      }
    }
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
        &.active, &.show {
          background: none;
          border: none;
          color: colorscheme('lime');
          border-top: 2px solid colorscheme('lime');
        }
      }
    }
  }
  .chart {
    background: colorscheme('blue');
    border-radius: 0.5rem / 0.5rem;
    margin-bottom: 1rem;
    margin: 0.5rem;
  }
  .infobox {
    .icon {
      margin-right: 2rem;
    }
    display: flex;
    flex-direction: column;
    background: colorscheme('blue');
    border-radius: 0.5rem / 0.5rem;
    width: 100%;
    margin-bottom: 1rem;
    justify-content: center;
    margin: 0.5rem;
    & > * {
      align-content: center;
      font-weight: 300;
      align-self: center;
      vertical-align: middle;
    }
  }
  .btn-group, .dropdown {
    .btn {
      &.btn-role {
        background: colorscheme('cyan');
        color: #fff;
        &.dropdown-toggle {
          border-left: 1px solid #fff;
        }
        &:hover, &:focus {
          outline: none;
          box-shadow: none;
          .dropdown-toggle {
            border-left: 1px solid #fff;
          }
        }
      }
    }
    .form-switch {
      .form-check-input {
        margin-right: 0.5rem;
        margin-left: -0.5rem;
        background-color: colorscheme('darkblue');
        border-color: red;
        box-shadow: 0 0 3px 1px darken(red, 20), 0 0 2px 2px darken(red, 15), inset 0 0 10px
          rgba(0,0,0,1), 0 5px 20px rgba(0,0,0,.5), inset 0 0 15px rgba(0,0,0,.2);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='red'/%3e%3c/svg%3e");
        transition: all 0.2s ease-in-out;
        &:checked {
          background-position: right center;
          background-color: colorscheme('darkblue');
          box-shadow: 0 0 3px 1px darken(lime, 20), 0 0 2px 2px darken(lime, 15), inset 0 0 10px
          rgba(0,0,0,1), 0 5px 20px rgba(0,0,0,.5), inset 0 0 15px rgba(0,0,0,.2);
          border-color: colorscheme('lime');
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='lime'/%3e%3c/svg%3e");
        }
      }
    }
    .dropdown-menu {
      background: colorscheme('cyan');
      color: #fff;
      padding: 0.3rem;
      .dropdown-item {
        transition: all 0.1s ease; 
        padding-left: 0.5rem;
        .roletxt {
          color: colorscheme('white');
          border-left: 5px solid colorscheme('white');
          border-radius: 20%;
          position: relative;
          padding-left: 0.3rem;
        }
        .icon {
          padding-right: 0.3rem;
          color: colorscheme('white');
          font-size: 1.5rem;
        }
        border-radius: 20%;
        color: colorscheme('white');
        background: colorscheme('cyan');
        &:hover {
          .icon {
            color: colorscheme('lime');
          }
          .roletxt {
            color: colorscheme('lime');
            border-left: 5px solid colorscheme('darkblue');
          }
        }
      }
    }
  }
  color: #fff;
  .table {
    text-align: left;
    color: #fff;
  }
  .form-select {
    padding: 0.5rem 1rem;
    color: #fff;
    flex: 1 1 auto;
    background: none;
    border: none;
    outline: none;
    &:focus {
      border: none;
      outline: none;
    }
    option {
      background: colorscheme('cyan');
      background: var(--dropdownbackground);
      border: 0.1px solid white;
      border-radius: $border-radius;
      color: #fff;
    }
  }
  .searchbar {
    position: relative;
    background: colorscheme('blue');
    text-align: left;
    vertical-align: middle;
    border-radius: 0.5rem;
    outline: none;
    width: 100%;
    border: none;
    color: #ffffff;
    font-size: 1rem;
    margin-top: 1rem;
    letter-spacing: 1px;
    border-bottom: 2px solid rgba(255, 255, 255, 1);
    &.galaxyborder {
      border-image: url('/images/galaxy.jpg') 30 fill;
      border-width: 5px;
      border-image-slice: 60 30;
      border-style: solid;
    }
    margin-bottom: 1rem;
    padding: 1rem;
    &::placeholder {
      color: #ddd;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active  {
      -webkit-text-fill-color: White;
      background: rgba(0,0,0,0);
      //-webkit-box-shadow: 0 0 0px 1000px #000 inset;
      //box-shadow: 0 0 0px 1000px #000 inset;
      transition: background-color 5000s ease-in-out 0s;
    }
    &:focus ~ span,
    &:focus ~ span,
    &:valid ~ span,
    &:valid ~ span {
      transform: translateY(-24px);
    }
  }
}


</style>
