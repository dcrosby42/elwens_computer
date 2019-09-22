
export default {
  props: ['nav','activePage'],
  computed: {
    activeColor: function() {
      console.log("activeColor",this.activePage,this.nav.page)
      if (this.activePage === this.nav.page) {
        // console.log("activeColor",this.activePage,this.nav.page)
        return "lcars-husk-bg"
      }
      return ""
    },
  },
  // template: '<div class="lcars-element button lcars-golden-tanoi-bg">{{ nav.text }}</div>',
  template: `<div :class="['lcars-element right-rounded button', activeColor]" v-on:click="$emit('click',nav)">{{ nav.text }}</div>`,
}
