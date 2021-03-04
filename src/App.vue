<template>
  <div id="app">
    <div id="nav" class="nav">
      <router-link
        :to="{
          name: 'Home'
        }"
        >Inicio
      </router-link>
      |
      <router-link to="/about">Sobre Nosotros</router-link>
      |
      <router-link
        :to="{
          name: 'Contact'
        }"
      >
        Contacto
      </router-link>
      |
      <router-link to="/padre">Padre</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
