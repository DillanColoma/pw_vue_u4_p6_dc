<template>
  <div class="container">
    <div class="formulario">
      <header>Datos Estudiante</header>
      <section>
        <form class="form">
          <p type="Nombre">
            <input type="text" />
          </p>
          <p type="Apellido">
            <input type="text" />
          </p>
          <p type="Cédula">
            <input type="text" />
          </p>
          <p type="Género:">
            <input type="text" />
          </p>
          <p type="Fecha de Nacimiento:">
            <input type="date" />
          </p>
          <div class="botonBuscar">
            <button>Buscar</button>
          </div>
          <div class="botonActualizar">
            <button>Actualizar</button>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
</script>
<style>
 .container{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
 }
 body{
    background-color: rgb(212, 235, 255);
 }
 p:before{
   content: attr(type);
   display: block;
   margin: 5px;
   font-size: 15px;
   color: black;
   
 }
 header{
    color: black;
    font-size: 35px;
    background: rgba(140, 140, 140, 0.53);
 }
 input{
    width: 200px;
    border: none;
    border-bottom: 2px solid #bebed2;

 }
 input:focus{
    outline: none;
    border-bottom: 2px solid #78788c;
 }
 .form {
    width: 300px;
    height: 445px;
    background-color: #e6e6e6;
    border-radius: 10px;
    padding: 25px 35px;
    margin: 25px;
    box-shadow: 0px 0px 30px 5px #000;
}

button{
    width: 100px;
    padding: 10px 20px;
    background-color: #78788C;
    color: white ;
    border-radius: 12px;
    cursor: pointer;
    border: none;
}
.botonBuscar {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-top: 25px;
    padding: 12px;
}
</style>