<template>
  <div class="home">
    <div>
      <button class="btn btn-primary" @click="handleActualizar">
        Actualizar
      </button>
      <button class="btn btn-primary" @click="handleNuevo">Nuevo</button>
      <button
        v-if="items.lenght > 0"
        class="btn btn-primary"
        @click="handleImprimir"
      >
        Imprimir
      </button>
      <button
        v-if="items.lenght > 0"
        class="btn btn-primary"
        @click="handleOtro"
      >
        Otro Botón
      </button>
    </div>
    <h1>HOLA MUNDO</h1>

    <p v-if="message">
      Mensaje: {{ message }} (Este mensaje desaparecerá en
      {{ contador }}segundos)
    </p>

    <h2>Items</h2>
    <div>
      <p v-for="i in items" :key="i">Item {{ i }}</p>
    </div>

    <button @click="addItem" class="btn btn-primary">Añadir nuevo Item</button>
    <button class="btn btn-primary">
      Quitar el último item
    </button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',

  data: () => ({
    items: [1, 2, 3, 4, 5],
    message: '',
    contador: 3
  }),

  methods: {
    handleActualizar() {
      this.message = 'Hiciste click sobre actualizar'
      this.resetMessage()
    },
    handleNuevo() {
      this.message = 'Hiciste click sobre nuevo'
      this.resetMessage()
    },
    handleImprimir() {
      this.message = 'Hiciste click sobre imprimir'
      this.resetMessage()
    },
    handleOtro() {
      this.message = 'Hiciste click sobre otro'
      this.resetMessage()
    },
    resetMessage() {
      setInterval(() => {
        this.contador -= 1
      }, 1000)

      setTimeout(() => {
        this.message = ''
      }, 3000)
    },
    addItem() {
      this.items.push(this.items.length + 1)
    },
    removeItem() {
      this.items.pops()
      // console.log(this.items.pops())
    }
  }
}
</script>
