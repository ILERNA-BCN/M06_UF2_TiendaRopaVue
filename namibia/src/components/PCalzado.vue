<template>
  <div>
    <h1>{{ $t('footwear') }}</h1>
    <ProductList :products="calzadoProducts" @agregar-al-carrito="agregarAlCarrito" />
  </div>
</template>

<script>
import ProductList from './ProductList.vue';
import calzado1 from '@/assets/calzado1.jpg';
import calzado2 from '@/assets/calzado2.jpg';
import calzado3 from '@/assets/calzado3.jpg';

export default {
  name: 'CalzadoComponent',
  components: {
    ProductList,
  },
  data() {
    return {
      calzadoProducts: [
        {
          id: 1,
          name: 'Zapatillas Running',
          description: 'Zapatillas cómodas para correr',
          price: 79.99,
          image: calzado1,
        },
        {
          id: 2,
          name: 'Botas',
          description: 'Botas resistentes',
          price: 89.99,
          image: calzado2,
        },
        {
          id: 3,
          name: 'Zapatos Casuales',
          description: 'Zapatos ideales para el día a día',
          price: 59.99,
          image: calzado3,
        },
      ],
    };
  },
  methods: {
    agregarAlCarrito(producto) {
      this.$store.dispatch('agregarAlCarrito', producto);
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>