<template>
  <div class="container">
    <button class="btn btn-main" @click="createrolescreen=true" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCreaterole" aria-expanded="false" aria-controls="collapseCreaterole">Create New Role</button>
    <form id="collapseCreaterole" class="collapse" v-if="createrolescreen" @submit.prevent="newRole($event)">
      <div class="form-floating custom">
        <input type="text" class="form-control shadow-none" id="floatingNewRolename" placeholder="Name" v-model="newroledata.name">
        <label for="floatingNewRolename">Role Name</label>
      </div>
      <div class="form-floating custom">
        <input type="text" class="form-control shadow-none" id="floatingNewRoleicon" placeholder="Icon" v-model="newroledata.icon">
        <label for="floatingNewRoleicon">Role Icon (font-awesome class)</label>
      </div>
      <div class="form-floating custom">
        <input type="color" class="form-control shadow-none" id="floatingNewRolecolor" placeholder="Color" v-model="newroledata.color">
        <label for="floatingNewRolecolor">Role Color</label>
      </div>
      <div class="form-floating custom dropdown">
        <button class="btn btn-🤯 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Permissions</button>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" data-bs-auto-close="outside">
          <div v-for="(perm, l) in permissions" :key="l" class="dropdown-item form-check form-switch">
            <input class="form-check-input" :id="perm" type="checkbox">
            <label class="form-check-label" :for="perm">{{ perm }}</label>
          </div>
        </div>
      </div>
      <button class="btn btn-success" type="submit">Create</button>
      <button type="checkbox" class="btn btn-red" @click="createrolescreen=false">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Createrolefield",
  data() {
    return {
      newroledata: {
        name: "",
        icon: "",
        color: "",
        permissions: []
      },
      permissions: [
        "KICK_USER",
        "CAN_CONTACT",
        "HIDE_PROJECT",
        "CREATE_PROJECT",
        "VIEW_PROJECTS",
        "VIEW_POST",
        "MODIFY_USERS",
        "MODIFY_POST",
        "DELETE_POST",
        "CREATE_POST",
      ],
      createrolescreen: false
    };
  },
  methods: {
    async newRole(e) {
      for (let i = 0; i < e.target.length; i++) {
        if (e.target[i].checked) {
          this.newroledata.permissions.push(e.target[i].id)
        }
      }
      await console.log(this.newroledata)
      
      try {
        let token = this.$auth.strategy.token.get().split(" ")[1];
        await this.$axios.$post("/api/auth/newRole", this.newroledata, {
          headers: {
            "authorization": `Basic ${token}`
          }
        });
      } catch (err) {
        console.log(err)
      }
      this.createrolescreen = false;
      this.newroledata.name = "";
      this.newroledata.icon = "";
      this.newroledata.color = "";
      this.newroledata.permissions = [];
    },
  }
}
</script>