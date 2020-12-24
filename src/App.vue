<template>
<div>
  <b-navbar toggleable="lg" type="light" variant="warning">
                  <b-navbar-brand>
                    <img
                    src="../src/assets/logo.png"
                    alt="logo"
                    class="d-inline"
                    id="LogoBE"/>
                  </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item active to="/">HOME</b-nav-item>
        <b-nav-item active to="/docentehome">DOCENTE</b-nav-item>
        <b-nav-item active to="/alumnohome">ESTUDIANTE</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-button to="/login" variant="success" class="boton1">Login</b-button>
        <b-button to="/logout" variant="danger" class="boton2">Exit</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <router-view></router-view>
</div>
</template>


<style>
.appx {
  font-family: 'Bangers', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.boton2{
  margin-left: 20px;
}
#nav-collapse{
  font-family: 'Bangers', cursive;
}
#LogoBE {
  width: 180px;
}
</style>
