<template>
  <div>
    <h1>Hola Mundo</h1>
    <button @click="saludar">Saludar</button>
    <button @click="esSaludo = false">Quitar Saludo</button>

    <p v-if="esSaludo">Hola {{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'Contact',

  data: () => ({
    name: 'Jhojhan',
    esSaludo: false
  }),

  methods: {
    saludar() {
      this.esSaludo = true
    }
  }
}
</script>

<style scoped>
.main {
  color: red;
}
</style>
