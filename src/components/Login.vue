<template>
<header>
  <div class="container">
    <br>
    <br>
    <br>
    <br>
    <div class="row">
      <div class="col-sm-5">
        <h1>Iniciar Sesión</h1>
        <hr />
        <br />
        <alert :message="message" v-if="showMessage"></alert>

        <b-form @submit="onSubmit" @reset="onReset" class="w-500">
          <b-form-group
            id="form-title-group"
            label="Username:"
            label-for="form-title-input"
          >
            <b-form-input
              id="form-title-input"
              type="text"
              v-model="d.username"
              required
              placeholder="Enter title"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group
            id="form-author-group"
            label="Password:"
            label-for="form-author-input"
          >
            <b-form-input
              id="form-author-input"
              type="text"
              v-model="d.password"
              required
              placeholder="Enter author"
              >s
            </b-form-input>
          </b-form-group>

          <b-button-group>
            <b-button type="submit" variant="success" @click="makeToast('success')" class="mb-2">Ingresar</b-button>
          </b-button-group>
        </b-form>
      </div>
    </div>
  </div>
</header>
</template>

<script>
import Alert from "./Alert.vue";
import client from "../api";

export default {
  name: "LoginForm",
  data: function () {
    return {
      message: "",
      showMessage: false,
      d: {
        username: "",
        password: "",
      },
    };
  },
  components: {
    alert: Alert,
  },
  methods: {
    makeToast(variant = null) {
        this.$bvToast.toast('Usuario Correctamente registrado', {
          title: `Inicio de Sesión`,
          variant: variant,
          solid: true
        })
    },
    back: function () {
      this.$router.push("/persons");
    },

    login: function (payload) {
      client
        .post("/v1/login", payload)
        .then((res) => {
          console.log(payload);

          // console.log('set');
          let credentials = {
            "token":res.data.token,
            "user":res.data,
          };
          //console.log(credentials.token);
          localStorage.setItem("user", JSON.stringify(credentials));

          //console.log('get');
          //let user = JSON.parse(localStorage.getItem("user"));
          //if (user != null) {
          //  console.log(user.token);
          //}

          this.message = "Login success!";
          this.showMessage = true;
          this.makeToast("Hecho", "Login ok", "success");
          //this.$router.push("/persons");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    initForm: function () {
      //this.d.ID = '';
      this.d.username = "";
      this.d.password = "";
    },
    onSubmit: function (evt) {
      evt.preventDefault();

      const payload = {
        email: this.d.username,
        password: this.d.password,
      };

      this.login(payload);

      this.initForm();
    },
    onReset: function (evt) {
      evt.preventDefault();
      //this.initForm();
      evt.target.reset();
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
header{
  background: url(../assets/fondo-login.png);
  width: 100%;
  height: 1000px;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
.row{
  background: #f2984aa1;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #F2C94C, #F2994A);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #F2C94C, #F2994A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  position: center;
  width: 800px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Bangers', cursive;
  font-size: 20px;
  border-radius: 30px;
  margin-left: 120px;
}
h1{
  color: rgb(0, 0, 0);
  text-align: center;
  font-family: 'Bangers', cursive;
  font-size: 50px;
}
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
#inicio{
  text-align: center;
}
.hello {
  color: #42b983;
}
.w-500{
  text-align: center;
}
</style>