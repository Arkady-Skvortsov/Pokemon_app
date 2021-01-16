<template>
  <div
    class="pokemon-home-page"
    :style="{ background: theme === true ? 'black' : 'white' }"
  >
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
        v-for="(pokemon, index) of filteredValue"
        :key="index"
        :CardInfo="pokemon"
        :index="index"
        @GoToParams="GoToParams2"
        @ChooseYou="ChooseYou2"
      />
    </div>

    <div v-if="message.length">
      <Notification :mess="message" @Close="Close2" />
    </div>
  </div>
</template>

<script>
import Notification from '../components/Notification.vue'
import Functional from '../components/Functional.vue'
import Card from '../components/Card/Card.vue'

export default {
  components: {
    Notification,
    Functional,
    Card,
  },

  data: () => ({
    pokemons2: [],
    noResults: false,
    message: '',
  }),

  computed: {
    theme() {
      return this.$store.getters['theme/CHANGETHEME']
    },

    choiceP() {
      return this.$store.getters['pokemon/CHOICEPOKEMON']
    },

    VSpokemon() {
      return this.$store.getters['pokemon/VSPOKEMON']
    },

    searchValue() {
      return this.$store.getters['pokemon/SEARCHPOKEMON']
    },

    filteredValue() {
      return this.pokemons2
    },

    saveThePath() {
      return this.$store.getters['pokemon/SAVEPATH']
    },

    pokemons() {
      return this.$store.getters['pokemon/POKEMONS']
    },

    firstPokemon() {
      return this.$store.getters['pokemon/FIRSTVSPOKEMON']
    },
  },

  async fetch({ store }) {
    await store.dispatch('pokemon/GETPOKEMONS')
  },

  watch: {
    searchValue() {
      this.SearchCheck()
    },
  },

  mounted() {
    this.SearchCheck()

    this.pokemons2 = this.pokemons
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

    Close2() {
      this.message = ''
    },

    GoToParams2(data) {
      if (this.choiceP !== false && data.id !== this.firstPokemon.id) {
        this.$store.dispatch('pokemon/CHOOSEVSPOKEMON', data)

        this.$router.replace('/versus/' + this.saveThePath)

        this.message = ''

        return
      } else if (this.choiceP !== false && data.id === this.firstPokemon.id) {
        this.message = 'Нельзя сравнивать 2х одинаковых покемонов'

        return
      } else {
        this.$router.push('/pokemon/' + data.id)

        this.message = ''
      }
    },

    CancelVersus() {
      this.$store.dispatch('pokemon/CHANGESTATE', false) //Falsy
    },

    ChooseYou2(payload) {
      //Лишняя функция
      console.log(this.$store.getters['pokemon/VSPOKEMON'])
    },

    SearchCheck() {
      this.pokemons2 = []

      if (this.searchValue) {
        this.pokemons2 = this.pokemons.filter((item) => {
          return item.PokemonName.toLowerCase().includes(
            this.searchValue.toLowerCase()
          )
        })
      } else {
        this.pokemons2 = this.pokemons
      }
    },
  },
}
</script>

<style lang="scss">
@media only screen and (min-device-width: 360px) {
  .pokemon-home-page {
    height: 100vw;
    width: 100vh;
    background: $w;
    overflow-x: hidden;

    .pokemon-home-page__filter {
      @include FilAndCanButton(30px, 125px, $w, 'none');
    }

    .cancel-home-btn {
      @include FilAndCanButton(45px, 150px, $r, 'toUpperCase');
    }
  }
}
</style>
