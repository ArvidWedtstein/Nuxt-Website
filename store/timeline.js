import axios from 'axios';
import Vue from "vue";

export const state = () => ({
  timeline: []
})
  
export const mutations = {
  async init(state) {
    const timeline = await axios.get("/api/project/getTimelineEvents");
    state.timeline = timeline.timeline
  },
  async add(state, data) {
    state.timeline.push(data)
  },
  async delete(state, id) {
    let deltimelineevent = state.timeline.find(p => p.id === id);
    state.timeline.splice(state.roles.indexOf(deltimelineevent), 1);
  }
}