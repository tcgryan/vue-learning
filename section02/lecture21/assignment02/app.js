const app = Vue.createApp({
  data() {
    return {
      paragraphText: '',
      enteredText: '',
    }
  },
  methods: {
    showAlert() {
      alert('henlo')
    },
    setText(event) {
      this.paragraphText = event.target.value
    },
    completedText(event) {
      this.enteredText = event.target.value
    },
  },
})

app.mount('#assignment')
