import {createRouter, createWebHashHistory} from 'vue-router'


import EstudiantesPage from '../page/EstudiantesPage.vue'
import Estudiante from '../page/Estudiante.vue'
//import EstudianteEliminar from '../page/EstudianteEliminar.vue'
import EstudianteRegistro from '../page/EstudianteRegistro.vue'
import BienvenidoPage  from '../page/BienvenidoPage.vue'

const routes = [
    {
        path: '/estudiante/page',
        component: EstudiantesPage
    },
    {
        
        path: '/estudiante/registro/page',
        component: EstudianteRegistro
    },
    {
        
        path: '/estudiante/page',
        component: Estudiante
    },
    {
        
        path: '/estudiante/eliminar/page',
        component: EstudianteEliminar
    },
    //URL RAIZ
    {
        
        path:'/',
        component: BienvenidoPage
    },

]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router