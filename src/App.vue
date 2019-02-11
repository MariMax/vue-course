<template>
  <div id="app">
    <nav-bar />
    <main><user-list /></main>
  </div>
</template>

<script>
import navBar from "@/components/nav-bar.vue";
import userList from "@/components/user-list.vue";

export default {
  name: "App",

  components: {
    navBar,
    userList
  }
};
</script>

<style lang="scss" scoped>
@import "./styles/variables.scss";
#app {
  height: 100vh;
}

main {
  background: $vue-dark-plus-5;
  box-sizing: border-box;
  max-width: $page-width;
  max-width: $page-width;
  min-height: 100%;
  margin: auto;
  padding: 76px 12px 32px;
}
</style>
