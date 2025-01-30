import { createRouter, createWebHistory } from 'vue-router';

// Carga perezosa de los componentes para mejorar rendimiento
const HomeView = () => import('@/components/HomeView.vue');
const RopaComponent = () => import('@/components/PRopa.vue');
const CalzadoComponent = () => import('@/components/PCalzado.vue');
const ComplementosComponent = () => import('@/components/PComplementos.vue');

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/ropa', name: 'Ropa', component: RopaComponent },
  { path: '/calzado', name: 'Calzado', component: CalzadoComponent },
  { path: '/complementos', name: 'Complementos', component: ComplementosComponent },
  { path: '/moda', redirect: '/ropa' }, // Redirección opcional
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
