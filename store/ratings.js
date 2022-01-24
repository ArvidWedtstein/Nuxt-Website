import axios from 'axios';
import Vue from "vue";

export const state = () => ({
  ratings: []
})
  
export const mutations = {
  async init(state, data) {
    state.ratings = data
  },
  async add(state, data) {
    state.ratings.push(data)
  },
  async delete(state, data) {
    let delrating = state.ratings.find(p => p.id === data);
    state.ratings.splice(state.ratings.indexOf(delrating), 1);
  }
}