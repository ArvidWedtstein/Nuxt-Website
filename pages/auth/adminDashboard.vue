
<template>
  <div id="admin-dashboard" class="container-fluid">
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px;">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
        <span class="fs-4">Sidebarss</span>
      </a>
      <hr>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="#" class="nav-link active" aria-current="page">
            <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"/></svg>
            Home
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white">
            <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white">
            <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg>
            Orders
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white">
            <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"/></svg>
            Products
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white">
            <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg>
            Customers
          </a>
        </li>
      </ul>
      <hr>
      <div class="dropdown">
        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
          <strong>mdo</strong>
        </a>
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
          <li><a class="dropdown-item" href="#">New project...</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
    <ul class="nav nav-tabs nav-justified topnavbar">
      <li class="nav-item"><a data-bs-toggle="tab" href="#tab1" class="nav-link link active">Dashboard</a></li>
      <li class="nav-item"><a data-bs-toggle="tab" href="#tab2" class="nav-link link">Users</a></li>
      <li class="nav-item"><a data-bs-toggle="tab" href="#tab3" class="nav-link link">Ratings</a></li>
      <li class="nav-item"><a data-bs-toggle="tab" href="#tab4" class="nav-link link">Roles</a></li>
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
                    <h3 class="mb-0">{{ users.length }}</h3><span class="d-block ms-2">Users</span>
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
          <div class='btn btn-corner'>
            <span class=''>test</span>
            <div class='corner-cover'></div>
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
              <input type="text" v-model="filter" name='search' class="form-control" placeholder="" aria-label="" @change="search">
            </div>
            <div v-for="(user, i) in filteredList" :key="i" class="users-list" data-bs-toggle="tab" :href="'#tab' + user._id" :class="{active: i === 0}">
              <div class="name">
                <img v-if="user.profileimg" class="img-fluid" width="50px" :src="baseURL + user.profileimg"/>
                <img v-else class="img-fluid" width="50px" src="/images/logo.svg"/>
                <p class="badge bg-dark rounded-pill">{{ user.name }}</p>
              </div>
              <hr class="line">
              <div class="role">
                <p class="badge rounded-pill" :class="'bg-' + user.role.name">{{ user.role.name }}</p>
              </div>
            </div>
          </div>
          <div class="tab-content">
            <div v-for="(user, i) in filteredList" :key="i" :id="'tab' + user._id" class="tab-pane fade" :class="{'show active': i === 0}">
              <AdmindashboardUserView :user="user" :roles="roles"></AdmindashboardUserView>
            </div>
          </div>
        </div>
      </div>
      <div id="tab3" class="tab-pane fade">
        <div class="jumbotron">
          <h3 class="display-4">Reviews</h3>
          <div class="row align-items-center justify-content-center">
            <div class="col-sm-4 align-self-center">
              <canvas class="chart rad-shadow" id="reviewChart"></canvas>
            </div>
          </div>
        </div>
        <AdmindashboardReviewlist :reviews="reviews"></AdmindashboardReviewlist>
      </div>
      <div id="tab4" class="tab-pane fade">
        <AdmindashboardCreaterolefield></AdmindashboardCreaterolefield>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div v-for="(role, x) in roles" :key="x" class="col flex-row card-group">
            <div class="card mb-4 h-md-250 project">
              <div class="card-header">{{ role.name }}</div>
              <div class="card-body d-flex flex-column align-items-start">
                <p class="card-text mb-auto h4 btn bg-white"><i :style="'color: ' + role.color" :class="role.icon"/></p>
                <ul class="list-group list-group-flush custom">
                  <li class="list-group-item" v-for="(perm, l) in role.permissions" :key="l">{{perm}}</li>
                </ul>
              </div>
              <div class="card-footer text-muted">test</div>
            </div>
          </div>
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
      filter: "",
      loaded: false,
      
      posts: [],
      users: [],
      roles: [],
      reviews: []
    };
  },
  async asyncData({ $axios, $store, $config }) {
    let baseURL = $config.baseURL;
    return {
      baseURL,
    };
  },
  methods: {
    async search() {
      this.$router.replace({query: {filter: this.filter.toLowerCase()}})
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
            "authorization": `Basic ${token}`
          }
        }).then((res) => {
          console.log(res)
        })
      } catch (err) {
        // console.log(err)
      }
      
    },
    async banUser(user) {
      try {
        let token = this.$auth.strategy.token.get().split(" ")[1]
        
        await this.$axios.$post("/api/auth/banUser", user, {
          "authorization": `Basic ${token}`
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
      const reviewCTX = document.getElementById("reviewChart").getContext("2d");
      const postsCTX = document.getElementById("postsChart").getContext("2d");

      const reviews = [];
      this.reviews.forEach(async (review) => {
        reviews.push(review.rating)
      })
      const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
      const dataReview = {
        labels: ["1⭐", "2⭐", "3⭐", "4⭐", "5⭐"],
        datasets: [
          {
            label: 'Dataset 1',
            data: [countOccurrences(reviews, 1), countOccurrences(reviews, 2), countOccurrences(reviews, 3), countOccurrences(reviews, 4), countOccurrences(reviews, 5)],
            backgroundColor: ["red", "green", "blue", "red", "gold"],
          }
        ]
      };
      let grad = rolesCTX.createLinearGradient(0, 0, 0, 400);
      grad.addColorStop(0.24, "rgba(207, 193, 159, 1)");
      grad.addColorStop(0.26, "rgba(82, 79, 44, 1)");
      grad.addColorStop(0.28, "rgba(207, 193, 159, 1)");
      grad.addColorStop(0.29, "rgba(207, 193, 159, 1)");
      grad.addColorStop(0.45, "rgba(255, 236, 180, 1)");
      grad.addColorStop(0.65, "rgba(58, 44, 31, 1)");
      let postdays = [];
      let lastdays = this.lastDays(5).reverse()
      this.$store.state.newspost.news.forEach(post => {
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
      
      this.users.forEach(user => userroles.push(user.role.name));
      // console.log(this.users)
      

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
      const footer = () => {
        return "test"
      }
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
        plugins: {
          tooltip: {
            callbacks: {
              footer: footer
            }
          }
        }
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
      const optionsReview = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Doughnut Chart'
          }
        }
      };
      const rolesChart = new Chart(rolesCTX, { type: "bar", data: dataRoles, options: optionsRoles });
      const postsChart = new Chart(postsCTX, { type: "line", data: dataPosts, options: optionsPosts });
      const reviewChart = new Chart(reviewCTX, { type: "doughnut", data: dataReview, options: optionsReview });
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
  async mounted() {
    
    this.posts = this.$store.state.newspost.news
    this.roles = this.$store.state.roles.roles;

    this.reviews = this.$store.state.ratings.ratings;
    this.users = await this.$store.state.users.users;
    console.log(this.users)
    if (document.getElementById("rolesChart")) {
      this.chart();
    }
  },
  computed: {
    filteredList() {
      if (!this.$store.state.users.users) {
        return
      } else {
        return this.$store.state.users.users.filter(async (user) => {
          return user.name.toLowerCase().includes(this.filter.toLowerCase()) ||
          user.email.toLowerCase().includes(this.filter.toLowerCase()) ||
          user.role.name.toLowerCase().includes(this.filter.toLowerCase());
        });
      }
    }
  },
};

</script>
<style lang="scss">
html, body {
  height: 100%;
}
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
    &.topnavbar {
      margin-bottom: 0;
      .nav-item {
        margin: 0rem 0;
        padding: 0;
        .nav-link {
          padding: 1rem 0;
          color: colorscheme('white');
          //border-top: 2px solid transparent;
          border-radius: none;
          &.active, &.show {
            background: none;
            border: none;
            color: colorscheme('lime');
            border-top: 2px solid colorscheme('lime');
            border-left: 2px solid colorscheme('lime');
            border-right: 2px solid colorscheme('lime');
          }
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
      background: colorscheme('blue');
      color: #fff;
      //padding: 0.3rem;
      .dropdown-item {
        transition: all 0.1s ease; 
        padding-left: 0.8rem;
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
        //border-radius: 20%;
        color: colorscheme('white');
        border-bottom: 1px solid colorscheme('white');
        //background: colorscheme('cyan');
        &:hover {
          background: none;
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
