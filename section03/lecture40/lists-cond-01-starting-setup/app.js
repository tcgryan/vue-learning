const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoal: '',
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoal)
    },
    removeGoal(index) {
      this.goals.splice(index, 1)
    },
  },
  computed: {},
})

app.mount('#user-goals')
