import { createRouter, createWebHashHistory } from 'vue-router'


import EstudianteActualizarBuscar from '../page/EstudianteActualizarBuscar.vue'
import EstudianteEliminar from '../page/EstudianteEliminar.vue'
import EstudianteRegistro from '../page/EstudianteRegistro.vue'
import BienvenidoPag from '../page/BienvenidoPage.vue'
import NotFound from '../page/NotFound.vue'


const routes = [
 
    {

        path: '/estudiante/registro/page',
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
    }

]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router