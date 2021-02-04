<template>
  <div
    class="pokemon-page-block"
    :style="{
      background:
        pokTheme === false
          ? `linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.833333) 0.01%, rgba(255, 255, 255, 0.829076) 0.02%, rgba(255, 255, 255, 0.786052) 0.03%, rgba(255, 255, 255, 0) 100%), url(${backgroundType})`
          : `linear-gradient(180deg, #000000 0%, rgba(12, 12, 12, 0.953125) 0.01%, rgba(255, 255, 255, 0) 100%), url(${backgroundType})`,
      'background-position': 'center',
      'background-size': 'cover',
    }"
  >
    <div class="pokemon-navbar-block">
      <button
        class="block-back"
        :style="{ background: pokTheme === true ? 'black' : 'white' }"
      >
        <nuxt-link
          to="/home"
          exact
          no-prefetch
          tag="i"
          class="material-icons Arr"
          :style="{ color: pokTheme === true ? 'white' : 'black' }"
        >
          arrow_back
        </nuxt-link>
      </button>

      <div
        class="block-type"
        :style="{
          'background-image': `url(${Icon})`,
          'background-position': 'center',
          'background-size': 'cover',
          border: pokTheme === true ? '1px solid black' : '1px solid white',
        }"
      ></div>
    </div>

    <div
      class="pokemon-avatar-block"
      :style="{
        'background-image': `url(${background})`,
        'background-size': 'cover',
        'background-position': 'center',
        border: pokTheme === true ? '1px solid black' : '1px solid white',
      }"
    ></div>

    <div class="pokemon-little-information-block">
      <div class="pokemon__height blocks">
        <span :style="{ color: pokTheme === true ? 'black' : 'white' }"
          >Height: {{ pokemon.PokemonInfo.Height }}m</span
        ><!-- m(Height) -->
      </div>
      <div class="pokemon__name blocks">
        <span :style="{ color: pokTheme === true ? 'black' : 'white' }"
          >Name: {{ pokemon.PokemonName | Upper }}</span
        >
      </div>
      <div class="pokemon__weight blocks">
        <span :style="{ color: pokTheme === true ? 'black' : 'white' }"
          >Weight: {{ pokemon.PokemonInfo.Weight }}kg</span
        ><!-- kg(Weight) -->
      </div>
      <div class="pokemon__type blocks">
        <span :style="{ color: pokTheme === true ? 'black' : 'white' }"
          >Type: {{ pokemon.PokemonType }}</span
        >
      </div>
    </div>

    <button
      class="change-information-button"
      @click="Change"
      :style="{
        background: pokTheme === true ? 'black' : 'white',
        color: pokTheme === true ? 'white' : 'black',
      }"
    >
      {{ txt }}
    </button>

    <div class="pokemon-content-container">
      <transition name="changeStat">
        <component :is="change"></component>
      </transition>
    </div>

    <button
      class="surprise-function-block"
      :style="{
        background: pokTheme === true ? 'black' : 'white',
        color: pokTheme === true ? 'white' : 'black',
      }"
      @click="GoToVersus"
    >
      Сравнить
    </button>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/storage'

import Upper from '../../filters/Upper.js'
import About from '../../components/Card/About.vue'
import Stat from '../../components/Card/Stat.vue'

export default {
  layout: 'empty',

  filters: { Upper },

  data() {
    return {
      txt: 'Параметры',
      backgroundType: '',
      Icon: '',
      background: '',
    }
  },

  computed: {
    change() {
      return this.txt === 'Параметры' ? 'About' : 'Stat'
    },

    pokTheme() {
      return this.$store.getters['theme/CHANGETHEME']
    },
  },

  async fetch({ params }) {
    let pokemon

    await firebase
      .database()
      .ref('Pokemons/' + params.id)
      .on('value', (data) => {
        pokemon = data.val()
      })

    return { pokemon }
  },

  mounted() {
    setTimeout(() => {
      firebase
        .storage()
        .ref(`/pokemons/types_background/${this.pokemon.PokemonBackgroundName}`)
        .getDownloadURL()
        .then((data) => {
          this.backgroundType = data
        })
        .catch((e) => console.log(e))

      firebase
        .storage()
        .ref(`/icons/${this.pokemon.PokemonTypeIcon}.png`)
        .getDownloadURL()
        .then((url) => {
          this.Icon = url
        })
        .catch((e) => console.log(e))

      firebase
        .storage()
        .ref(
          `/pokemons/${this.pokemon.PokemonLinkGeneration}/${this.pokemon.PokemonName}.png`
        )
        .getDownloadURL()
        .then((Url) => {
          this.background = Url
        })
        .catch((e) => console.log(e))

      console.log(this.pokemon.PokemonInfo)

      this.$store.dispatch('pokemon/CHANGESTATPARAMS', this.pokemon.PokemonInfo)
      this.$store.dispatch(
        'pokemon/CHANGEABOUTPARAMS',
        this.pokemon.PokemonAbout
      )
    }, 0)
  },

  methods: {
    Change() {
      this.txt === 'Параметры'
        ? (this.txt = 'Описание')
        : (this.txt = 'Параметры')
    },

    GoToVersus() {
      this.$router.push('/versus/' + this.pokemon.id)
    },
  },

  components: {
    About,
    Stat,
  },
}
</script>

<style lang="scss">
@media only screen and (min-device-width: 320px) {
  .pokemon-page-block {
    width: 100vw;
    height: 100vh;
    overflow-x: none;
    position: absolute;

    .pokemon-navbar-block {
      max-width: 95vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 15px auto;

      .block-back {
        height: 45px;
        width: 45px;
        border: 0;
        background: $w;
        border-radius: 25px;
        cursor: pointer;
        transition: 0.8s;
        -o-transiiton: 0.8s;
        -moz-transition: 0.8s;
        -webkit-transition: 0.8s;

        &:hover {
          opacity: 0.7;
        }

        .Arr {
          font-size: 40px;
          font-weight: bold;
        }
      }

      .block-type {
        height: 45px;
        width: 45px;
        border: $b_white;
        cursor: pointer;
        border-radius: 25px;
        transition: 0.9s;
        -o-transition: 0.9s;
        -moz-transition: 0.9s;
        -webkit-transition: 0.9s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    .pokemon-avatar-block {
      width: 75px;
      height: 75px;
      border: $b_white;
      margin: auto;
      cursor: pointer;
      transition: 0.9s;
      -o-transition: 0.9s;
      -moz-transition: 0.9s;
      -webkit-transition: 0.9s;

      &:hover {
        box-shadow: 0 0 20px $w;
      }
    }

    .pokemon-little-information-block {
      display: flex;
      justify-content: space-around;
      align-items: center;
      max-width: 100vw;
      margin: 15px auto;

      .blocks {
        font-size: $f_size2;
        font-family: $Orienta;
        color: $w;
      }
    }

    .change-information-button {
      @include two_button(40px auto);
    }

    .pokemon-content-container {
      max-width: 100vw;
      height: 200px;
      margin: -10px auto;
    }

    .surprise-function-block {
      @include two_button(15px auto);

      transition: 0.8s;
      -o-transition: 0.8s;
      -moz-transition: 0.8s;
      -webkit-transition: 0.8s;

      &:hover {
        background: red;
      }
    }
  }

  .changeStat-enter {
    opacity: 0;
  }

  .changeStat-enter-active {
    transition: opacity 1.1s;
  }

  .changeStat-enter-to {
    opacity: 1;
  }
}
</style>
