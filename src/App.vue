<template>
<EstudianteRegistro></EstudianteRegistro>
<Estudiante></Estudiante>
<EstudianteEliminar></EstudianteEliminar>
</template>

<script>
import EstudianteRegistro from './components/EstudianteRegistro.vue'
import Estudiante from './components/Estudiante.vue'
import EstudianteEliminar from './components/EstudianteEliminar.vue'


export default {
  name: 'App',
  components: {
    //EstudianteRegistro,
    //Estudiante,
    EstudianteEliminar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
