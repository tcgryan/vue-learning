const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num
    },
  },
  computed: {
    result() {
      // return this.counter >= 37 ? this.counter : 'Not there yet'
      if (this.counter < 37) {
        return 'Not there yet'
      } else if (this.counter > 37) {
        return 'Too much!'
      } else {
        return this.counter
      }
    },
  },
  watch: {
    result(val, oldVal) {
      if (val !== oldVal) {
        const that = this
        setTimeout(function () {
          that.counter = 0
          console.log('sup')
        }, 6000)
      }
    },
  },
})

app.mount('#assignment')
