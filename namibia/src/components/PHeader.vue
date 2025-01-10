<template>
  <header class="py-3">
    <div class="container d-flex justify-content-between align-items-center">
      <!-- Logo -->
      <div class="logo">
        <img src="../assets/logo.jpg" alt="Logo" class="logo-img" />
      </div>
      <!-- Navegación -->
      <nav>
        <ul class="nav">
          <li class="nav-item">
            <router-link to="/HomeView.vue" class="nav-link ">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/RopaComp.vue" class="nav-link ">Ropa</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/CalzadoComp.vue" class="nav-link ">Calzado</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ComplementosComp.vue" class="nav-link ">Complementos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ContactoComp.vue" class="nav-link ">Contacto</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "PHeader",
};
</script>

<style scoped>
.logo-img {
  height: 50px;
  width: auto;
}

.nav-link {
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #17a2b8;
}
</style>
