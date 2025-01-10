import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/HomeView.vue';
import RopaComponent from '../components/RopaComp.vue';
import CalzadoComponent from '../components/CalzadoComp.vue';
import ComplementosComponent from '../components/ComplementosComp.vue';


const routes = [
  { path: '/', component: HomeView },
  { path: '/ropa', component: RopaComponent },
  { path: '/calzado', component: CalzadoComponent },
  { path: '/complementos', component: ComplementosComponent },
];

// Llamada a crear router, con dos parametros
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;