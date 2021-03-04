<template>
  <div>
    <h1>Soy el HIJO 2</h1>
    <p>ID: {{ $route.params.id }}</p>

    <p>q: {{ q }}</p>
    <p>id: {{ id }}</p>
  </div>
</template>

<script>
export default {
  name: 'Dos',

  computed: {
    q() {
      return this.$route.query.q || 'No query'
    },

    id() {
      return this.$route.params.id
    }
  },

  mounted() {
    console.log('$route', this.$route)
  }
}
</script>

<style scoped></style>
