
export default {
  props: ['nav'],
  // template: '<div class="lcars-element button lcars-golden-tanoi-bg">{{ nav.text }}</div>',
  template: `<div class="lcars-element right-rounded button" v-on:click="$emit('click',nav)">{{ nav.text }}</div>`,
}
