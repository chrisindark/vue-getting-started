<template>
  <div id="param">
    <p>Param</p>
    <form>
      <div class="form-group">
        <label for="userInput"></label>
        <input id="userInput" name="userInput" v-model="userInput" >
        <button @click="goToRoute">Go</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'param',
  data() {
    return {
      userInput: '',
    };
  },
  methods: {
    goToRoute() {
      this.$router.push({
        name: 'ParamDetails',
        params: {
          id: this.userInput,
        },
      });
    },
  },
};
</script>
