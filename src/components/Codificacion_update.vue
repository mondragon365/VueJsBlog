<template>
  <div>
    <h1>Editar Codificacion</h1>    
    <form>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Sociedad ID</label>
        <div class="col-sm-10">
          <input type="text" readonly class="form-control-plaintext" id="Sociedad_ID" value="">
        </div>
      </div>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Plan Final</label>
        <div class="col-sm-10">
          <input type="text" readonly class="form-control-plaintext" id="Plan_Final" value="">
        </div>
      </div>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Opcion Plan</label>
        <div class="col-sm-10">
          <input type="text" readonly class="form-control-plaintext" id="Opcion_Plan_Salud" value="">
        </div>
      </div>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Plan Beneficios</label>
        <div class="col-sm-10">
          <input type="text" readonly class="form-control-plaintext" id="Plan_Beneficios" value="">
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>  
  </div>
</template>

<script>
//const axios = require('axios');
export default {
  name: 'CodificacionUpdate',
  props: {
  },
  mounted () {
    // axios
    //   .get('https://hdyqud4ppg.execute-api.us-west-2.amazonaws.com/live/codificacion')
    //   .then(response => (this.codificaciones = response.data))
  },
  methods: {
    Edit: function () {      
      //alert('Hola !');
      this.$router.push('about')       
    }
  }
}
</script>
