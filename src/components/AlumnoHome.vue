<template>
<div>
<header>
  <b-container>
    <b-carousel controls indicators img-width="924" img-height="480">
      <b-carousel-slide img-src="https://image.freepik.com/foto-gratis/vista-frontal-estudiante-camisa-blanca-mochila-negro-mascara-esteril-sosteniendo-cafe-archivos-pared-azul_140725-38511.jpg">
          <img src="../assets/logo.png" alt="" id="LogoBE">
          <h1 id="titulo">Plataforma ESTUDIANTE</h1>
      </b-carousel-slide>
      <b-carousel-slide img-src="https://image.freepik.com/foto-gratis/estudiante-masculino-vista-frontal-camiseta-roja-mochila-mascara-esteril-negra-sosteniendo-cuadernos-sobre-fondo-azul_140725-40786.jpg">
          <img src="../assets/logo.png" alt="" id="LogoBE1">
      </b-carousel-slide>
      <b-carousel-slide img-src="https://image.freepik.com/foto-gratis/vista-frontal-estudiante-camisa-roja-mochila-sosteniendo-rotuladores-cuaderno-sobre-pared-azul_140725-38391.jpg">
          <img src="../assets/logo.png" alt="" id="LogoBE1">
      </b-carousel-slide>
      <b-carousel-slide img-src="https://image.freepik.com/foto-gratis/estudiante-que-estudia-lluvia-ideas-analying-campus-concept_53876-14034.jpg">
          <img src="../assets/logo.png" alt="" id="LogoBE1">
      </b-carousel-slide>
    </b-carousel>
  </b-container>
</header>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

<h1 id="curso-text">CURSOS</h1>
<div class="linea"></div>
<div class="cursos">
  
  <br>
<div id="curso1">
  <b-card no-body class="overflow-hidden" style="max-width: 400px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://image.freepik.com/vector-gratis/fondo-dibujos-animados-elementos-matematicas_52683-9162.jpg" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="MATEMÁTICA">
          <b-card-text>
            This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
          <b-button to="/sesionhome" variant="success" id="boton">Ir al curso</b-button>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
  
</div>
<div id="curso2">
  <b-card no-body class="overflow-hidden" style="max-width: 400px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://image.freepik.com/vector-gratis/formulas-cientificas-dibujadas-mano-sobre-fondo-pizarra_23-2148495053.jpg" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="FISICA">
          <b-card-text>
            This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
          <b-button to="/sesionhome" variant="success" id="boton">Ir al curso</b-button>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
  
</div>
<div id="curso3">
  <b-card no-body class="overflow-hidden" style="max-width: 400px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://image.freepik.com/vector-gratis/recomiende-concepto-amigo-ilustrado_52683-24324.jpg" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="COMU">
          <b-card-text>
            This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
          <b-button to="/sesionhome" variant="success" id="boton">Ir al curso</b-button>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
  
</div>
<div id="curso4">
  <b-card no-body class="overflow-hidden" style="max-width: 400px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://image.freepik.com/vector-gratis/cuento-piratas_1051-554.jpg" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="HISTORIA">
          <b-card-text>
            This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
          <b-button to="/sesionhome" variant="success" id="boton">Ir al curso</b-button>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
  
</div>
</div>
<br>
<br>
<br>
<h1 id="sesiones-text">CLASES EN VIVO</h1>
  <div class="linea"></div>
<div class="sesiones">
  <br>
  <div class="sesion" id="sesion1">
  <b-card title="MATEMÁTICAS" sub-title="Productos Notables">
    <b-button href="https://meet.google.com/" variant="success">Entrar a la reunión</b-button>
  </b-card>
</div>
<br>
<div class="sesion" id="sesion2">
  <b-card title="FÍSICA" sub-title="Magnitudes Dimensionales">
    <b-button href="https://meet.google.com/" variant="success">Entrar a la reunión</b-button>
  </b-card>
</div>
<div class="sesion" id="sesion3">
  <b-card title="COMUNICACIÓN" sub-title="Capacidades Comunicativas">
    <b-button href="https://meet.google.com/" variant="success">Entrar a la reunión</b-button>
  </b-card>
</div>
<div class="sesion" id="sesion4">
  <b-card title="HISTORIA" sub-title="Origen del Perú">
    <b-button href="https://meet.google.com/" variant="success">Entrar a la reunión</b-button>
  </b-card>
