
<template>
  <div id="project">
    <div class="container-fluid">  
      <button v-if="userPerm('CREATE_PROJECT')" class="btn btn-main" data-bs-toggle="modal" data-bs-target="#modal">New Project</button>
      <Modal>
        <div slot="header">
          <h5 class="modal-title" id="modalLabel">New Post</h5>
        </div>
        <div slot="body">
          <div class="form-floating custom">
            <input type="text" class="form-control shadow-none" id="projectname" v-model="project.name">
            <label for="projectname">Project Name</label>
          </div>
          <div class="form-floating custom">
            <input type="text" class="form-control shadow-none" id="projectdescription" v-model="project.description">
            <label for="projectdescription">Project Description</label>
          </div>
          <div class="form-floating custom">
            <input type="text" class="form-control shadow-none" id="projectgitrepo" v-model="project.gitrepo">
            <label for="projectgitrepo">Git Repository Link (Optional)</label>
          </div>
          <div class="form-floating custom">
            <input type="text" class="form-control shadow-none" id="projectlink" v-model="project.projectlink">
            <label for="projectlink">Project Link</label>
          </div>
          <div class="form-floating custom">
            <input type="range" class="form-range" min="0" max="100" step="1" id="pain" v-model="project.pain">
            <label for="pain" class="form-label">Pain {{ project.pain }}</label>
          </div>
          <div class='inputBox'>
            <label class="custom" for="thumbnail">
            <i class="fa fa-cloud-upload"/> Upload Thumbnail
            </label>
            <input id="thumbnail" type='file' @change="saveImage($event)" accept="image/*" name='thumbnail'/>
          </div>
          <ul class="badgeshow">
            <li :class="'badge badge-' + tag.name " v-for="(tag, x) in project.tags" :key="x"><i :class="tag.icon"/></li>
          </ul>
          <ul class="badgeselect">
            <li :class="'badge badge-' + tag.name " v-for="(tag, x) in tags" :key="x"><i v-on:click="tagSelect(tag)" :class="tag.icon"/></li>
          </ul>
        </div>
        <div slot="footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" v-on:click="createproject" class="btn btn-main" data-bs-dismiss="modal">Create Project</button>
        </div>
      </Modal>
      <!-- <div style="background: url('/images/rdo.jpg'); background-size: cover; background-repeat: no-repeat;"> -->
      <div v-cloak v-if="projects" class="row p-3" data-masonry='{"percentPosition": true }'><!-- style="margin: 0rem 6rem !important; background: rgb(46, 46, 46);"-->
        <div v-for="(project, x) in filterHiddenProjects" :key="x" class="col-md-6 flex-row">
          <ProjectsProjectcard :project="project"></ProjectsProjectcard>
        </div>
      </div>
      <!-- </div> -->
      <div v-if="timeline.length > 0" class="jumbotron projtimeline">
        <h1 class="display-4">Project timeline</h1>
        <hr class="my-4">
        <Timeline :timeline="timeline"/>
      </div> 
    </div>
  </div>
</template>


<script lang="text/javascript">
import Timeline from '../../components/timeline.vue';
import PainOMeter from '../../components/pain-o-meter.vue';
import ProjectsProjectcard from '../../components/projects/projectcard.vue';
import Modal from '../../components/Modal.vue';
const moment = require('moment');
const axios = require('axios');
export default {
  name: "Project",
  transition: "slide-bottom",
  head() {
    return {
      title: "Projects",
      meta: [
        {
          hid: "description",
          name: "project page",
          content: "Arvid's projects"
        }
      ]
    };
  },
  async asyncData({ $config, $store }) {
    let baseURL = $config.baseURL;
    return {
      baseURL
    }
  },
  data() {
    return {
      //projects: null,
      categoryicons: null,
      projects: [],
      timeline: [],
      project: {
        name: "",
        description: "",
        thumbnail: "",
        gitrepo: "",
        projectlink: "",
        tags: [],
        pain: 0
      },
      tags: [
        {"name": "Pain","icon": "fas fa-tired"},
        {"name": "Programming","icon": "fas fa-code"},
        {"name": "Media","icon": "fas fa-photo-video"},
        {"name": "3D Print","icon": "fas fa-cubes"},
        {"name": "AD","icon": "fas fa-ad"},
        {"name": "Beer","icon": "fas fa-beer"}
      ]
    };
  },
  methods: {
    async getProjects() {
      let timeline = [];
      let projects = await this.$store.state.projects.projects;
      if (!projects) {
        const projects = await this.$axios.$get("/api/project/getProjects");
        this.$store.commit('projects/init', projects.projects);
      }
      const unsortedTimeline = []
      projects.forEach(async (project) => {
        moment.locale("en");
        if (project.github) {
          unsortedTimeline.push({
            name: project.name,
            description: project.description,
            startdate: project.github.created_at
          })
        }
      })
      const sortedTimeline = unsortedTimeline.sort((a,b) => new moment(b.startdate) - new moment(a.startdate))
      this.timeline = timeline.concat(sortedTimeline);
      this.projects = projects;
    },
    async replace(string) {
      return string.toLowerCase().replaceAll("#", "sharp").replaceAll("+", "plus").replaceAll(".", "dot");
    },
    async createproject() {
      let json = {
        name: this.project.name,
        description: this.project.description,
        projectLink: this.project.projectlink,
        tags: this.project.tags,
        pain: this.project.pain
      }
      if (this.project.gitrepo != '' || this.project.gitrepo) {
        Object.assign(json, {gitrepo: this.project.gitrepo})
      }
      const data = new FormData();
      //data.append("thumbnail", document.getElementById('thumbnail').files[0])
      //data.append('json', JSON.stringify(json));
            
      const project = await this.$axios.$post("api/project/newProject", json).then((res) => {
        this.showSnackbar(res.message, 'success')
      })
      this.$nuxt.refresh()
      this.project.name = ''
      this.project.description = ''
      this.project.thumbnail = ''
      this.project.projectlink = ''
      this.project.gitrepo = ''
      this.project.tags = []
    },
    showSnackbar(message, type) {
      this.$notifier.showMessage({ content: message, color: type })
    },
    formatDate(date) {
      return moment(date).format('DD/MM/YY')
    },
    async saveImage(event) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
            
      reader.onload = e =>{
        this.project.thumbnail = e.target.result;
      };
    },
    tagSelect(tag) {
      if (!this.project.tags.includes(tag)) {
        this.project.tags.push(tag);
      }
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
  async mounted() {
    this.getProjects();
    // console.log(this.$store.state.projects.projects)
    
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;  
    },
    filterHiddenProjects() { // Checks if user has permission to view the hidden projects
      if (this.isAuthenticated) {
        if (this.$store.getters.getUserInfo.role.permissions.includes('HIDE_PROJECT')) {
          return this.projects;
        }
      } else {
        return this.projects.filter(p => p.hidden === false);
      }
      
    },

  },
  components: { Timeline, PainOMeter, Modal, ProjectsProjectcard }
}


