const app = Vue.createApp({
  data() {
    return {
      name: "Ryan",
      age: 27,
      imgLink: "https://s.abcnews.com/images/Technology/HT_google1_ml_150903_12x5_992.jpg"
    };
  },
  methods: {
    agePlusFive() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random();
    }
  }
});

app.mount("#assignment");