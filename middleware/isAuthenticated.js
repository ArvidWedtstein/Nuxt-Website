// export default function({ store, redirect }) {
//   if (!store.state.auth.loggedIn) {
//     return redirect("/auth/login");
//   }
// }

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useState('auth')
  if (!auth.value.authenticated) {
    return navigateTo('/login')
  }
  // if (!store.state.auth.loggedIn) {
  //   return redirect("/auth/login");
  // }
})