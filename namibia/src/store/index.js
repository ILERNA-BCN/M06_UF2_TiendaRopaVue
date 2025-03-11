import { createStore } from 'vuex';

export default createStore({
  state: {
    carrito: [],
  },
  mutations: {
    agregarAlCarrito(state, producto) {
      const productoExistente = state.carrito.find((p) => p.id === producto.id);
      if (productoExistente) {
        productoExistente.cantidad++; 
      } else {
        state.carrito.push({ ...producto, cantidad: 1 }); 
      }
    },
    eliminarDelCarrito(state, id) {
      state.carrito = state.carrito.filter((p) => p.id !== id);
    },
    actualizarCantidad(state, { id, cantidad }) {
      const producto = state.carrito.find((p) => p.id === id);
      if (producto) {
        producto.cantidad = cantidad;
      }
    },
  },
  actions: {
    agregarAlCarrito({ commit }, producto) {
      commit('agregarAlCarrito', producto);
    },
    eliminarDelCarrito({ commit }, id) {
      commit('eliminarDelCarrito', id);
    },
    actualizarCantidad({ commit }, payload) {
      commit('actualizarCantidad', payload);
    },
  },
  getters: {
    cantidadTotalEnCarrito(state) {
      return state.carrito.reduce((total, producto) => total + producto.cantidad, 0);
    },
    precioTotalCarrito(state) {
      return state.carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
    },
  },
});