<template>
  <div class="container">
    <h1>Person Form</h1>
        <hr />
        <br />
        <alert :message="message" v-if="showMessage"></alert>
        <b-form @submit="onSubmit" @reset="onReset" class="w-100">
        <button
          type="button"
          class="btn btn-success btn-sm"
          v-on:click="back()"
        >
          Cancel
        </button>
        <br /><br />ID= {{ d.ID }}
    
      <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="Nombre">
        <b-form-input id="input-sm" size="sm" placeholder="Enter Nombre" type="text" v-model="d.nombre" required></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="Fecha Inicio">
        <b-form-input id="input-sm" size="sm" placeholder="Enter Fecha Inicio" type="text" v-model="d.fechainicio" required></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="Fecha Fin">
        <b-form-input id="input-sm" size="sm" placeholder="Enter Fecha Fin" type="text" v-model="fechafin" required></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="FechaEntrega">
        <b-form-input id="input-sm" size="sm" placeholder="Enter FechaEntrega" type="text" v-model="d.fechaentrega" required></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="Nota">
        <b-form-input id="input-sm" size="sm" placeholder="Enter Nota" type="text" v-model="d.nota" required></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="Estado">
        <b-form-input id="input-sm" size="sm" placeholder="Enter Estado" type="text" v-model="d.estado" required></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="SecuenciaID">
        <b-form-input id="input-sm" size="sm" placeholder="Enter SecuenciaID" type="text" v-model="d.secuenciaid" required></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="PersonaID">
        <b-form-input id="input-sm" size="sm" placeholder="Enter PersonaID" type="text" v-model="d.personaid" required></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="RecursoID">
        <b-form-input id="input-sm" size="sm" placeholder="Enter RecursoID" type="text" v-model="d.recursoid" required></b-form-input>
      </b-form-group>
   
      <b-button-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-button-group>
      
    </b-form>
  </div>
</template>


<script>
import Alert from "./Alert.vue";
import client from "../api";

export default {
  name: "TareaForm",
  data: function () {
    return {
      message: "",
      showMessage: false,
      d: {
        ID: "",
        nombre: "",
        fechainicio: "",
        fechafin: "",
        fechaentrega: "",
        nota: "",
        estado: "",
        secuenciaid: "",
        personaid: "",
        recursoid: "",
      },

    };
  },
  components: {
    alert: Alert,
  },
  methods: {
    
    back: function () {
      this.$router.push("/tareas");
    },

    create: function (payload) {
      client
        .post("/v1/tareas", payload)
        .then(() => {
          console.log(payload);

          this.message = "Tarea Agregada!";
          this.showMessage = true;
          this.$router.push("/tareas?msg="+this.message);
        })
        .catch((error) => {
          this.message = error;
          this.showMessage = true;
          console.log(error);
        });
    },
    initForm: function () {
      //this.d.ID = '';
      this.d.nombre = "";
      this.d.fechainicio = "";
      this.d.fechafin = "";
      this.d.fechaentrega = "";
      this.d.nota = "";
      this.d.estado = "";
      this.d.secuenciaid = "";
      this.d.personaid = "";
      this.d.recursoid = "";
    },
    onSubmit: function (evt) {
      evt.preventDefault();

      const payload = {
        nombre: this.d.nombre,
        fechainicio: this.d.fechainicio,
        fechafin: this.d.fechafin,
        nota: this.d.nota,
        estado: this.d.estado,
        secuenciaid: this.d.secuenciaid,
        personaid: this.d.personaid,
        recursoid: this.d.recursoid,
      };
      if (this.d.ID > 0) {
        this.update(payload, this.d.ID);
      } else {
        this.create(payload);
      }
      this.initForm();
    },
    onReset: function (evt) {
      evt.preventDefault();
      //this.initForm();
      evt.target.reset();
    },

    getById: function (id) {
      client
        .get(`/v1/tareas/${id}`)
        .then((res) => {
          this.d = res.data;
        })
        .catch((error) => {
          this.message = error;
          this.showMessage = true;
          console.error(error);
        });
    },

    update: function (payload, id) {
      client
        .put(`/v1/tareas/${id}`, payload)
        .then(() => {
          console.log(payload);

          this.message = "Tarea Actualizada!";
          this.showMessage = true;
          this.$router.push("/tareas?msg="+this.message);
        })
        .catch((error) => {
          this.message = error;
          this.showMessage = true;
          console.error(error);
          //this.getBooks();
        });
    },
  },

  created: function () {
    this.d.ID = this.$route.params.id;
    if (this.d.ID > 0) {
      this.getById(this.d.ID);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  color: #42b983;
}
</style>