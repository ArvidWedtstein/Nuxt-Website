import axios from 'axios';
import Vue from "vue";

export const state = () => ({
  projects: []
})
  
export const mutations = {
  async init(state, data) {
    state.projects = data
  },
  async add(state, data) {
    state.projects.push(data)
  },
  async delete(state, data) {
    let delproject = state.projects.find(p => p.id === data);
    state.projects.splice(state.projects.indexOf(delproject), 1);
  }
}