new Vue({
  el: "#desafio",
  data: {
    nome: "Igor Silva",
    idade: 20,
    imageSrc:
      "https://tribunapr.uol.com.br/wp-content/uploads/sites/1/2017/06/paramore.jpg",
  },
  methods: {
    getAgeRandom() {
      return Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    },
  },
});
