<template>
  <div class="cart-page">
    <h1 class="title">Cesta de la compra</h1>

    <!-- Mostrem un missatge si la cistella està buida -->
    <p v-if="cart.length === 0" class="empty-cart">La cesta está vacía.</p>

    <div v-else>
      <table class="cart-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cart" :key="index">
            <td>{{ item.name }}</td>
            <td>
              <input 
                type="number" 
                v-model.number="item.quantity" 
                min="1" 
                @change="updateCart"
              />
            </td>
            <td>{{ item.price }} €</td>
            <td>{{ (item.price * item.quantity).toFixed(2) }} €</td>
            <td><button @click="removeFromCart(index)">❌</button></td>
          </tr>
        </tbody>
      </table>

      <div class="cart-summary">
        <p><strong>Subtotal:</strong> {{ totalCartPrice }} €</p>
        <p><strong>IVA (21%):</strong> {{ ivaPrice}} €</p>
        <p class="total"><strong>Total a pagar:</strong> {{ finalTotal}} €</p>

        <!-- Botons de compra -->
        <button class="buy-btn" @click="checkout">Comprar</button>
        <button class="continue-btn" @click="continueShopping">Continuar comprando</button>
      </div>
    </div>

    <!-- Missatge de compra confirmada -->
    <p v-if="purchaseSuccess" class="success-message">
      ✅ Compra realizada con éxito! Grácias por tu compra.
    </p>
  </div>
</template>

<script>
export default {
  name: 'PCartPage',
  props: {
    cart: Array, // Rep la cistella des de `App.vue`
  },
  computed: {
    totalCartPrice() {
      if (!this.cart || this.cart.length === 0) return 0;
      return this.cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0).toFixed(2);
    },
    ivaPrice() {
      return (this.totalCartPrice * 0.21).toFixed(2);
    },
    finalTotal() {
      return (parseFloat(this.totalCartPrice) + parseFloat(this.ivaPrice)).toFixed(2);
    },
  },
  data() {
    return {
      purchaseSuccess: false,
    };
  },
  methods: {
    /*
      Elimina un producte de la cistella.
     */
    removeFromCart(index) {
      this.$emit('remove-from-cart', index);
    },

    /*
      Guarda els canvis quan es modifica la quantitat d'un producte.
     */
    updateCart() {
      this.$emit('update-cart', this.cart); // Enviem l'event perquè `App.vue` actualitzi `cart`
      localStorage.setItem('cart', JSON.stringify(this.cart)); // 🔹 Guardem al localStorage
    },

    /*
      Simula la finalització de la compra.
     */
    checkout() {
      alert('✅ Compra realizada con éxito!');
      this.$emit('clear-cart'); // Buidem la cistella després de comprar
    },

    continueShopping() {
      this.$router.push('/'); // Torna a la pàgina d'inici
    },
  },
  /*
  created() {
    console.log("Cart a PCartPage.vue:", this.cart);
  }
    */
};
</script>

<style scoped>
.cart-page {
  padding: 20px;
  text-align: center;
}

.empty-cart {
  font-size: 1.2rem;
  color: red;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.cart-table th, .cart-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

.cart-summary {
  margin-top: 20px;
  font-size: 1.2rem;
}

.buy-btn {
  background-color: green;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}

.buy-btn:hover {
  background-color: darkgreen;
}

.continue-btn {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.continue-btn:hover {
  background-color: #0056b3;
}

.total {
  font-weight: bold;
  font-size: 1.3rem;
}

.success-message {
  color: green;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
}
</style>
