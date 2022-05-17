<template>
  <div>
    <div class="left">
      <ul class="people">
        <User 
          v-for="user in users"
          :key="user._id"
          :user="user"
          :selected="selectedUser === user"
          @select="onSelectUser(user)"
        />
        <!-- <User 
          v-for="user in users2"
          :key="user.userID"
          :user="user"
          :selected="selectedUser === user"
          @select="onSelectUser(user)"
        /> -->
      </ul>
    </div>
    <MessagePanel
      v-if="selectedUser"
      :user="selectedUser"
      @input="onMessage"
      class="right"
    />
  </div>
</template>

<script>
import socket from "~/assets/js/socket";
import User from "~/components/chat/User";
import MessagePanel from "~/components/chat/MessagePanel";

export default {
  name: "chat",
  components: { User, MessagePanel },
  data() {
    return {
      selectedUser: null,
      users: [],
      usernameAlreadySelected: false,
    };
  },
  methods: {
    onMessage(content) {
      if (this.selectedUser) {
        socket.emit("private message", {
          content,
          to: this.selectedUser.userID,
        });
        this.selectedUser.messages.push({
          content,
          fromSelf: true,
        });
      }
    },
    onSelectUser(user) {
      this.selectedUser = user;
      user.hasNewMessages = false;
    },
  },
  mounted() {
    if (this.$store.getters.isAuthenticated && !this.usernameAlreadySelected) {
      this.usernameAlreadySelected = true;
      socket.auth = { username: this.$store.getters.getUserInfo.name, id: this.$store.getters.getUserInfo.id };
      socket.connect();
    }
  },
  destroyed() {
    console.log(socket)
    socket.off("connect_error");
  },
  created() {
    const sessionID = localStorage.getItem("sessionID");

    if (sessionID) {
      this.usernameAlreadySelected = true;
      socket.auth = { sessionID };
      socket.connect();
    }

    socket.on("session", ({ sessionID, userID }) => {
      // attach the session ID to the next reconnection attempts
      socket.auth = { sessionID };
      // store it in the localStorage
      localStorage.setItem("sessionID", sessionID);
      // save the ID of the user
      socket.userID = userID;
    });

    socket.on("connect_error", (err) => {
      if (err.message === "invalid username") {
        this.usernameAlreadySelected = false;
      }
    });

    socket.on("connect", () => {
      this.users.forEach((user) => {
        if (user.self) {
          user.connected = true;
        }
      });
    });

    socket.on("disconnect", () => {
      this.users.forEach((user) => {
        if (user.self) {
          user.connected = false;
        }
      });
    });

    const initReactiveProperties = (user) => {
      user.messages = [];
      user.hasNewMessages = false;
    };

    socket.on("users", (users) => {
      users.forEach((user) => {
        for (let i = 0; i < this.users.length; i++) {
          const existingUser = this.users[i];
          if (existingUser.userID === user.userID) {
            existingUser.connected = user.connected;
            existingUser.messages = user.messages;
            return;
          }
        }
        user.self = user.userID === socket.userID;
        initReactiveProperties(user);
        this.users.push(user);
      });
      // put the current user first, and sort by username
      this.users.sort((a, b) => {
        if (a.self) return -1;
        if (b.self) return 1;
        if (a.username < b.username) return -1;
        return a.username > b.username ? 1 : 0;
      });
    });

    socket.on("user connected", (user) => {
      for (let i = 0; i < this.users.length; i++) {
        const existingUser = this.users[i];
        if (existingUser.userID === user.userID) {
          existingUser.connected = true;
          return;
        }
      }
      initReactiveProperties(user);
      this.users.push(user);
    });

    socket.on("user disconnected", (id) => {
      for (let i = 0; i < this.users.length; i++) {
        const user = this.users[i];
        if (user.userID === id) {
          user.connected = false;
          break;
        }
      }
    });

    socket.on("private message", ({ content, from, to }) => {
      for (let i = 0; i < this.users.length; i++) {
        const user = this.users[i];
        const fromSelf = socket.userID === from;
        if (user.userID === (fromSelf ? to : from)) {
          user.messages.push({
            content,
            fromSelf,
          });
          if (user !== this.selectedUser) {
            user.hasNewMessages = true;
          }
          break;
        }
      }
    });
  },
  destroyed() {
    socket.off("connect");
    socket.off("disconnect");
    socket.off("users");
    socket.off("user connected");
    socket.off("user disconnected");
    socket.off("private message");
  },
}; 
</script>

<style scoped lang="scss">

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


.left {
  float: left;
  width: 20%;
  height: 100%;
  border: 1px solid colorscheme('lightblue');
  background-color: colorscheme('lightblue');
}
.right {
  position: relative;
  float: left;
  width: 80%;
  height: 100%;
}

</style>
