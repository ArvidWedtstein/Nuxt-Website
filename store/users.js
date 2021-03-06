import axios from 'axios';
import Vue from "vue";

export const state = () => ({
  users: []
})
  
export const mutations = {
  async init(state, data) {
    state.users = data
  },
  async add(state, data) {
    state.users.push(data)
  },
  async delete(state, data) {
    let deluser = state.users.find(p => p.id === data);
    state.users.splice(state.users.indexOf(deluser), 1);
  }
}