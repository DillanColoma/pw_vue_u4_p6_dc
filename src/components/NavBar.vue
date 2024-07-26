<template>
    <div class="navbar">
      <!--El href se usa en paginas web tradicionales, por lo tanto lo cambiaremos para que sea un SPA  -->
   
      <!--<a href="">Ingresar nuevo estudiante</a>  -->
      <router-link to="/">Bienvenido</router-link>
      <router-link to="/estudiante/registro/page">Ingresar nuevo estudiante</router-link>
      <router-link to="/estudiante/page/vacio">Actualizar estudiante</router-link>
      <router-link to="/estudiante/borrar/page">Eliminar Estudiante</router-link>
    </div>
  </template>
   
  <script>
  export default {
   
  }
  </script>
  <style>

  div{
    padding: 20px 80px;
    
  }

  div a {
  color: blue;
  margin: 0px 30px;
  border: solid;
  border-radius: 30px;
  background: rgb(103, 226, 84);
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding: 12px;
}
</style>