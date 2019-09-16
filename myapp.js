export function onload() {
  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>',
  })

  const app = new Vue({
    el: '#myapp',
    data: {
      message: 'Hello Vue!',
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' },
      ],
    },
    methods: {
      reverseMessage: function() {
        this.message = this.message.split('').reverse().join('')
      },
    },
  })
  window.app = app
}
