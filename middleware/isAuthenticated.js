// export default function({ store, redirect }) {
//   if (!store.state.auth.loggedIn) {
//     return redirect("/auth/login");
//   }
// }

export default defineNuxtRouteMiddleware((to, from) => {
  if (!store.state.auth.loggedIn) {
    return redirect("/auth/login");
  }
})