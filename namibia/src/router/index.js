import { createRouter, createWebHistory } from 'vue-router';

const HomeView = () => import('@/components/HomeView.vue');
const RopaComponent = () => import('@/components/PRopa.vue');
const CalzadoComponent = () => import('@/components/PCalzado.vue');
const ComplementosComponent = () => import('@/components/PComplementos.vue');
const CarritoComponent = () => import('@/components/PCarrito.vue')

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/ropa', name: 'Ropa', component: RopaComponent },
  { path: '/calzado', name: 'Calzado', component: CalzadoComponent },
  { path: '/complementos', name: 'Complementos', component: ComplementosComponent },
  { path: '/carrito', name: 'Carrito', component: CarritoComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;