<template>
  <div class="ropa">
    <h1 class="title">Colección de Ropa</h1>

    <!-- Mensajes de Error / Resultados -->
    <p v-if="searchError" class="error-message">{{ searchError }}</p>
    <p v-if="!searchError && filteredProducts.length === 0" class="no-results">
      No se han encontrado productos.
    </p>

    <!-- Lista de Productos -->
    <ProductList
      v-if="filteredProducts.length > 0"
      :products="filteredProducts"
      @agregar-al-carrito="agregarAlCarrito"
    />
  </div>
</template>

<script>
import ProductList from "./ProductList.vue";
import ropa1 from "@/assets/ropa1.jpg";
import ropa2 from "@/assets/ropa2.jpg";
import ropa3 from "@/assets/ropa3.jpg";
import ropa4 from "@/assets/ropa4.jpg";

export default {
  name: "PRopa",
  components: { ProductList },
  data() {
    return {
      searchQuery: "",
      searchError: "",
      products: [
        { id: 1, name: "Vestido elegante", description: "Vestido perfecto para ocasiones especiales.", price: 49.99, image: ropa1 },
        { id: 2, name: "Jersey cómodo", description: "Ideal para los días fríos de invierno.", price: 29.99, image: ropa2 },
        { id: 3, name: "Pantalones casuales", description: "Perfecto para una jornada informal.", price: 39.99, image: ropa3 },
        { id: 4, name: "Chaqueta estilo vintage", description: "Un clásico para cualquier temporada.", price: 59.99, image: ropa4 },
      ],
    };
  },
  computed: {
    filteredProducts() {
      if (!this.searchQuery) return this.products;
      const query = this.searchQuery.toLowerCase();
      return this.products.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    },
  },
  methods: {
    clearError() {
      this.searchError = this.searchQuery ? "" : "El campo de búsqueda no puede estar vacío.";
    },
    agregarAlCarrito(producto) {
      // Llamar a la acción de Vuex para añadir el producto al carrito
      this.$store.dispatch("agregarAlCarrito", producto);
    },
  },
};
</script>

<style scoped>
.ropa {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
}

/* Buscador */
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.search-bar {
  padding: 10px;
  font-size: 1rem;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ddd;
  border-radius: 5px 0 0 5px;
  transition: 0.3s;
}

.search-bar:focus {
  border-color: #007bff;
  outline: none;
}

.search-btn {
  padding: 10px 15px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
  transition: 0.3s;
}

.search-btn:hover {
  background-color: #0056b3;
}

/* Mensajes */
.error-message,
.no-results {
  text-align: center;
  font-size: 1.1rem;
  color: #d9534f;
  margin-top: 10px;
}
</style>