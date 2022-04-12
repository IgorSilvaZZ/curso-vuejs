new Vue({
  el: "#desafio",
  data: {
    valor: "",
  },
  methods: {
    exibirAlerta() {
      alert("Alerta Exibido!");
    },
    atualizarValor(event) {
      this.valor = event.target.value;
    },
  },
});
