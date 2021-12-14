const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      num: 10,
      confirmedName: ''
    }
  },
  methods: {
    increment(num) {
      this.counter = this.counter + num
    },
    decrement(num) {
      this.counter = this.counter - num
    },
    setName(event, lastName) {
      this.name = `${event.target.value} ${lastName}`;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {

    }
  },
})

app.mount('#events');
