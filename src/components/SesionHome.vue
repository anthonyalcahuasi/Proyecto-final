<template>
    <div class="cabeza">
        <h1>SESIONES</h1>
        <div class="enviar">
            <b-form-input v-model="text" placeholder="Enviar mensaje al docente"></b-form-input>
            <div class="boton">
                <b-button variant="success" to="/persons" class="boton">ENVIAR</b-button>
            </div>
        </div>
        <div class="menu">
            <b-tabs content-class="mt-3">
            <b-tab title="UNIDAD 1" active>
                <div id="sesion1">
                    <b-card
                        no-body
                        style="max-width: 20rem;"
                        img-src="https://image.freepik.com/vector-gratis/suministros-regreso-escuela-estilo-plano_24908-56959.jpg"
                        img-alt="Image"
                        img-top
                    >
                        <template #header>
                        <h4 class="mb-0">SESION 1</h4>
                        </template>

                        <b-card-body>
                        <b-card-title>Ecuaciones</b-card-title>
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </b-card-text>
                        </b-card-body>

                        <b-list-group flush>
                        <b-list-group-item>Cras justo odio</b-list-group-item>
                        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                        <b-list-group-item>Vestibulum at eros</b-list-group-item>
                        </b-list-group>


                        <b-card-footer>This is a footer</b-card-footer>
                    </b-card>
                </div>
                <div id="sesion2">
                    <b-card
                        no-body
                        style="max-width: 20rem;"
                        img-src="https://image.freepik.com/vector-gratis/suministros-regreso-escuela-estilo-plano_24908-56959.jpg"
                        img-alt="Image"
                        img-top
                    >
                        <template #header>
                        <h4 class="mb-0">SESION 2</h4>
                        </template>

                        <b-card-body>
                        <b-card-title>Productos Notables</b-card-title>
                        <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </b-card-text>
                        </b-card-body>

                        <b-list-group flush>
                        <b-list-group-item>Cras justo odio</b-list-group-item>
                        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                        <b-list-group-item>Vestibulum at eros</b-list-group-item>
                        </b-list-group>


                        <b-card-footer>This is a footer</b-card-footer>
                    </b-card>
                </div>
                <div id="sesion3">
                    <b-card
                        no-body
                        style="max-width: 20rem;"
                        img-src="https://image.freepik.com/vector-gratis/suministros-regreso-escuela-estilo-plano_24908-56959.jpg"
                        img-alt="Image"
                        img-top
                    >
                        <template #header>
                        <h4 class="mb-0">SESION 3</h4>
                        </template>

                        <b-card-body>
                        <b-card-title>Conjuntos</b-card-title>
                        <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </b-card-text>
                        </b-card-body>

                        <b-list-group flush>
                        <b-list-group-item>Cras justo odio</b-list-group-item>
                        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                        <b-list-group-item>Vestibulum at eros</b-list-group-item>
                        </b-list-group>


                        <b-card-footer>This is a footer</b-card-footer>
                    </b-card>
                </div>
            </b-tab>
            <b-tab title="UNIDAD 2">
                <div id="sesion1">
                    <b-card
                        no-body
                        style="max-width: 20rem;"
                        img-src="https://image.freepik.com/vector-gratis/suministros-regreso-escuela-estilo-plano_24908-56959.jpg"
                        img-alt="Image"
                        img-top
                    >
                        <template #header>
                        <h4 class="mb-0">SESION 1</h4>
                        </template>

                        <b-card-body>
                        <b-card-title>Ecuaciones</b-card-title>
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </b-card-text>
                        </b-card-body>

                        <b-list-group flush>
                        <b-list-group-item>Cras justo odio</b-list-group-item>
                        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                        <b-list-group-item>Vestibulum at eros</b-list-group-item>
                        </b-list-group>


                        <b-card-footer>This is a footer</b-card-footer>
                    </b-card>
                </div>
                <div id="sesion2">
                    <b-card
                        no-body
                        style="max-width: 20rem;"
                        img-src="https://image.freepik.com/vector-gratis/suministros-regreso-escuela-estilo-plano_24908-56959.jpg"
                        img-alt="Image"
                        img-top
                    >
                        <template #header>
                        <h4 class="mb-0">SESION 2</h4>
                        </template>

                        <b-card-body>
                        <b-card-title>Productos Notables</b-card-title>
                        <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </b-card-text>
                        </b-card-body>

                        <b-list-group flush>
                        <b-list-group-item>Cras justo odio</b-list-group-item>
                        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                        <b-list-group-item>Vestibulum at eros</b-list-group-item>
                        </b-list-group>


                        <b-card-footer>This is a footer</b-card-footer>
                    </b-card>
                </div>
                <div id="sesion3">
                    <b-card
                        no-body
                        style="max-width: 20rem;"
                        img-src="https://image.freepik.com/vector-gratis/suministros-regreso-escuela-estilo-plano_24908-56959.jpg"
                        img-alt="Image"
                        img-top
                    >
                        <template #header>
                        <h4 class="mb-0">SESION 3</h4>
                        </template>

                        <b-card-body>
                        <b-card-title>Conjuntos</b-card-title>
                        <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </b-card-text>
                        </b-card-body>

                        <b-list-group flush>
                        <b-list-group-item>Cras justo odio</b-list-group-item>
                        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                        <b-list-group-item>Vestibulum at eros</b-list-group-item>
                        </b-list-group>


                        <b-card-footer>This is a footer</b-card-footer>
                    </b-card>
                </div>
            </b-tab>
            <b-tab title="UNIDAD 3">
                <div id="sesion1">
                    <b-card
                        no-body
                        style="max-width: 20rem;"
                        img-src="https://image.freepik.com/vector-gratis/suministros-regreso-escuela-estilo-plano_24908-56959.jpg"
                        img-alt="Image"
                        img-top
                    >
                        <template #header>
                        <h4 class="mb-0">SESION 1</h4>
                        </template>

                        <b-card-body>
                        <b-card-title>Ecuaciones</b-card-title>
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </b-card-text>
                        </b-card-body>

                        <b-list-group flush>
                        <b-list-group-item>Cras justo odio</b-list-group-item>
                        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                        <b-list-group-item>Vestibulum at eros</b-list-group-item>
                        </b-list-group>


                        <b-card-footer>This is a footer</b-card-footer>
                    </b-card>
                </div>
                <div id="sesion2">
                    <b-card
                        no-body
                        style="max-width: 20rem;"
                        img-src="https://image.freepik.com/vector-gratis/suministros-regreso-escuela-estilo-plano_24908-56959.jpg"
                        img-alt="Image"
                        img-top
                    >
                        <template #header>
                        <h4 class="mb-0">SESION 2</h4>
                        </template>

                        <b-card-body>
                        <b-card-title>Productos Notables</b-card-title>
                        <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </b-card-text>
                        </b-card-body>

                        <b-list-group flush>
                        <b-list-group-item>Cras justo odio</b-list-group-item>
                        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                        <b-list-group-item>Vestibulum at eros</b-list-group-item>
                        </b-list-group>


                        <b-card-footer>This is a footer</b-card-footer>
                    </b-card>
                </div>
                <div id="sesion3">
                    <b-card
                        no-body
                        style="max-width: 20rem;"
                        img-src="https://image.freepik.com/vector-gratis/suministros-regreso-escuela-estilo-plano_24908-56959.jpg"
                        img-alt="Image"
                        img-top
                    >
                        <template #header>
                        <h4 class="mb-0">SESION 3</h4>
                        </template>

                        <b-card-body>
                        <b-card-title>Conjuntos</b-card-title>
                        <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </b-card-text>
                        </b-card-body>

                        <b-list-group flush>
                        <b-list-group-item>Cras justo odio</b-list-group-item>
                        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                        <b-list-group-item>Vestibulum at eros</b-list-group-item>
                        </b-list-group>


                        <b-card-footer>This is a footer</b-card-footer>
                    </b-card>
                </div>
            </b-tab>
            <b-tab title="UNIDAD 4">
                <div id="sesion1">
                    <b-card
                        no-body
                        style="max-width: 20rem;"
                        img-src="https://image.freepik.com/vector-gratis/suministros-regreso-escuela-estilo-plano_24908-56959.jpg"
                        img-alt="Image"
                        img-top
                    >
                        <template #header>
                        <h4 class="mb-0">SESION 1</h4>
                        </template>

                        <b-card-body>
                        <b-card-title>Ecuaciones</b-card-title>
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </b-card-text>
                        </b-card-body>

                        <b-list-group flush>
                        <b-list-group-item>Cras justo odio</b-list-group-item>
                        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                        <b-list-group-item>Vestibulum at eros</b-list-group-item>
                        </b-list-group>


                        <b-card-footer>This is a footer</b-card-footer>
                    </b-card>
                </div>
                <div id="sesion2">
                    <b-card
                        no-body
                        style="max-width: 20rem;"
                        img-src="https://image.freepik.com/vector-gratis/suministros-regreso-escuela-estilo-plano_24908-56959.jpg"
                        img-alt="Image"
                        img-top
                    >
                        <template #header>
                        <h4 class="mb-0">SESION 2</h4>
                        </template>

                        <b-card-body>
                        <b-card-title>Productos Notables</b-card-title>
                        <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </b-card-text>
                        </b-card-body>

                        <b-list-group flush>
                        <b-list-group-item>Cras justo odio</b-list-group-item>
                        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                        <b-list-group-item>Vestibulum at eros</b-list-group-item>
                        </b-list-group>


                        <b-card-footer>This is a footer</b-card-footer>
                    </b-card>
                </div>
                <div id="sesion3">
                    <b-card
                        no-body
                        style="max-width: 20rem;"
                        img-src="https://image.freepik.com/vector-gratis/suministros-regreso-escuela-estilo-plano_24908-56959.jpg"
                        img-alt="Image"
                        img-top
                    >
                        <template #header>
                        <h4 class="mb-0">SESION 3</h4>
                        </template>

                        <b-card-body>
                        <b-card-title>Conjuntos</b-card-title>
                        <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </b-card-text>
                        </b-card-body>

                        <b-list-group flush>
                        <b-list-group-item>Cras justo odio</b-list-group-item>
                        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                        <b-list-group-item>Vestibulum at eros</b-list-group-item>
                        </b-list-group>


                        <b-card-footer>This is a footer</b-card-footer>
                    </b-card>
                </div>
            </b-tab>
            </b-tabs>
        </div>
        <footer>
    <h3>@Copyright Anthony.Alcahuasi</h3>
</footer>
    </div>
</template>

<style scoped>
.cabeza{
    margin-top: 40px;
}
.enviar{
    width: 20%;
    margin-left: 800px;
    margin-top: -30px;
}
.boton{
    margin-left: 200px;
    margin-top: -23px;
}
.menu{
    width: 70%;
    margin-left: 300px;
    margin-top: 60px;
}
h1{
    font-family: 'Bangers', cursive;
    margin-left: 200px;
    color: #c97515;
    font-size: 80px;
}
#sesion2{
    margin-left: 480px;
    margin-top: -720px;
}
#sesion3{
    margin-left: 970px;
    margin-top: -740px;
}
footer{
    height: 50px;
    color: rgb(0, 0, 0);
    background: rgb(255, 185, 56);
    text-align: center;
    margin-top: 40px;
}
footer >h3{
    font-size: 20px;
    margin-bottom: 20px;
}
</style>