<template>
  <div>
    <h1>Editar Codificacion</h1>    
    <form>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">ID</label>
        <div class="col-sm-10">
          <input type="text" class="form-control-plaintext" id="Sociedad_ID" v-model="blog.id">
        </div>
      </div>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Completed</label>
        <div class="col-sm-10">
          <input type="text" class="form-control-plaintext" id="Plan_Final" v-model="blog.completed">
        </div>
      </div>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Title</label>
        <div class="col-sm-10">
          <input type="text" class="form-control-plaintext" id="Opcion_Plan_Salud" v-model="blog.title">
        </div>
      </div>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">User</label>
        <div class="col-sm-10">
          <input type="text" class="form-control-plaintext" id="Plan_Beneficios" v-model="blog.userId">
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>  
  </div>
</template>

<script>
import CodificationService from '../services/Codification';
const srvCodification = new CodificationService();

export default {
  name: 'CodificacionUpdate',
  data: function(){
    return {
      numero:10,
      blog:{
        completed:'',
        id:'',
        title:'',
        userId:'',
      }
    }
  },
  props: {
  },
  mounted () {    
    this.GetBlog();    
  },
  methods: {
    GetBlog: async function () {        
      var response = await srvCodification.getById(this.$route.params.id);
      this.blog.completed = response.data.completed;
      this.blog.id = response.data.id;
      this.blog.title = response.data.title;
      this.blog.userId = response.data.userId;
      debugger      
    },
    Edit: function () {      
      this.$router.push('about')       
    }
  }
}
</script>
