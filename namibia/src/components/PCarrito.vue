<template>
  <div class="carrito">
    <h2>Carrito de Compras</h2>
    <div v-if="carrito.length === 0">
      <p>El carrito está vacío.</p>
    </div>
    <div v-else>
      <!-- Lista de productos en el carrito -->
      <div v-for="producto in carrito" :key="producto.id" class="producto-carrito">
        <img :src="producto.image" :alt="producto.name" class="imagen-producto" />
        <div class="info-producto">
          <h3>{{ producto.name }}</h3>
          <p>Precio: {{ producto.price.toFixed(2) }}€</p>
          <div class="cantidad">
            <label for="cantidad">Cantidad:</label>
            <input
              type="number"
              v-model.number="producto.cantidad"
              min="1"
              @change="actualizarCantidad(producto)"
            />
          </div>
        </div>
        <button @click="eliminarDelCarrito(producto.id)" class="btn-eliminar">
          Eliminar
        </button>
      </div>

      <!-- Total del carrito -->
      <div class="total">
        <h3>Total: {{ totalCarrito.toFixed(2) }}€</h3>
      </div>

      <!-- Botón para finalizar la compra -->
      <button @click="finalizarCompra" class="btn-finalizar">Finalizar Compra</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PCarrito",
  computed: {
    // Obtener los productos del carrito desde Vuex
    carrito() {
      return this.$store.state.carrito;
    },
    // Calcular el total del carrito
    totalCarrito() {
      return this.carrito.reduce((total, producto) => {
        return total + producto.price * producto.cantidad;
      }, 0);
    },
  },
  methods: {
    // Eliminar un producto del carrito
    eliminarDelCarrito(id) {
      this.$store.dispatch("eliminarDelCarrito", id);
    },
    // Actualizar la cantidad de un producto en el carrito
    actualizarCantidad(producto) {
      this.$store.dispatch("actualizarCantidad", {
        id: producto.id,
        cantidad: producto.cantidad,
      });
    },
    // Finalizar la compra (puedes añadir lógica adicional aquí)
    finalizarCompra() {
      alert("Compra finalizada. Gracias por su compra.");
      this.$store.commit("vaciarCarrito"); // Vaciar el carrito después de finalizar la compra
    },
  },
};
</script>

<style scoped>
.carrito {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.producto-carrito {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.imagen-producto {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
}

.info-producto {
  flex: 1;
}

.info-producto h3 {
  margin: 0 0 10px 0;
  font-size: 1.2rem;
  color: #333;
}

.info-producto p {
  margin: 0 0 10px 0;
  font-size: 1rem;
  color: #666;
}

.cantidad {
  display: flex;
  align-items: center;
  gap: 10px;
}

.cantidad label {
  font-size: 0.9rem;
  color: #333;
}

.cantidad input {
  width: 60px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
}

.btn-eliminar {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;
}

.btn-eliminar:hover {
  background-color: #cc0000;
}

.total {
  text-align: right;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #ddd;
}

.total h3 {
  font-size: 1.5rem;
  color: #333;
}

.btn-finalizar {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;
  width: 100%;
  transition: background-color 0.2s;
}

.btn-finalizar:hover {
  background-color: #218838;
}
</style>