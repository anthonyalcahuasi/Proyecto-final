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
      <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="Apellido Paterno">
        <b-form-input id="input-sm" size="sm" placeholder="Enter Apellido Paterno" type="text" v-model="d.paterno" required></b-form-input>
      </b-form-group>
      <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="Apellido Materno">
        <b-form-input id="input-sm" size="sm" placeholder="Enter Apellido Materno" type="text" v-model="d.materno" required></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="Correo">
        <b-form-input id="input-sm" size="sm" placeholder="Enter E-mail" type="email" v-model="d.email" required></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="Edad">
        <b-form-input id="input-sm" size="sm" placeholder="Enter Edad" type="number" v-model="d.edad" required></b-form-input>
      </b-form-group>
      

      <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="Telefono">
        <b-form-input id="input-sm" size="sm" placeholder="Enter Número Celular" type="number" v-model="d.celular" required></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="Direccion">
        <b-form-input id="input-sm" size="sm" placeholder="Enter Fecha de Nacimiento" type="date" v-model="d.fechanacimiento" required></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="DNI">
        <b-form-input id="input-sm" size="sm" placeholder="Enter DNI" type="number" v-model="d.dni" required></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="Estado">
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
  name: "PersonForm",
  data: function () {
    return {
      message: "",
      showMessage: false,
      d: {
        ID: "",
        nombre: "",
        paterno: "",
        materno: "",
        correo: "",
        edad: "",
        telefono: "",
        direccion: "",
        dni: "",
        estado: "",
      },

    };
  },
  components: {
    alert: Alert,
  },
  methods: {
    
    back: function () {
      this.$router.push("/persons");
    },

    create: function (payload) {
      client
        .post("/v1/personas", payload)
        .then(() => {
          console.log(payload);

          this.message = "Persona Agragado!";
          this.showMessage = true;
          this.$router.push("/persons?msg="+this.message);
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
      this.d.paterno = "";
      this.d.materno = "";
      this.d.correo = "";
      this.d.edad = "";
      this.d.telefono = "";
      this.d.direccion = "";
      this.d.dni = "";
      this.d.estado = "";
    },
    onSubmit: function (evt) {
      evt.preventDefault();

      const payload = {
        nombre: this.d.nombre,
        paterno: this.d.paterno,
        materno: this.d.materno,
        correo: this.d.correo,
        edad: this.d.edad,
        celular: this.d.telefono,
        fechanacimiento: this.d.direccion,
        dni: this.d.dni,
        estado: this.d.estado,
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
        .get(`/v1/personas/${id}`)
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
        .put(`/v1/personas/${id}`, payload)
        .then(() => {
          console.log(payload);

          this.message = "Person Actualizado!";
          this.showMessage = true;
          this.$router.push("/persons?msg="+this.message);
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