<template>
  <div class="navbar">
    <router-link to="/">Bienvenido</router-link>
    <router-link to="/estudiante/registro/page">Registrar</router-link>
    <router-link to="/estudiante/actualizar/page/vacio">Actualizar</router-link>
    <router-link to="/estudiante/eliminar/page">Eliminar</router-link>
    
  </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar{
  padding: 30px 80px;  
}
.navbar a{
  color: rgb(127, 127, 138);
  margin: 0px 30px;
  border: solid;
  border-radius:12px;
  background: rgb(234, 245, 81);
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding: 12px;
}
</style>