</div>
</div>
<br>
<br>
<footer>
    <h3>@Copyright Anthony.Alcahuasi</h3>
</footer>
</div>


</template>

<style scoped>
header{
  background: url();
  width: 100%;
  height:700px;
  background-attachment:fixed;
  background-position: center;
  background-size: cover;
}
.galeria{
    font-family: 'open sans';
}

.galeria h1{
    text-align: center;
    margin:20px 0 15px 0;
    font-weight: 300;
}

.linea{
    border-top: 5px solid #ccbf08;
    margin-bottom: 40px;
}

.contenedor-imagenes{
    display:flex;
    width: 85%;
    margin: auto;
    justify-content: space-around;
    flex-wrap: wrap;
    border-radius:3px;
}

.contenedor-imagenes .imagen{
    width: 32%;
    position: relative;
    height:250px;
    margin-bottom:5px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, .75)
}
.imagen img{
    width: 100%;
    height:100%;
    object-fit: cover;
}

.overlay{
    position: absolute;
    bottom: 0;
    left: 0;
    background:rgba(255, 228, 109, 0.781) ;
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: .5s ease;
}

.overlay h2{
    color: #fff;
    font-weight: 300;
    font-size:30px;
    position: absolute;
    top: 50%;
    left:50%;
    text-align: center;
    transform: translate(-50%, -50%);
}

.imagen:hover .overlay{
    height:100%;
    cursor: pointer;
}

@media screen and (max-width:1000px){
    .contenedor-imagenes{
        width: 95%;
    }
}

@media screen and (max-width:700px){
    .contenedor-imagenes{
        width: 90%;
    }
    .contenedor-imagenes .imagen{
        width: 48%;
    }
}

@media screen and (max-width:450px){
    h1{
        font-size:22px;
    }
    .contenedor-imagenes{
        width: 98%;
    }
    .contenedor-imagenes .imagen{
        width: 80%;
    }
}
.boton{
  text-align: center;
  margin-left: 230px;
}
.cursos{
    margin-left: 140px;
}
#curso2{
    margin-left: 430px;
    margin-top: -235px;
}
#curso3{
    margin-left: 860px;
    margin-top: -235px;
}
#curso4{
    margin-left: 1290px;
    margin-top: -235px;
}
#boton{
    margin-top: -190px;
    text-align: center;
    margin-left: 30px;
}
.card1{
  margin-left: 120px;
  text-align: center;
}
.card2{
  margin-left: 720px;
  margin-top: -165px;
  text-align: center;
}
.card3{
  margin-left: 1320px;
  margin-top: -165px;
  text-align: center;
}
.sesiones{
  margin-left: 130px;
}
#sesion2{
    margin-left: 450px;
    margin-top: -165px;
}
#sesion3{
    margin-left: 900px;
    margin-top: -142px;
}
#sesion4{
    margin-left: 1350px;
    margin-top: -142px;
}
.inicio{
  margin-left: 400px;
}
.sesion{
  width: 400px;
}
h1{
  font-family: 'Bangers', cursive;
  font-size: 30px;
  color: #c97515;
}
p{
  width: 400px;
  font-family: 'Dancing Script', cursive;
  font-size: 25px;
  color: #ffffff;
  text-align: center;
  margin-left: 50px;
}
.sesion{
  background: rgb(255, 255, 255);
  border-radius: 5px;
}
#sesiones-text{
  font-size: 70px;
  margin-left: 200px;
}
#curso-text{
  margin-left: 200px;
  font-size: 70px;
  color: #c97515;
}
.cursos{
  background: rgb(255, 255, 255);
}

.boton{
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
#LogoBE {
  width: 480px;
  margin-top: -1230px;
  margin-left: -400px;
}
#LogoBE1 {
  width: 180px;
  margin-top: -1030px;
  margin-left: 700px;
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
  color: #ffffff;
}
footer{
    height: 50px;
    color: rgb(0, 0, 0);
    background: rgb(255, 185, 56);
    text-align: center;
}
#titulo{
    color: #fff;
    margin-top: -150px;
    margin-left: -500px;
    font-size: 50px;
}
footer >h3{
    font-size: 20px;
    margin-bottom: 20px;
}
</style>