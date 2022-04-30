import Vue from "vue";

export default new Vue({
  methods: {
    setUsuarioSelectionado(usuario) {
      this.$emit("usuarioSelectionado", usuario);
    },
    onUsuarioSelecionado(callback) {
      this.$on("usuarioSelectionado", callback);
    },
  },
});
