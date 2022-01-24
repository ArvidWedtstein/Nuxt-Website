import axios from 'axios';
import Vue from "vue";

export const state = () => ({
  roles: []
})
  
export const mutations = {
  async init(state, data) {
    state.roles = data
  },
  async add(state, data) {
    state.roles.push(data)
  },
  async delete(state, data) {
    let delroles = state.roles.find(p => p.id === data);
    state.roles.splice(state.roles.indexOf(delroles), 1);
  }
}