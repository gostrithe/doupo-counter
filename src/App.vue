<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <div
    v-if="$route.path == '/'"
    style="
      background: #eee;
      height: 90vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    "
  >
    <div class="box1 box0">
      <RouterLink class="center" style="width: 100%; height: 100%; color: #fff" to="/about"
        >经典模式</RouterLink
      >
    </div>
    <div class="box2 box0">
      <RouterLink class="center" style="width: 100%; height: 100%; color: #fff" to="/default"
        >蔡徐坤模式</RouterLink
      >
    </div>
  </div>

  <RouterView />
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.box0 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 40%;
  background: skyblue;
  border-radius: 7%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.box0:active {
  transform: scale(1.1);
}
.box1 {
  margin-bottom: 10%;
}
.box2 {
  background: rgb(171, 231, 171);
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
