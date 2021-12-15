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
      logMessages: []
    }
  },
  methods: {
    attackMonster() {
      this.currentRound++
      const playerAttackValue = calculateDamage(5, 12)

      this.monsterHealth -= playerAttackValue

      this.addLogMessage('player', 'attack', playerAttackValue)
      this.attackPlayer()
    },
    attackPlayer() {
      const monsterAttackValue = calculateDamage(8, 12)

      this.playerHealth -= monsterAttackValue

      this.addLogMessage('monster', 'attack', monsterAttackValue)
    },
    specialAttack() {
      this.currentRound++
      const playerAttackValue = calculateDamage(5, 12) * 2

      this.monsterHealth -= playerAttackValue

      this.addLogMessage('player', 'attack', playerAttackValue)
      this.attackPlayer()
    },
    healPlayer() {
      this.currentRound++
      const playerHealValue = calculateDamage(8, 20)

      if (this.playerHealth + playerHealValue > 100) {
        this.playerHealth = 100
      } else {
        this.playerHealth += playerHealValue
      }

      this.addLogMessage('player', 'heal', playerHealValue)

      this.attackPlayer()
    },
    startNewGame() {
      this.playerHealth = 100
      this.monsterHealth = 100
      this.currentRound = 1
      this.winner = null
      this.logMessages = []
    },
    surrender() {
      this.winner = 'monster'
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value
      })
    }
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
    actionInitiator() {
      return this.logMessage
    }
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
