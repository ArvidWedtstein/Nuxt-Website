<template>
  <div>
    <div class="top"><span>To: <span class="name">{{ user.username }}</span></span></div>
    <div class="chat">
        <div class="conversation-start">
            <span>Today, 6:48 AM</span>
        </div>
        <div
          v-for="(message, index) in user.messages"
          :key="index"
          class="bubble"
          :class="{ me: message.fromSelf, you: !message.fromSelf }"
        >
          <div v-if="displaySender(message, index)" class="sender">
            {{ message.fromSelf ? "(yourself)" : user.username }}
          </div>
          {{ message.content }}
        </div>
    </div>
    <form @submit.prevent="onSubmit" class="write">
      <a href="javascript:;" class="write-link attach"></a>
      <input placeholder="Your message" type="text" v-model="input" class="send-input"/>
      <a href="javascript:;" class="write-link smiley"></a>
      <button :disabled="!isValid" class="write-link send" type="submit"></button>
    </form>
  </div>
</template>

<script>
import StatusIcon from "./StatusIcon";

export default {
  name: "MessagePanel",
  components: {
    StatusIcon,
  },
  props: {
    user: Object,
  },
  data() {
    return {
      input: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("input", this.input);
      this.input = "";
    },
    displaySender(message, index) {
      return (
        index === 0 ||
        this.user.messages[index - 1].fromSelf !==
          this.user.messages[index].fromSelf
      );
    },
  },
  computed: {
    isValid() {
      return this.input.length > 0;
    },
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
.top {
  width: 100%;
  height: 47px;
  padding: 15px 29px;
  background-color: #eceff1;
  span {
    font-size: 15px;
    color: colorscheme('grey');
    .name {
      color: colorscheme('darkblue');
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: 600;
    }
  }
}
.chat {
  position: relative;
  overflow: hidden;
  padding: 0 35px 92px;
  border-width: 1px 1px 1px 0;
  border-style: solid;
  border-color: colorscheme('lightblue');
  height: calc(100% - 48px);
  justify-content: flex-end;
  flex-direction: column;
  &.active-chat {
    display: block;
    display: flex;
    .bubble {
      transition-timing-function: cubic-bezier(.4,-.04, 1, 1);
      @for $i from 1 through 10 {
        &:nth-of-type(#{$i}) {
          animation-duration: .15s * $i;
        }
      }
    }
  }
}
.write {
  position: absolute;
  bottom: 29px;
  left: 30px;
  height: 42px;
  padding-left: 8px;
  border: 1px solid colorscheme('white');
  background-color: #eceff1;
  width: calc(100% - 58px);
  border-radius: 5px;
  input {
    font-size: 16px;
    float: left;
    width: 347px;
    height: 40px;
    padding: 0 10px;
    color: colorscheme('darkblue');
    border: 0;
    outline: none;
    background-color: #eceff1;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
  }
  .write-link {
    &.attach {
      &:before {
        display: inline-block;
        width: 20px;
        height: 42px;
        content: '';
        background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/attachment.png');
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    &.smiley {
      &:before {
        display: inline-block;
        width: 20px;
        height: 42px;
        content: '';
        background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/smiley.png');
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    &.send {
      border: none;
      background: none;
      &:before {
        display: inline-block;
        width: 20px;
        height: 42px;
        margin-left: 11px;
        content: '';
        background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/send.png');
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
}
.bubble {
  font-size: 16px;
  position: relative;
  display: inline-block;
  clear: both;
  margin-bottom: 8px;
  padding: 13px 14px;
  vertical-align: top;
  border-radius: 5px;
  &:before {
    position: absolute;
    top: 19px;
    display: block;
    width: 8px;
    height: 6px;
    content: '\00a0';
    transform: rotate(29deg) skew(-35deg);
  }
  &.you {
    float: left;
    color: colorscheme('white');
    background-color: colorscheme('blue');
    align-self: flex-start;
    animation-name: slideFromLeft;
    &:before {
      left: -3px;
      background-color: colorscheme('blue');
    }
  }
  &.me {
    float: right;
    color: colorscheme('darkblue');
    background-color: #eceff1;
    align-self: flex-end;
    animation-name: slideFromRight;
    &:before {
      right: -3px;
      background-color: #eceff1;
    }
  }
}
.conversation-start {
  position: relative;
  width: 100%;
  margin-bottom: 27px;
  text-align: center;
  span {
    font-size: 14px;
    display: inline-block;
    color: colorscheme('grey');
    &:before,&:after {
      position: absolute;
      top: 10px;
      display: inline-block;
      width: 30%;
      height: 1px;
      content: '';
      background-color: var(--light);
    }
    &:before {
      left: 0;
    }
    &:after {
      right: 0;
    }
  }
}

// .chat {
//   position: relative;
//   display: none;
//   overflow: hidden;
//   padding: 0 35px 92px;
//   border-width: 1px 1px 1px 0;
//   border-style: solid;
//   border-color: var(--light);
//   height: calc(100% - 48px);
//   justify-content: flex-end;
//   flex-direction: column;
//   &.active-chat {
//     display: block;
//     display: flex;
//     .bubble {
//       transition-timing-function: cubic-bezier(.4,-.04, 1, 1);
//       @for $i from 1 through 10 {
//         &:nth-of-type(#{$i}) {
//           animation-duration: .15s * $i;
//         }
//       }
//     }
//   }
// }
// .write {
//   color: #000;
//   position: absolute;
//   bottom: 29px;
//   left: 30px;
//   height: 42px;
//   padding-left: 8px;
//   border: 1px solid var(--light);
//   background-color: #eceff1;
//   width: calc(100% - 58px);
//   border-radius: 5px;
//   input {
//     font-size: 16px;
//     float: left;
//     width: 347px;
//     height: 40px;
//     padding: 0 10px;
//     color: var(--dark);
//     border: 0;
//     outline: none;
//     background-color: #eceff1;
//     font-family: 'Source Sans Pro', sans-serif;
//     font-weight: 400;
//   }
//   .write-link {
//     &.attach {
//       &:before {
//         display: inline-block;
//         width: 20px;
//         height: 42px;
//         content: '';
//         background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/attachment.png');
//         background-repeat: no-repeat;
//         background-position: center;
//       }
//     }
//     &.smiley {
//       &:before {
//         display: inline-block;
//         width: 20px;
//         height: 42px;
//         content: '';
//         background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/smiley.png');
//         background-repeat: no-repeat;
//         background-position: center;
//       }
//     }
//     &.send {
//       border: none;
//       background: none;
//       outline: none;
//       &::before {
//         display: inline-block;
//         width: 20px;
//         height: 42px;
//         margin-left: 11px;
//         content: '';
//         background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/send.png');
//         background-repeat: no-repeat;
//         background-position: center;
//       }
//     }
//   }
// }
// .bubble {
//   font-size: 16px;
//   position: relative;
//   display: inline-block;
//   clear: both;
//   margin-bottom: 8px;
//   padding: 13px 14px;
//   vertical-align: top;
//   margin: 3px 10px;
//   border-radius: 5px;
//   &::before {
//     position: absolute;
//     top: 19px;
//     display: block;
//     width: 8px;
//     height: 6px;
//     content: '\00a0';
//     transform: rotate(29deg) skew(-35deg);
//   }
//   &.you {
//     float: left;
//     color: #ffffff;
//     background-color: colorscheme('cyan');
//     align-self: flex-start;
//     animation-name: slideFromLeft;
//     &::before {
//       left: -3px;
//       background-color: colorscheme('cyan');
//     }
//   }
//   &.me {
//     float: right;
//     color: #000;
//     background-color: #eceff1;
//     align-self: flex-end;
//     animation-name: slideFromRight;
//     &:before {
//       right: -3px;
//       background-color: #eceff1;
//     }
//   }
// }
// .conversation-start {
//   position: relative;
//   width: 100%;
//   margin-bottom: 27px;
//   text-align: center;
//   span {
//     font-size: 14px;
//     display: inline-block;
//     color: colorscheme('lime');;
//     &:before,&:after {
//       position: absolute;
//       top: 10px;
//       display: inline-block;
//       width: 30%;
//       height: 1px;
//       content: '';
//       background-color: var(--light);
//     }
//     &:before {
//       left: 0;
//     }
//     &:after {
//       right: 0;
//     }
//   }
// }
</style>
