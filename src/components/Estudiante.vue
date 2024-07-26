<template>
  <div class="container">
    <div >
      <header>Datos Estudiante</header>
      <section>
        <div >
          <p type="Nombre">
            <input v-model="nombre" type="text" />
          </p>
          <p type="Apellido">
            <input v-model="apellido" type="text" />
          </p>
          <p type="Cédula">
            <input v-model="cedula" type="text" />
          </p>
          <p type="Género:">
            <input v-model="genero" type="text" />
          </p>
          <p type="Fecha de Nacimiento:">
            <input v-model="fecha" type="date" />
          </p>
          <div class="botonBuscar">
            <button @click="consultar">Buscar</button>
          </div>
          <div class="botonActualizar">
            <button @click="actualizar">Actualizar</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import {
  obtenerPorCedulaAxiosFachada,
  actualizarFachada,
} from "../assets/clients/clienteEstudiante.js";
export default {
  data() {
    return {
      cedula: null,
      genero: null,
      apellido: null,
      fecha: null,
      nombre: null,
    };
  },
  methods: {
    async consultar() {
      console.log(this.cedula);

      const data = await obtenerPorCedulaAxiosFachada(this.cedula);
      console.log(data);
      console.log(data.nombre);
      console.log(data.apellido);
      this.genero = data.genero;
      this.apellido = data.apellido;
      this.nombre = data.nombre;
      this.fecha = data.fecha;
    },

    //1998-08-31T00:00:00
    async actualizar() {
      console.log(this.fecha);
      let fechaFinal = this.fecha + "T00:00:00";
      const bodyEstudiante = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: fechaFinal,
        genero: this.genero,
        cedula: this.cedula,
      };
      //necesita dos argumentos cedula y el objeto estudiante
      const data = await actualizarFachada(this.cedula, bodyEstudiante);
      console.log(data);
    },
  },
};
</script>
<style scope>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
body {
  background-color: rgb(212, 235, 255);
}
p:before {
  content: attr(type);
  display: block;
  margin: 5px;
  font-size: 15px;
  color: black;
}
header {
  color: black;
  font-size: 35px;
  background: rgba(140, 140, 140, 0.53);
}
input {
  width: 200px;
  border: none;
  border-bottom: 2px solid #bebed2;
}
input:focus {
  outline: none;
  border-bottom: 2px solid #78788c;
}


button {
  width: 100px;
  padding: 10px 20px;
  background-color: #78788c;
  color: white;
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