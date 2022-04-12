new Vue({
  el: "#app",
  data: {
    statusPlayer: 100,
    statusMonster: 100,
    attacks: [],
    isFinish: false,
  },
  methods: {
    attack(typeAttack) {
      const diffAttack = Math.floor(Math.random() * (8 - 0 + 1));

      const attackMonster = Math.floor(Math.random() * (15 - 0 + 1));

      const attackPlayer = Math.floor(Math.random() * (15 - 0 + 1));

      const newLifePlayer =
        typeAttack == "default"
          ? this.statusPlayer - (attackMonster + diffAttack)
          : this.statusPlayer - attackMonster;

      const newLifeMonster =
        typeAttack == "special"
          ? this.statusMonster - (attackPlayer + diffAttack)
          : this.statusMonster - attackPlayer;

      if (newLifePlayer <= 0) {
        this.statusPlayer = 0;
        this.isFinish = true;
      } else if (newLifeMonster <= 0) {
        this.statusMonster = 0;
        this.isFinish = true;
      } else {
        const player = {
          mensagem: `Jogador atingiu Monstro com ${attackPlayer}.`,
          cor: "#6c5ce7",
        };
        const monster = {
          mensagem: `Monstro atingiu Jogador com ${attackMonster}.`,
          cor: "#ff7675",
        };

        this.attacks.push(player);
        this.attacks.push(monster);

        this.statusPlayer = newLifePlayer;
        this.statusMonster = newLifeMonster;
      }
    },
    lose() {
      this.attacks = [];
      this.isFinish = true;
    },
    restart() {
      this.statusPlayer = 100;
      this.statusMonster = 100;
      this.attacks = [];
      this.isFinish = false;
    },
    heal() {
      const healValue = Math.floor(Math.random() * (15 - 0 + 1));

      const attackMonster = Math.floor(Math.random() * (15 - 0 + 1));

      const newLifePlayer = this.statusPlayer - attackMonster + healValue;

      const player = {
        mensagem: `Jogador Ganhou força de ${healValue}.`,
        cor: "#6c5ce7",
      };
      const monster = {
        mensagem: `Monstro atingiu Jogador com ${attackMonster}.`,
        cor: "#ff7675",
      };

      this.attacks.push(player);
      this.attacks.push(monster);

      this.statusPlayer = newLifePlayer;
    },
  },
});
