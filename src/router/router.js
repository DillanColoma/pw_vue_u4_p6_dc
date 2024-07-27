import { createRouter, createWebHashHistory } from 'vue-router'


import EstudianteActualizarBuscar from '../page/EstudianteActualizarBuscar.vue'
import EstudianteEliminar from '../page/EstudianteEliminar.vue'
import EstudianteRegistro from '../page/EstudianteRegistro.vue'
import BienvenidoPag from '../page/BienvenidoPage.vue'
import NotFound from '../page/NotFound.vue'
import Bloqueado from '@/page/Bloqueado.vue'


const routes = [
 
    {

        path: '/estudiante/registro/page/:id',
        name:'prueba',
        component: EstudianteRegistro
    },
    {

        path: '/estudiante/actualizar/page/:cedula',
        component: EstudianteActualizarBuscar
    },
    {

        path: '/estudiante/eliminar/page',
        component: EstudianteEliminar
    },
    //URL RAIZ
    {
        path: '/',
        component: BienvenidoPag
    },
    {
        path:'/:pathMatch(.*)*',
      
        component: NotFound
    },
    {
        path:'/acceso',
        name:'bloq',
        component: Bloqueado
    }

]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

//PROGRAMAR GUARDIANES
router.beforeEach((to, from,next)=>{
   //validacion en la que
   console.log('Guardianes');
   console.log(to);
   console.log(from);
   console.log(next);
   let usuario = 'edison';
   let resultado= false;

   const random= Math.random()*100;
   
   if(random>50){
    console.log('Si tiene acceso a esa página');
    next();
   }else{
    console.log('Acceso Denegado');
    next({name: 'bloq'});
   }


})


export default router