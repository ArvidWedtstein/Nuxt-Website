import Vue from "vue";

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },
  getUserInfo(state) {
    return state.auth.user;
  }
};

