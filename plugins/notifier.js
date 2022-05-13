// export default ({ app, store }, inject) => {
//   inject('notifier', {
//     showMessage ({ content = '', color = '' }) {
//       store.commit('snackbar/showMessage', { content, color })
//     }
//   })
// }

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('notifier', {
    showMessage ({ content = '', color = '' }) {
      store.commit('snackbar/showMessage', { content, color })
    }
  })
})