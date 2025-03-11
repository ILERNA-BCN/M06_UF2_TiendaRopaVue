<template>
  <header class="header">
    <div class="container">
      <!-- Logo -->
      <div class="logo">
        <img src="../assets/logo.jpg" alt="Logo" class="logo-img" />
      </div>

      <!-- Menú de navegación -->
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link to="/" class="nav-link">{{ $t("home") }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ropa" class="nav-link">{{ $t("clothes") }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/calzado" class="nav-link">{{ $t("footwear") }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/complementos" class="nav-link">{{ $t("accessories") }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contacto" class="nav-link">{{ $t("contact") }}</router-link>
          </li>
        </ul>
      </nav>

      <!-- Selector de idiomas y carrito -->
      <div class="actions">
        <!-- Selector de idiomas -->
        <select v-model="$i18n.locale" @change="changeLanguage" class="language-selector">
          <option value="ca">Català</option>
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>

        <!-- Icono del carrito -->
        <div class="carrito-icono" @click="verCarrito">
          <i class="bi bi-cart"></i>
          <span class="contador-carrito">{{ cantidadEnCarrito }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "PHeader",
  computed: {
    cantidadEnCarrito() {
      return this.$store.state.carrito.reduce((total, producto) => total + producto.cantidad, 0);
    },
  },
  methods: {
    verCarrito() {
      this.$router.push('/carrito');
    },
    changeLanguage() {
      localStorage.setItem('lang', this.$i18n.locale);
    },
  },
};
</script>

<style scoped>
.header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo-img {
  height: 50px;
  width: auto;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0 15px;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #17a2b8;
}

.actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.language-selector {
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #f9f9f9;
  transition: border-color 0.2s;
}

.language-selector:hover {
  border-color: #17a2b8;
}

.carrito-icono {
  position: relative;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;
  transition: color 0.2s;
}

.carrito-icono:hover {
  color: #17a2b8;
}

.contador-carrito {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
}

/* Estilos responsive */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav {
    margin-top: 10px;
  }

  .nav-list {
    flex-direction: column;
    gap: 10px;
  }

  .actions {
    margin-top: 10px;
  }
}
</style>