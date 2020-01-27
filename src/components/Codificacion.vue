<template>
  <div class="hello">    
    <h1>{{count}}</h1>
    <h1>{{codificaciones.length}}</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">User ID</th>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">completed</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="codificacion in codificaciones" v-bind:Key="codificacion.ID_Sociedad">
          <th scope="row">{{codificacion.userId}}</th>
          <td>{{codificacion.id}}</td>          
          <td>{{codificacion.title}}</td>          
          <td>{{codificacion.completed}}</td>    
          <td> <button v-on:click="Edit(codificacion.id)">Editar</button></td>      
        </tr>        
      </tbody>
    </table>    
  </div>
</template>

<script>
import CodificationService from '../services/Codification';
const srvCodification = new CodificationService();

export default {
  name: 'Codificacion',
  data: function () {
    return {
      count: 10,
      codificaciones:[]
    }
  },
  props: {
  },
  mounted () {
    this.GetCodifications();    
  },
  methods: {
    GetCodifications: async function () {        
      var response = await srvCodification.getAll();
      this.codificaciones = response.data
    },
    Edit: function (id) {
      this.$router.push('codificacion_update/'+String(id))       
    }
  }
}
</script>
