<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <h1>INSCRIBIR PERSONA</h1>

        <hr />
        <br /><br />
        <alert :message="message" v-if="showMessage"></alert>
        <button type="button" class="btn btn-success btn-sm" v-on:click="add()">
          Añadir Persona
        </button>
        <br /><br />
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Paterno</th>
              <th scope="col">Materno</th>
              <th scope="col">Correo</th>
              <th scope="col">Edad</th>
              <th scope="col">Telefono</th>
              <th scope="col">Direccion</th>
              <th scope="col">DNI</th>
              <th scope="col">Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(d, index) in list" :key="index">
              <td>{{ d.ID }}</td>
              <td>{{ d.nombre }}</td>
              <td>{{ d.paterno }}</td>
              <td>{{ d.materno }}</td>
              <td>{{ d.corre }}</td>
              <td>{{ d.edad }}</td>
              <td>{{ d.telefono }}</td>
              <td>{{ d.direccion }}</td>
              <td>{{ d.dni }}</td>
              <td>{{ d.estado }}</td>
              <td>
                <div class="btn-group" role="group">
                  <button
                    type="button"
                    class="btn btn-warning btn-sm"
                    @click="edit(d.ID)"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger btn-sm"
                    @click="onDelete(d)"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from "./Alert.vue";
import client from "../api";

export default {
  name: "Person",
  data: function () {
    return {
      list: [],
      message: "",
      showMessage: false,
    };
  },
  components: {
    alert: Alert,
  },
  methods: {
    edit: function (id) {
      this.$router.push("/persons/form/" + id);
    },
    add: function () {
      this.$router.push("/persons/form");
    },
    getList: function () {
      client
        .get("/v1/personas")
        .then((res) => {
          this.list = res.data.r;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    onDelete: function (d) {
      var r = confirm("Eliminar ?");
      if (r == true) {
        this.delete(d.ID);
      }
    },
    delete: function (id) {
      client
        .delete(`/v1/personas/${id}`)
        .then(() => {
          this.getList();
          this.message = "Persona Eliminado!";
          this.showMessage = true;
        })
        .catch((error) => {
          console.error(error);
          this.getList();
        });
    },
  },

  created: function () {

    this.message = this.$route.query.msg;
    //console.log(this.message);

    if (typeof(this.message) !=='undefined') {// || this.message !== null
      this.showMessage = true;
     // this.makeToast("Hecho", this.message, "success");
    }

    this.getList();
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