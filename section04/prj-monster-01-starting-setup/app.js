function calculateDamage(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 1,
      winner: null,
    }
  },
  methods: {
    attackMonster() {
      this.currentRound++
      const playerAttackValue = calculateDamage(5, 12)

      this.monsterHealth -= playerAttackValue

      this.attackPlayer()

      console.log(
        `Regular attack! player: ${this.playerHealth}, monster: ${this.monsterHealth}`,
      )
    },
    attackPlayer() {
      const monsterAttackValue = calculateDamage(8, 12)

      this.playerHealth -= monsterAttackValue
    },
    specialAttack() {
      this.currentRound++
      const playerAttackValue = calculateDamage(5, 12) * 2

      this.monsterHealth -= playerAttackValue

      this.attackPlayer()

      console.log(
        `Special attack! player: ${this.playerHealth}, monster: ${this.monsterHealth}`,
      )
    },
    healPlayer() {
      this.currentRound++
      const playerHealValue = calculateDamage(8, 20)

      if (this.playerHealth + playerHealValue > 100) {
        this.playerHealth = 100
      } else {
        this.playerHealth += playerHealValue
      }

      this.attackPlayer()

      console.log(
        `Heal! player: ${this.playerHealth}, monster: ${this.monsterHealth}`,
      )
    },
    startNewGame() {
      this.playerHealth = 100
      this.monsterHealth = 100
      this.currentRound = 1
      this.winner = null
    },
    surrender() {
      this.winner = 'monster'
    },
  },
  computed: {
    currentPlayerHealth() {
      if (this.playerHealth < 0) {
        return { width: `0%` }
      }
      return { width: `${this.playerHealth}%` }
    },
    currentMonsterHealth() {
      if (this.monsterHealth < 0) {
        return { width: `0%` }
      }
      return { width: `${this.monsterHealth}%` }
    },
    specialAttackCooldown() {
      return this.currentRound % 3 !== 0
    },
    healCooldown() {
      return this.currentRound % 4 !== 0
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw'
      } else if (value <= 0) {
        this.winner = 'monster'
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = 'draw'
      } else if (value <= 0) {
        this.winner = 'player'
      }
    },
  },
})

app.mount('#game')
