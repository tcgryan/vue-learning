const app = Vue.createApp({
  data() {
    return {
      tasks: ['hi'],
      enteredTask: '',
      listVisible: true
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask)
    },
    removeTask(index) {
      this.tasks.splice(index, 1)
    },
    toggleList() {
      this.listVisible = !this.listVisible
    },
  },
  computed: {
    isListVisible() {
      return this.listVisible ? "Hide List" : "Show List"
    }
  }
})

app.mount('#assignment')
