<template>
  <div class="jumbotron">
    <h1>Vue Time Tracker</h1>
    <p>
      <strong>
        Get started by <router-link v-bind:to="'/time-entries'">creating a time entry</router-link>.
      </strong>
    </p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {};
  },
};
</script>
