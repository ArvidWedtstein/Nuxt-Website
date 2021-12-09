<template>
  <div id="profile" class="container-fluid">
      <div class="jumbotron">
        <div class="profileimage">
          <object class="profile img-fluid unselectable" data="/images/profilePicture.png"/>  
          
          <span class="edit">Change Picture<input @change="saveProfilePicture($event)" type="file"></span>
        </div>
        <h3 class="display-6">Well, hello there</h3>
        <h4 class="display-4 name unselectable">{{ getUserInfo.name }}</h4>
        <p class="lead">Your rank:</p>
        <h6 class="lead role">{{ getUserInfo.role.name }}</h6>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role <i class="fab fa-grunt"></i></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ getUserInfo.id }}</td>
              <td>{{ getUserInfo.name }}</td>
              <td>{{ getUserInfo.email }}</td>
              <td>{{ getUserInfo.role.name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script>
export default {
  name: "gameprofile",
  middleware: "isAuthenticated",
  data() {
    return {
      profilePicture: null
    }
  },
  computed: {
    getUserInfo() {
      return this.$store.getters.getUserInfo;
      //return this.$store.getters.getAllUserInfo;
    }
  },
  methods: {
    saveProfilepicture(event) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      
      reader.onload = e =>{
        this.profilePicture = e.target.result;
      };
    },
    editProfilepicture() {

    }
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
  background: url("/images/UI/profilebackground.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
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
.table {
  color: colorscheme('white');
  thead {
    th {
      border-block-color: #777 !important;
      color: #888;
    }
  }
  td, th {
    border-block-color: #444 !important;
  }

}
.jumbotron {
  .profileimage {
    position: relative;
    align-self: center;
    margin: auto;
    transition: 0.5s;
    padding: 1.5rem;
    background: url('/images/UI/PlayerAvatarUI.png');
    background-size: cover;
    background-position: center;
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
      
      filter: saturate(50%) sepia(100%);
      /*background: transparent;
      mask-image: -webkit-gradient(linear, top, bottom, 
      color-stop(0.00,  rgba(0,0,0,0.2)),
      color-stop(0.35,  rgba(0,0,0,1)),
      color-stop(0.50,  rgba(0,0,0,0.5)),
      color-stop(0.65,  rgba(0,0,0,0)),
      color-stop(1.00,  rgba(0,0,0,0.5)));*/
      object-fit: contain;
    }
  }
  .name {
    background: url('/images/UI/Name.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    padding: 1rem;
    text-shadow: #Fff 01px 0 50px
  }
  .role {
    position: relative;
    background: url('/images/UI/Slot.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    padding: 1rem;
    font-family: 'MedievalSharp';
    color: colorscheme('white');
    font-size: 3ch;
  }
}
.gold-text {
    background: linear-gradient(to bottom, #cfc19f 24%, #524f2c 26%, #cfc19f 28%, #cfc19f 29%, #ffecb4 45%, #3a2c1f 65%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

</style>
