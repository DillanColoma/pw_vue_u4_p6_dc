<template>
  
  <h1>Pagina de Estudiantes</h1>
    <EstudianteActualizarBuscar />
    <EstudianteEliminar  />
    <EstudianteRegistro />

</template>

<script>
 import EstudianteActualizarBuscar from '../components/EstudianteActualizarBuscar.vue'
 import EstudianteEliminar from '../components/EstudianteEliminar.vue'
 import EstudianteRegistro from '../components/EstudianteRegistro.vue'

export default {
    components: {
    EstudianteActualizarBuscar,
    EstudianteEliminar,
    EstudianteRegistro
  }
   

}
</script>

<style>

</style>