<template>
   <div class="wrapper">
     <nav class="navbar navbar-default">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <i class="glyphicon glyphicon-time"></i>Vue</a>
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#not-google-plus-nav">
          <span class="sr-only">Toggle Navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <ul class="nav navbar-nav">
          <li><router-link v-bind:to="'/'">Hello</router-link></li>
          <li><router-link v-bind:to="'/home'">Home</router-link></li>
          <li><router-link v-bind:to="'/about'">About</router-link></li>
          <li><router-link v-bind:to="'/param'">Param Link</router-link></li>
          <li><router-link v-bind:to="'/time-entries'">Time Entries</router-link></li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="col-xs-12 text-center">
        <img src="./assets/logo.png">
      </div>

      <div class="col-xs-12">
        <router-view></router-view>
      </div>

      <!-- <div class="col-sm-3">
        <sidebar :time="totalTime"></sidebar>
      </div>
      <div class="col-sm-9">
         <router-view></router-view>
      </div> -->
    </div>
   </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html, body {
  position: relative;
  min-height: 100%;
  height: 100%;
}

.wrapper {
  min-height: 100%;
  height: 100%;
}
</style>
