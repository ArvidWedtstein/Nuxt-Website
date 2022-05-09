import Vue from 'vue'

Vue.directive('can', {
    bind: function (el, binding, vnode) {
      if (true) {
        let perms = ['insert', 'delete']
        if (perms.includes(binding.expression.replace(/'/g, "").replace(/"/g, ""))) {
          return 
        } else {
          return vnode.elm.style.display = "none";
        }
      }
    }
  })