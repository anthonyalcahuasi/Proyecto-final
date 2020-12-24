<template>
<div>
<header>
  <b-container>
    <b-carousel controls indicators img-width="1024" img-height="380">
      <b-carousel-slide img-src="https://image.freepik.com/foto-gratis/libro-fondo-tablero-verde_1150-3837.jpg">
       <img src="../assets/logo.png" alt="" id="LogoBE">
      </b-carousel-slide>
      <b-carousel-slide img-src="https://image.freepik.com/foto-gratis/piensa-fuera-caja-pizarra-verde-escuela_36051-447.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="https://image.freepik.com/foto-gratis/preparado-vuelta-al-colegio_1134-12.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="https://image.freepik.com/foto-gratis/profesor-seguro-explicando-leccion-alumnos_74855-9751.jpg"></b-carousel-slide>
    </b-carousel>
  </b-container>
</header>
<br>
<br>
<br>

<div>
<div class="galeria">
        <div class="linea"></div>
        <div class="contenedor-imagenes">
            <h1>INSCRIBIR PERSONA</h1>
            <div class="imagen">
                <img src="https://image.freepik.com/foto-gratis/trabajadores-equipo-sientan-escritorio-toman-notas-bloc-notas-preparan-seminario-sostienen-telefono-inteligente-moderno-panel-tactil-tienen-mirada-feliz-estudian-documentos-graficos-participan-proceso-trabajo_273609-26175.jpg" alt="">
                <div class="overlay">
                    <h1>INSCRIBETE</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <b-button variant="success" to="/persons" class="boton">Ir</b-button>
                </div>
            </div>
            <h1>REGISTRAR ROL</h1>
            <div class="imagen">
                <img src="https://image.freepik.com/vector-gratis/personaje-empresario-mostrando-diferentes-roles-sociales_1262-18136.jpg" alt="">
                <div class="overlay">
                    <h1>REGISTRA</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <b-button variant="success" to="/rol" class="boton">Ir</b-button>
                </div>
            </div>
        </div>
        <br>
        <br>
        <br>
        <div class="contenedor-imagenes">
            <h1>INSCRIBIR DOCENTE</h1>
            <div class="imagen">
                <img src="https://image.freepik.com/foto-gratis/colegas-formacion-docente-ejercicio_23-2148222557.jpg" alt="">
                <div class="overlay">
                    <h1>INSCRIBE</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <b-button variant="success" to="/docente" class="boton">Ir</b-button>
                </div>
            </div>
            <h1>INSCRIBIR ALUMNO</h1>
            <div class="imagen">
                <img src="https://image.freepik.com/foto-gratis/muchacho-atento-centrado-libro-verde_127093-2900.jpg" alt="">
                <div class="overlay">
                    <h1>INCRIBE</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <b-button variant="success" to="/alumnos" class="boton">Ir</b-button>
                </div>
            </div>
        </div>
</div>
<br>
<br>
<br>
<br>
<br>
<br>
</div>
<footer>
    <h3>@Copyright Anthony.Alcahuasi</h3>
</footer>
</div>

</template>

<style scoped>
header{
  width: 100%;
  height:700px;
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
.card1{
  margin-left: 300px;
  text-align: center;
}
.card2{
  margin-left: 1000px;
  margin-top: -165px;
  text-align: center;
}
.sesiones{
  margin-left: 1400px;
  margin-top: -2450px;
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
}
#curso-text{
  margin-left: 200px;
  font-size: 70px;
  color: #c97515;
}
.cursos{
  background: rgb(255, 255, 255);
}
#curso1{
  margin-left: 200px;
  font-size: 20px;
  background: #c97515;
  color: white;
  

}
.boton{
  text-align: center;
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
  color: #ffffff;
}
#LogoBE {
  width: 580px;
  margin-top: -1000px;
  margin-left: 150px;
}
footer{
    height: 50px;
    color: rgb(0, 0, 0);
    background: rgb(255, 185, 56);
    text-align: center;
}
footer >h3{
    font-size: 20px;
    margin-bottom: 20px;
}
</style>