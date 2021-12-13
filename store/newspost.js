import axios from 'axios';
export const state = () => ({
  news: []
})
  
export const mutations = {
  async init() {
    const articles = await axios.get("api/news/getnewsposts");
    state.news = articles.posts
  },
  async add(state, data) {
    //state.news.push(post);
    const post = await axios.post("api/news/newspost", data).then((res) => {
      console.log(res.message)
    })
    await state.news.push(post)
  },
  remove(state, { todo }) {
    
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}