import { playSoundEvent } from "./sounds.js"

export default {
  props: ['nav','activePage'],
  computed: {
    activeColor: function() {
      if (this.activePage === this.nav.page) {
        return "lcars-husk-bg"
      }
      return ""
    },
  },
  methods: {
    clicked: function(e) {
      playSoundEvent("navPressed")
      this.$emit('click', this.nav)
    },
    mouseover: function(e) {
      playSoundEvent("navMouseOver")
    },
  },
  // template: '<div class="lcars-element button lcars-golden-tanoi-bg">{{ nav.text }}</div>',
  template: `<div :class="['lcars-element right-rounded button', activeColor]" @click="clicked" @mouseover="mouseover">{{ nav.text }}</div>`,

}
