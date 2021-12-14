const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: 'Hickey',
      fullname: ''
    }
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value
    },
    add(num) {
      this.counter = this.counter + num
    },
    reduce(num) {
      this.counter = this.counter - num
      // this.counter--;
    },
    resetInput() {
      this.name = ''
    },
  },
  computed: {
    // fullname() {
    //   if (this.name === '') {
    //     return ''
    //   }

    //   return `${this.name} ${this.lastName}`
    // },
  },
  watch: {
    name(value) {
      this.fullname = `${value} ${this.lastName}`
    }
  }
})

app.mount('#events')
