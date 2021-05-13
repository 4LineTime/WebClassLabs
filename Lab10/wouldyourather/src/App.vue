<template>
  <div id='app'>
    <h1>Would you rather...</h1>

    <would-you-rather v-bind:question="wyrQuestion"
      v-bind:answer1="wyrAnswer1"
      v-bind:answer2="wryAnswer2"
      v-on:answer-changed="answerChanged"
      ></would-you-rather>

      <p>{{ userSelectionMessage }}</p>

  </div>
</template>

<script>
import WouldYouRather from './components/WouldYouRather.vue'

export default {
  name: 'App',
  components: {
    WouldYouRather
  },
  data() {
    return {
      wyrQuestion: 'Would you rather have a pet dog or cat',
      wyrAnswer1: 'Dog',
      wryAnswer2: 'Cat',
      userSelectionMessage: ''
    }
  },
  methods: {
    answerChanged(choice) {
      this.userSelectionMessage = `Thanks! You chose ${choice}.`
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: lightgrey;
}

body {
  background-color: lightgray;
}

p {
  font: bold large;
}

</style>
