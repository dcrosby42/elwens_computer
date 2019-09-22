import MainFrame from "./MainFrame.js"

export default function(selector) {
  return new Vue({
    el: selector,
    data: {
    },

    components: {
      "star-trek-interface": MainFrame,
    }
  })
}
