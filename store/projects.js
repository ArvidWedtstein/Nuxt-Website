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
  async hide(state, data) {
    let hideproject = state.projects.find(p => p._id === data);
    hideproject.hidden = !hideproject.hidden;
    let index = state.projects.indexOf(hideproject);
    state.projects.splice(index, 1);
    state.projects.splice(index, 0, hideproject)
  },
  async delete(state, data) {
    let delproject = state.projects.find(p => p._id === data);
    state.projects.splice(state.projects.indexOf(delproject), 1);
  }
}