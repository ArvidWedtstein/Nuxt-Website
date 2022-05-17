import axios from 'axios';
import Vue from "vue";

export const state = () => ({
  timeline: []
})
  
export const mutations = {
  async init(state, data) {
    if (!data) return
    this.timeline = data.timeline
  },
  async add(state, data) {
    state.timeline.push(data)
  },
  async delete(state, id) {
    let deltimelineevent = state.timeline.find(p => p.id === id);
    state.timeline.splice(state.roles.indexOf(deltimelineevent), 1);
  }
}