</script>

<style lang="scss">
$colorpalette: (
  "moonlit": linear-gradient(to right, #0f2027, #203a43, #2c5364),
  "argon": linear-gradient(to right, #0f0e0f, #7303c0, #ec38bc, #fdeff9),
  "velvet-sun": linear-gradient(to top, #e1eec3, #f05053),
  "bluegreen": linear-gradient(45, #402565, #30BE96),
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
$border-radius: 0.25rem;
$titlefont: "Montserrat";
$textfont: "Quicksand";
$box-shadow: 0 12px 38px rgba(black, 0.4);
[v-cloak] {
  display: none;
}
@media screen and (max-width: 660px) {
  .projtimeline {
    display: none;
  }
}
#project {
  transition: box-shadow 0.3s linear 0.5s;
  background: none;
	margin: 0.5rem 0rem;
  border: none;
	.newProject {
		background: gradientscheme('bluegreen') !important;
	}
	// Old Project card
  .card {	
		&.custom {
			font-family: $titlefont;
			width: 100%;
			min-height: 1px;
			margin: 1rem 0;
			border-radius: $border-radius;
			border: 1px solid #000000;
			transition: all 0.3s ease !important;
			background-color: colorscheme('blue') !important;
			&::before {
				content: '';
				background: rgba(0,0,0,0.2);
			}
			&:hover {
				transition: all 0.2s ease !important;
				filter: drop-shadow(4px 4px 10px black);
				.card-img-top {
					filter: grayscale(0);
				}
			}
			.background {
				flex: 0 0 100%;
				background: gradientscheme('bluegreen') !important;
				//background: url("/images/background.jpg");
				background-repeat: no-repeat;
				background-size: 100% 100%;
				border-radius: $border-radius;
				border: 1px solid #fff;
			}
			.card-body {
				text-align: center;
				transition: all 0.3s ease;
				.list-group {
					background: none;
					.list-group-item {
						font-size: 2ch;
						background: none;
					}
				}
    		}
			.card-footer {
				position: relative;
				.nav, .nav-pills, .card-header-pills {
					width: 100%;
					.nav-item {
						.nav-link {
							//box-shadow: 0 0 0 1px yellow, 0 0 0 2px red, 0 0 0 3px black;
							border-radius: 0.25rem;
							&.active, &.show {
								background: rgba(colorscheme('lime'),0.3);
								box-shadow: none;
							}
						}
					}
				}
				text-align: center;
				rect {
					fill: none !important;
				}
			}
			.card-img-top {
				mix-blend-mode: normal;
				object-fit: cover;
				filter: grayscale(100);
				border-radius: $border-radius;
				transition: all 0.1s ease !important;
				object-position: 0% 0%;
				&.clip-path {
					clip-path: polygon(0% 10%, 100% calc(20% - 1px), 100% 100%, 0% calc(90% - 1px));  
				}
				&.maskimage {
          border: none;
					-webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
					mask-image: linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0));
				}
			}
		}
  }
  .icons {
    display: inline-flex;
    position: relative;
    padding: 0.5rem;
    vertical-align: middle;
    & > * {
        padding: 0.2rem;
        margin: 0.1rem;
        margin-bottom: 0.5rem;
        border-radius: $border-radius;
        box-shadow: $box-shadow;
    }
  }
	$iconcolors: (
    "C":#3B5998,
    "twitter":#55ACEE,
    "twitch": rgba(145, 71, 255, 0.9),
    "discord": #8697F6,
    "github": #333333,
    "steam": #173e58,
    "linkedin":#007bb5,
    "cv": #009bb5,
    "js": #EFD81D,
    "html": #D84B24,
    "css": #3492CB,
    "sass": #C45F92,
    "vue": #49B180,
    "ubuntu": #D24413,
    "Python": #dddddd,
    "python": "#FF0000"
  );
  .langicons {
    opacity: 1;
    & > * {
      @each $color, $value in $iconcolors {
          &.#{$color}  {
              color: $value !important;
              border: 1mm outset $value;
          }
      }
      &:hover {
          opacity: 1;
      }
    }
  }
}

</style>