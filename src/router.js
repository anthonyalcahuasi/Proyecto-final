import Vue from 'vue';
import Router from 'vue-router';
import Person from './components/Person.vue';
import Ping from './components/Ping.vue';
import HelloWorld from './components/HelloWorld.vue'
import PersonForm from './components/PersonForm.vue';
import Login from './components/Login.vue';
import Logout from './components/Logout.vue';
import DocenteHome from './components/DocenteHome.vue';
import AlumnoHome from './components/AlumnoHome.vue';
import Rol from './components/Rol.vue';
import RolForm from './components/RolForm.vue';
import Sesion from './components/Sesion.vue';
import SesionForm from './components/SesionForm.vue';
import Trabajo from './components/Trabajo.vue';
import TrabajoForm from './components/TrabajoForm.vue';
import Recurso from './components/Recurso.vue';
import RecursoForm from './components/RecursoForm.vue';
import Alumno from './components/Alumno.vue';
import AlumnoForm from './components/AlumnoForm.vue';
import Docente from './components/Docente.vue';
import DocenteForm from './components/DocenteForm.vue';
import SesionHome from './components/SesionHome.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'LoginForm',
      component: Login
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },

    {
      path: '/docentehome',
      name: 'DocenteHome',
      component: DocenteHome
    },
    {
      path: '/alumnohome',
      name: 'AlumnoHome',
      component: AlumnoHome
    },
    {
      path: '/sesionhome',
      name: 'SesionHome',
      component: SesionHome
    },
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    },
    {
      path: '/persons',
      name: 'Person',
      component: Person,
    },
    {
      path: '/persons/form',
      name: 'PersonForm',
      component: PersonForm,

    },
    {
      path: '/persons/form/:id',
      name: 'PersonForme',
      component: PersonForm
    },
    {
      path: '/rol',
      name: 'Rol',
      component: Rol,
    },
    {
      path: '/rol/form',
      name: 'RolForm',
      component: RolForm,

    },
    {
      path: '/rol/form/:id',
      name: 'RolForme',
      component: RolForm
    },
    {
      path: '/sesiones',
      name: 'Sesion',
      component: Sesion,
    },
    {
      path: '/sesiones/form',
      name: 'SesionForm',
      component: SesionForm,

    },
    {
      path: '/sesiones/form/:id',
      name: 'SesionForme',
      component: SesionForm
    },
    {
      path: '/trabajo',
      name: 'Trabajo',
      component: Trabajo,
    },
    {
      path: '/trabajo/form',
      name: 'TrabajoForm',
      component: TrabajoForm,

    },
    {
      path: '/trabajo/form/:id',
      name: 'TrabajoForme',
      component: TrabajoForm
    },
    {
      path: '/recurso',
      name: 'Recurso',
      component: Recurso,
    },
    {
      path: '/recurso/form',
      name: 'RecursoForm',
      component: RecursoForm,

    },
    {
      path: '/recurso/form/:id',
      name: 'RecursoForme',
      component: RecursoForm
    },
    {
      path: '/alumnos',
      name: 'Alumno',
      component: Alumno,
    },
    {
      path: '/alumnos/form',
      name: 'AlumnoForm',
      component: AlumnoForm,

    },
    {
      path: '/alumnos/form/:id',
      name: 'AlumnoForme',
      component: AlumnoForm
    },
    {
      path: '/docentes',
      name: 'Docente',
      component: Docente,
    },
    {
      path: '/docentes/form',
      name: 'DocenteForm',
      component: DocenteForm,

    },
    {
      path: '/docentes/form/:id',
      name: 'DocenteForme',
      component: DocenteForm
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },

  ],
});

let whiteRoutes = [
  "LoginForm",
  "HelloWorld",
  "DocenteHome",
  "AlumnoHome"
]

router.beforeEach((to, from, next) => {
  console.log(`${from.path} to ${to.path}`);
  let isAuthenticated = false;
  if (localStorage.getItem('user') != null) {
    isAuthenticated = true;
  }
  // if (to.name !== 'LoginForm' && to.name !== 'HelloWorld' && to.name !== 'Ping' && !isAuthenticated) {
  if (!whiteRoutes.includes(to.name) && !isAuthenticated) {
    next({ name: 'LoginForm' });
  } else {
    next();
  }
});
//https://www.digitalocean.com/community/tutorials/vuejs-advanced-vue-routing
export default router
