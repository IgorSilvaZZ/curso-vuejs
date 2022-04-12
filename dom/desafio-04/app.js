new Vue({
  el: "#desafio",
  data: {
    classe1: "destaque",
    classe2: "associe1",
    classe3: "associe2",
    classe4: "",
    classe5: "",
    perigo: true,
    cor5: "",
    estilo5: {
      width: "100px",
      heigth: "100px",
    },
    width: "0",
  },
  methods: {
    iniciarEfeito() {
      setInterval(() => {
        this.classe1 = this.classe1 == "destaque" ? "encolher" : "destaque";
      }, 1000);
    },
    iniciarProgresso() {
      let valor = 0;
      const temporizador = setInterval(() => {
        valor += 5;
        this.width = `${valor}%`;
        console.log(this.width);

        if (valor == 100) {
          clearInterval(temporizador);
        }
      }, 500);
    },
    setPerigo(event) {
      if (event.target.value == "true") {
        this.perigo = true;
      } else {
        this.perigo = false;
      }
    },
  },
});
