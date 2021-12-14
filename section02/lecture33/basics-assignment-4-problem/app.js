const app = Vue.createApp({
  data() {
    return {
      style: "",
      paragraphVisible: true,
      bgColor: ""
    };
  },
  methods: {
    isParagraphVisible() {
      this.paragraphVisible = !this.paragraphVisible
    }
  },
  computed: {
    paragraphClasses() {
      return {
        user1: this.style === "user1",
        user2: this.style === "user2",
        visible: this.paragraphVisible,
        hidden: !this.paragraphVisible
      }
    }
  },
});

app.mount("#assignment");
