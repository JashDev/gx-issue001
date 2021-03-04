<template>
  <div>
    <h1>Esto es parte del padre</h1>
    <label>
      Buscar
      <input type="text" v-model="q" />
    </label>

    <div class="nav">
      <!--      <router-link to="/inicio">Inicio</router-link>-->
      <!--      |-->
      <!--      <router-link to="/padre/uno">Uno</router-link>-->
      <!--      |-->
      <!--      <router-link-->
      <!--        v-for="(r, key) in rutas"-->
      <!--        :key="key"-->
      <!--        :to="`/padre/dos/${r.id}`"-->
      <!--      >-->
      <!--        {{ r.name }}-->
      <!--      </router-link>-->
      <router-link
        v-for="(r, key) in rutas"
        :key="key"
        :to="{
          name: 'HijoDos',
          params: {
            id: r.id
          },
          query: {
            q: r.id === 1 ? 'Buscando algo' : undefined
          }
          // hash: '#foo=bar'
        }"
      >
        {{ r.name }}
        |
      </router-link>

      <!--      <router-link-->
      <!--        :to="{-->
      <!--          name: 'HijoDos',-->
      <!--          params: {-->
      <!--            id: '2'-->
      <!--          },-->
      <!--          query: {-->
      <!--            q-->
      <!--          }-->
      <!--        }"-->
      <!--        exact-->
      <!--      >-->
      <!--        Hijo 2-->
      <!--      </router-link>-->
    </div>

    <button @click="irInicio">Ir al inicio</button>
    <button @click="irSegundo">Ir al 2</button>
    <button @click="irPadre">Ir al padre</button>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Padre',

  data: () => ({
    q: '',
    rutas: [
      {
        name: 'ID 1',
        id: 1
      },
      {
        name: 'ID 2',
        id: 2
      },
      {
        name: 'Otro hijo 3',
        id: 234
      }
    ]
  }),

  methods: {
    irInicio() {
      this.$router.push('/inicio')
    },

    irSegundo() {
      this.$router.push({
        name: 'HijoDos',
        params: {
          id: '2'
        }
      })
      // this.$router.push({
      //   path: '/padre/dos/2'
      // })
    },

    irPadre() {
      this.$router.push('/padre')
    }
  }
}
</script>

<style scoped></style>
