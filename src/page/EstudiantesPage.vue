vue <template>
  
  <h1>Pagina de Estudiantes</h1>
    <Estudiante />
    <EstudianteEliminar  />
    <EstudianteRegistro />

</template>

<script>
 import Estudiante from '../components/Estudiante.vue'
 import EstudianteEliminar from '../components/EstudianteEliminar.vue'
 import EstudianteRegistro from '../components/EstudianteRegistro.vue'
export default {
    components: {
    Estudiante,
    EstudianteEliminar,
    EstudianteRegistro
  }
   

}
</script>

<style>

</style>