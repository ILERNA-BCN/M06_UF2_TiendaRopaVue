<template>
  <div class="home">
    <section class="intro">
      <h1>{{ $t('home.welcome') }}</h1>
      <p>{{ $t('home.welcome_message') }}</p>
    </section>
    <section class="categories">
      <div class="category col-md-4">
        <router-link to="/ropa">
          <img src="@/assets/ropa.png" alt="Ropa" class="img-fluid"/>
          <h2>{{ $t('clothes') }}</h2>
        </router-link>
      </div>
      <div class="category">
        <router-link to="/calzado">
          <img src="@/assets/calzado.png" alt="Calzado" class="img-fluid"/>
          <h2>{{ $t('footwear') }}</h2>
        </router-link>
      </div>
      <div class="category">
        <router-link to="/complementos">
          <img src="@/assets/complementos.png" alt="Complementos" class="img-fluid"/>
          <h2>{{ $t('accessories') }}</h2>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "PHome",
};
</script>

<style scoped>
/* Estilos del componente */
</style>

<style scoped>
.home {
  text-align: center;
  padding: 40px 20px;
  background-color: #f9f9f9;
}

.intro h1 {
  font-size: 3rem;
  color: #333;
  margin-bottom: 10px;
}

.intro p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
}

.categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.category {
  text-align: center;
  width: 250px;
}

.category img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.category img:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.category h2 {
  margin-top: 15px;
  color: #007bff;
  font-size: 1.2rem;
  transition: color 0.3s;
}

.category h2:hover {
  color: #0056b3;
}

/* Media Queries Diseño Responsive */
@media (max-width: 768px) {
  .categories {
    flex-direction: column;
    align-items: center;
  }
  .category {
    width: 80%;
  }
}
</style>