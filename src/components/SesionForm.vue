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
    
      <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="Titulo">
        <b-form-input id="input-sm" size="sm" placeholder="Enter Nombre de Sesión" type="text" v-model="d.nombre" required></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="Tema">
        <b-form-input id="input-sm" size="sm" placeholder="Enter Titulo" type="text" v-model="d.titulo" required></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="Estado">
        <b-form-input id="input-sm" size="sm" placeholder="Enter Descripción" type="Areatext" v-model="d.descripcion" required></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="Unidad ID">
        <b-form-input id="input-sm" size="sm" placeholder="Enter Estado" type="text" v-model="d.estado" required></b-form-input>
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
  name: "SesionForm",
  data: function () {
    return {
      message: "",
      showMessage: false,
      d: {
        titulo: "",
        tema: "",
        estado: "",
        unidad: "",
      },

    };
  },
  components: {
    alert: Alert,
  },
  methods: {
    
    back: function () {
      this.$router.push("/sesiones");
    },

    create: function (payload) {
      client
        .post("/v1/sesiones", payload)
        .then(() => {
          console.log(payload);

          this.message = "Sesión Agregado!";
          this.showMessage = true;
          this.$router.push("/sesiones?msg="+this.message);
        })
        .catch((error) => {
          this.message = error;
          this.showMessage = true;
          console.log(error);
        });
    },
    initForm: function () {
      //this.d.ID = '';
      this.d.titulo = "";
      this.d.tema = "";
      this.d.estado = "";
      this.d.unidadid = "";
    },
    onSubmit: function (evt) {
      evt.preventDefault();

      const payload = {
        titulo: this.d.titulo,
        tema: this.d.tema,
        descripcion: this.d.descripcion,
        estado: this.d.estado,
        unidadid: this.d.unidadid,
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
        .get(`/v1/sesiones/${id}`)
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
        .put(`/v1/sesiones/${id}`, payload)
        .then(() => {
          console.log(payload);

          this.message = "Sesión Actualizado!";
          this.showMessage = true;
          this.$router.push("/sesiones?msg="+this.message);
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