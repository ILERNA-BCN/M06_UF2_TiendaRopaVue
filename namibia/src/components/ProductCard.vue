<template>
  <div class="product-card">
    <img :src="image" :alt="name" class="product-image" />
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
    <p class="price">{{ priceFormateado }}</p>
    <button @click="agregarAlCarrito" class="btn-add-to-cart">Añadir al carrito</button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  computed: {
    priceFormateado() {
      return typeof this.price === "number" ? this.price.toFixed(2) + "€" : "0.00€";
    },
  },
  methods: {
    agregarAlCarrito() {
      this.$emit("agregar-al-carrito", {
        id: this.id,
        name: this.name,
        description: this.description,
        price: this.price,
        image: this.image,
      });
    },
  },
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  background-color: white;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover; 
  border-radius: 10px;
  margin-bottom: 15px;
}

h3 {
  font-size: 1.25rem;
  margin: 10px 0;
  color: #333;
}

p {
  font-size: 0.9rem;
  color: #666;
  margin: 5px 0;
}

.price {
  font-weight: bold;
  color: #007bff;
  font-size: 1.2rem;
  margin: 10px 0;
}

.btn-add-to-cart {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s ease-in-out;
}

.btn-add-to-cart:hover {
  background-color: #218838;
}
</style>