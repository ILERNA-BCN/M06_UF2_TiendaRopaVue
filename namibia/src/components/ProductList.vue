<template>
  <div class="product-list">
    <!-- Buscador -->
    <form @submit.prevent class="search-container">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Busca un producto..."
        class="search-bar"
      />
      <button type="button" class="search-btn" aria-label="Buscar">🔍</button>
    </form>

    <!-- Mensajes de error o resultados -->
    <p v-if="filteredProducts.length === 0" class="no-results">
      No se han encontrado productos.
    </p>

    <!-- Lista de productos filtrados -->
    <div v-if="filteredProducts.length > 0" class="products">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        :image="product.image"
        @agregar-al-carrito="$emit('agregar-al-carrito', product)"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductList",
  components: {
    ProductCard,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      searchQuery: "", // Estado del buscador
    };
  },
  computed: {
    filteredProducts() {
      const query = this.searchQuery.trim().toLowerCase();
      if (!query) return this.products;

      return this.products.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    },
  },
};
</script>

<style scoped>
/* Estilos del componente */
</style>

<style scoped>
.product-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

/* Buscador */
.search-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.search-bar {
  padding: 10px;
  font-size: 1rem;
  width: 250px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: 0.3s;
}

.search-bar:focus {
  border-color: #007bff;
  outline: none;
}

.search-btn {
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 5px;
  border-radius: 5px;
  transition: 0.3s;
}

.search-btn:hover {
  background-color: #0056b3;
}

/* Mensajes */
.no-results {
  color: red;
  font-size: 1.1rem;
  text-align: center;
}

/* Productos */
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1000px;
}
</style>
