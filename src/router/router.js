import {createRouter, createWebHashHistory} from 'vue-router'


import Estudiante from '../page/Estudiante.vue'
import EstudianteRegistro from '../page/EstudianteRegistro.vue'
import BienvenidoPag  from '../page/BienvenidoPage.vue'
import EstudianteEliminar from '@/page/EstudianteEliminar.vue'
import NotFoundPage from '../page/NotFoundPage.vue'

const routes = [
    {
        
        path: '/estudiante/registro/page',
        component: EstudianteRegistro
    },
    {
        
        path: '/estudiante/page/:cedula',
        component: Estudiante
    },
    {
        
        path: '/estudiante/borrar/page',
        component: EstudianteEliminar
    },
    //URL RAIZ
    {
        path:'/',
        component: BienvenidoPag
    },
    {
        path:'/:pathMatch(.*)*',
        component: NotFoundPage
    },


]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router