import axios from 'axios';
import Vue from "vue";

export const state = () => ({
  users: []
})
  
export const mutations = {
  async init(state, data) {
    state.news = data
  },
  async add(state, data) {
    state.news.push(data)
  },
  async delete(state, data) {
    let delpost = state.news.find(p => p.id === data);
    state.news.splice(state.news.indexOf(delpost), 1);
  }
}