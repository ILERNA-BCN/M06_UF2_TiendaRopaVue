<template>
  <div class="product-card">
    <img :src="image" :alt="name" class="product-image" />
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
    <p class="price">{{ price.toFixed(2) }}€</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    price: Number,
    image: String,
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
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image {
  width: 100%; /* Ajusta el tamaño de la imagen */
  height: 450px; /* Altura fija */
  object-fit: cover; /* Mantiene la proporción sin deformarse */
  border-radius: 10px;
}

.price {
  font-weight: bold;
  color: #007bff;
  font-size: 1.2rem;
}
</style>
