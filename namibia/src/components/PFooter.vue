<template>
  <footer class="py-4">
    <div class="container text-center">
      <!-- Navegación -->
      <nav>
        <ul class="nav justify-content-center mb-3">
          <li class="nav-item">
            <router-link to="/HomeView.vue" class="nav-link">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/RopaComp.vue" class="nav-link">Ropa</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/CalzadoComp.vue" class="nav-link">Calzado</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/complementosComp.vue" class="nav-link">Complementos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ContactoComp.vue" class="nav-link">Contacto</router-link>
          </li>
        </ul>
      </nav>

      <!-- Redes Sociales -->
      <div class="social-icons mb-3">
        <a href="https://www.facebook.com" target="_blank" class="me-3 text-black">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" class="me-3 text-black">
          <i class="bi bi-twitter"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" class="me-3 text-black">
          <i class="bi bi-instagram"></i>
        </a>
      </div>

      <!-- Derechos Reservados -->
      <div>
        <p class="mb-0">© 2025 Tu Tienda. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "PFooter",
};
</script>

<style scoped>
.nav-link {
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #17a2b8;
}

.social-icons a {
  font-size: 1.5rem;
  margin: 0 0.5rem;
  transition: color 0.2s;
}

.social-icons a:hover {
  color: #17a2b8;
}
</style>
