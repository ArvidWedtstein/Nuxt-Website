<template>
  <li class="person" @click="onClick" :class="{ selected: selected }">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg" alt="profilepic" />
    <!-- <span class="name">{{ user.name }} {{ user.self ? " (yourself)" : "" }}</span> -->
    <span class="name">{{ user.username }} {{ user.self ? " (yourself)" : "" }}</span>
    <span class="time">2:09 PM</span>
    <div class="status">
      <StatusIcon :connected="user.connected" />{{ status }}
    </div>
    <span class="preview">I was wondering...</span>
    <span v-if="user.hasNewMessages" class="new-messages">!</span>
  </li>
</template>

<script>
import StatusIcon from "./StatusIcon";
export default {
  name: "User",
  components: { StatusIcon },
  props: {
    user: Object,
    selected: Boolean,
  },
  methods: {
    onClick() {
      this.$emit("select");
    },
  },
  computed: {
    status() {
      return this.user.connected ? "online" : "offline";
    },
  },
};
</script>

<style scoped lang="scss">
.selected {
  background-color: #1164a3;
}

.user {
  padding: 10px;
}

.description {
  display: inline-block;
}

.status {
  color: #92959e;
}

.new-messages {
  color: white;
  background-color: red;
  width: 20px;
  border-radius: 5px;
  text-align: center;
  float: right;
  margin-top: 10px;
}

.top {
  position: relative;
  width: 100%;
  height: 96px;
  padding: 29px;
  &:after {
    position: absolute;
    bottom: 0;
    left: 50%;
    display: block;
    width: 80%;
    height: 1px;
    content: '';
    background-color: colorscheme('lightblue');
    transform: translate(-50%, 0);
  }
}
.send-input {
  float: left;
  width: 188px;
  height: 42px;
  padding: 0 15px;
  border: 1px solid colorscheme('lightblue');
  background-color: #eceff1;
  border-radius: 21px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  &:focus {
    outline: none;
  }
}
a.search {
  display: block;
  float: left;
  width: 42px;
  height: 42px;
  margin-left: 10px;
  border: 1px solid colorscheme('lightblue');
  background-color: colorscheme('blue');
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/name-type.png');
  background-repeat: no-repeat;
  background-position: top 12px left 14px;
  border-radius: 50%;
}
.people {
  margin-left: -1px;
  border-right: 1px solid colorscheme('lightblue');
  border-left: 1px solid colorscheme('lightblue');
  width: calc(100% + 2px);
  .person {
    position: relative;
    width: 100%;
    padding: 12px 10% 16px;
    cursor: pointer;
    background-color: colorscheme('white');
    &:after {
      position: absolute;
      bottom: 0;
      left: 50%;
      display: block;
      width: 80%;
      height: 1px;
      content: '';
      background-color: colorscheme('lightblue');
      transform: translate(-50%, 0);
    }
    img {
      float: left;
      width: 40px;
      height: 40px;
      margin-right: 12px;
      border-radius: 50%;
      object-fit: cover;
    }
    .name {
      font-size: 14px;
      line-height: 22px;
      color: colorscheme('darkblue');
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: 600;
    }
    .time {
      font-size: 14px;
      position: absolute;
      top: 16px;
      right: 10%;
      padding: 0 0 5px 5px;
      color: colorscheme('grey');
      background-color: colorscheme('white');
    }
    .preview {
      font-size: 14px;
      display: inline-block;
      overflow: hidden !important;
      width: 70%;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: colorscheme('grey');
    }
    &.active,&:hover {
      margin-top: -1px;
      margin-left: -1px;
      padding-top: 13px;
      border: 0;
      background-color: colorscheme('blue');
      width: calc(100% + 2px);
      padding-left: calc(10% + 1px);
      span {
        color: colorscheme('white');
        background: transparent;
      }
      &:after {
        display: none;
      }
    }
  }
}
</style>
