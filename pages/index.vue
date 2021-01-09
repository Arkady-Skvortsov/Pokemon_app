<template>
  <div class="pokemon-home-page" :class="{ changeBackground: theme }">
    <div>
      <Functional @ChangeTheme="ChangeTheme2" />
    </div>

    <div v-if="choiceP === false">
      <div
        class="pokemon-home-page__filter"
        :style="{
          border: theme === true ? '1px solid white' : '1px solid black',
          background: theme === true ? 'black' : 'white',
        }"
      >
        <div>
          <nuxt-link
            class="filter__txt"
            tag="span"
            to="/filters"
            :style="{ color: theme === true ? 'white' : 'black' }"
            >Фильтры</nuxt-link
          >
        </div>
      </div>
    </div>

    <div v-else>
      <div
        class="cancel-home-btn"
        :style="{
          border: theme === true ? '1px solid white' : '1px solid black',
        }"
        @click="CancelVersus"
      >
        <span
          class="cancel__txt"
          :style="{ color: theme === true ? 'white' : 'black' }"
          >отмена</span
        >
      </div>
    </div>

    <div class="pokemon-home-page__card">
      <Card
        v-for="(pokemon, index) of pokemons"
        :key="pokemon.id"
        :index="index"
        :CardInfo="pokemon"
        @GoToParams="GoToParams2"
        @ChooseYou="ChooseYou2"
      />
    </div>
  </div>
</template>

<script>
import Functional from '../components/Functional.vue'
import Card from '../components/Card.vue'

export default {
  data() {
    return {
      pokemons: [
        {
          id: 1, //#1,
          PokemonName: 'zapdos', //filters.js
          PokemonType: 'Electric/Flying',
          PokemonIcon: 'electric.png',
          PokemonBackground: 'zapdos.png',
          PokemonTypeBackground: 'electric.jpg',
          PokemonHeight: '1.6m',
          PokemonWeight: '52.6kg',
          PokemonInfo: {
            HP: '90', //parseFloat
            Attack: '90',
            SpecialAttack: '125',
            Defense: '85',
            SpecialDefense: '90',
            Speed: '100',
          },
          PokemonAbout:
            'Запдос - легендарный птичий покемон, который генерирует электричество. Говорят, что когда Запдос потирает свои перья, сразу же после этого упадет молния. Так же ходят легенды о том, что он гнездится в черных, как смоль - грозовых облаках',
        },
        {
          id: 2, //#1,
          PokemonName: 'pikachu', //filters.js
          PokemonType: 'Electric',
          PokemonIcon: 'electric.png',
          PokemonBackground: 'pikachu.png',
          PokemonTypeBackground: 'electric.jpg',
          PokemonHeight: '0.4m',
          PokemonWeight: '6.0kg',
          PokemonInfo: {
            HP: '35', //parseFloat
            Attack: '55',
            SpecialAttack: '50',
            Defense: '40',
            SpecialDefense: '50',
            Speed: '90',
          },
          PokemonAbout:
            'Пикачу, который может генерировать мощное электричество, имеет щёчные мешочки, очень мягкие и эластичные. Когда Пикачу встречается, они касаются друг друга хвостами и обмениваются через них электричеством в качестве приветствия.',
        },
        {
          id: 3, //#1,
          PokemonName: 'meowth', //filters.js
          PokemonType: 'Normal',
          PokemonIcon: 'normal.png',
          PokemonBackground: 'meowth.png',
          PokemonTypeBackground: 'normal.jpg',
          PokemonHeight: '0.4m',
          PokemonWeight: '4.2kg',
          PokemonInfo: {
            HP: '40', //parseFloat
            Attack: '45',
            SpecialAttack: '40',
            Defense: '35',
            SpecialDefense: '40',
            Speed: '90',
          },
          PokemonAbout:
            'Любит собирать блестящие вещи. Если он в хорошем настроении, он может даже позволить своему тренеру взглянуть на свои сокровища. Он регулярно моет лицо, чтобы монета на лбу оставалась безупречной. Он не ладит с галарским мяутом.',
        },
        {
          id: 4, //#1,
          PokemonName: 'articuno', //filters.js
          PokemonType: 'Ice/Flying',
          PokemonIcon: 'flying.png',
          PokemonBackground: 'articuno.png',
          PokemonTypeBackground: 'fairy.jpg',
          PokemonHeight: '1.6m',
          PokemonWeight: '52.6kg',
          PokemonInfo: {
            HP: '90', //parseFloat
            Attack: '85',
            SpecialAttack: '95',
            Defense: '100',
            SpecialDefense: '125',
            Speed: '95',
          },
          PokemonAbout:
            'Говорят, что красивые синие крылья этого покемона сделаны из льда. Артикуно летит над заснеженными горами, его длинный хвост развевается за ним. Этот покемон может управлять льдом по своему желанию. Говорят, что Артикуно живет в заснеженных горах, покрытых вечной мерзлотой.',
        },
      ],
    }
  },

  computed: {
    theme() {
      return this.$store.getters['theme/CHANGETHEME']
    },

    choiceP() {
      return this.$store.getters['pokemon/CHOICEPOKEMON']
    },
  },

  methods: {
    ChangeTheme2(data) {
      if (data === 'wb_sunny') {
        this.$store.dispatch('theme/ICON', 'brightness_2')

        this.$store.dispatch('theme/CHANGE', true)
      } else {
        this.$store.dispatch('theme/ICON', 'wb_sunny')

        this.$store.dispatch('theme/CHANGE', false)
      }
    },

    GoToParams2(data) {
      this.$router.push({ path: '/pokemon/', query: { id: data } })
    },

    CancelVersus() {
      this.$store.dispatch('pokemon/CHANGESTATE', false) //Falsy

      // setTimeout(() => {
      //   this.$router.go(-2)
      // }, 500)
    },

    ChooseYou2(payload) {
      console.log(payload)
    },
  },

  mounted() {
    console.log(this.choiceP)
  },

  components: {
    Functional,
    Card,
  },
}
</script>

<style lang="scss">
@media only screen and (min-device-width: 320px) {
  .pokemon-home-page {
    height: 100vh;
    width: 100vw;
    background: $w;
    overflow-x: hidden;

    .pokemon-home-page__filter {
      @include FilAndCanButton(30px, 125px, $w, 'none');

      // .filter__txt {
      //   font-size: 25px;
      //   font-family: $OpenSans;
      //   position: relative;
      //   left: 20px;
      //   bottom: 5px;
      // }
    }

    .cancel-home-btn {
      @include FilAndCanButton(45px, 150px, $r, 'toUpperCase');
    }
  }
}
</style>
