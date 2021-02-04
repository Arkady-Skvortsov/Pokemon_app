<template>
  <div
    class="pokemon-home-page"
    :style="{ background: theme === true ? 'black' : 'white' }"
  >
    <div>
      <Filters
        v-if="openPage"
        @SortByRace2="SortByRace2"
        @changeParams="changeParams2"
        :pokemons2="filteredValue"
      />
    </div>

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
          <span
            class="filter__txt"
            :style="{ color: theme === true ? 'white' : 'black' }"
            @click="GoToFilters()"
            >Фильтры</span
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

    <div class="render-tags-block">
      <Tags v-for="(Tag, index) in tag" :key="index" />
    </div>

    <div v-if="notification.err.txt">
      <Notification @Close="Close2" />
    </div>

    <div class="pokemon-home-page__card">
      <Card
        v-for="(pokemon, index) of filteredValue"
        :key="index"
        :CardInfo="pokemon"
        :index="pokemon.id - 1"
        @GoToParams="GoToParams2"
      />
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'

import Upper from '../filters/Upper.js'
import Tags from '../components/Tags.vue'
import Notification from '../components/Notification.vue'
import Functional from '../components/Functional.vue'
import Card from '../components/Card/Card.vue'
import Filters from '../components/Filters.vue'

export default {
  components: {
    Notification,
    Functional,
    Card,
    Filters,
    Tags,
  },

  filters: { Upper },

  data: () => ({
    pokemons2: [],
    noResults: false,
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

    notification() {
      return this.$store.getters['pokemon/VSNOTIFICATION']
    },

    openPage() {
      return this.$store.getters['theme/OPENPAGE']
    },

    tag() {
      return this.$store.getters['pokemon/TAGS']
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
      this.$store.dispatch('pokemon/GETERRNOTIFICATION', '')
    },

    SortByRace2(idx, catName, txtCat) {
      //Проблема, что касается 0 индекса уйдет благодаря "тегам"
      const name = 'По рассе'
      const func = this.SortByRace2

      switch (idx) {
        case 0:
          this.pokemons2 = this.pokemons.map((item) => item)

          break
        case 1:
          this.pokemons2 = this.pokemons.filter(
            (item) => item.PokemonIcon === 'normal.png'
          )

          catName = txtCat[1].race

          console.log(catName)

          break
        case 2:
          this.pokemons2 = this.pokemons.filter(
            (item) => item.PokemonIcon === 'electric.png'
          )

          catName = txtCat[1].race

          break
        case 3:
          this.pokemons2 = this.pokemons.filter(
            (item) => item.PokemonIcon === 'fire.png'
          )

          catName = txtCat[2].race

          break
        case 4:
          this.pokemons2 = this.pokemons.filter(
            (item) => item.PokemonIcon === 'ghosts.png'
          )

          catName = txtCat[3].race

          break
        case 5:
          this.pokemons2 = this.pokemons.filter(
            (item) => item.PokemonIcon === 'fairy.png'
          )

          catName = txtCat[4].race

          break
        case 6:
          this.pokemons2 = this.pokemons.filter(
            (item) => item.PokemonIcon === 'rock.png'
          )

          catName = txtCat[5].race

          break
        case 7:
          this.pokemons2 = this.pokemons.filter(
            (item) => item.PokemonIcon === 'psyhistic.png'
          )

          catName = txtCat[6].race

          break
        case 8:
          this.pokemons2 = this.pokemons.filter(
            (item) => item.PokemonIcon === 'fighting.png'
          )

          catName = txtCat[7].race

          break
        case 9:
          this.pokemons2 = this.pokemons.filter(
            (item) => item.PokemonIcon === 'ice.png'
          )

          catName = txtCat[8].race

          break
        case 10:
          this.pokemons2 = this.pokemons.filter(
            (item) => item.PokemonIcon === 'steel.png'
          )

          catName = txtCat[9].race

          break
        case 11:
          this.pokemons2 = this.pokemons.filter(
            (item) => item.PokemonIcon === 'water.png'
          )

          catName = txtCat[10].race

          break
        case 12:
          this.pokemons2 = this.pokemons.filter(
            (item) => item.PokemonIcon === 'flying.png'
          )

          catName = txtCat[11].race

          break
        case 13:
          this.pokemon2 = this.pokemons.filter(
            (item) => item.PokemonIcon === 'ground.png'
          )

          catName = txtCat[12].race

          break
        case 14:
          this.pokemons2 = this.pokemons.filter(
            (item) => item.PokemonIcon === 'dragon.png'
          )

          catName = txtCat[13].race

          break
        case 15:
          this.pokemons2 = this.pokemons.filter(
            (item) => item.PokemonIcon === 'darkness.png'
          )

          catName = txtCat[14].race

          break
        case 16:
          this.pokemons2 = this.pokemons.filter(
            (item) => item.PokemonIcon === 'poison.png'
          )

          catName = txtCat[15].race

          break
        case 17:
          this.pokemons2 = this.pokemons.filter(
            (item) => item.PokemonIcon === 'plants.png'
          )

          catName = txtCat[16].race

          break
        case 18:
          this.pokemons2 = this.pokemons.filter(
            (item) => item.PokemonIcon === 'bug.png'
          )

          catName = txtCat[17].race

          break
      }

      if (this.tag.includes(name)) {
        return
      } else {
        this.$store.dispatch('pokemon/SETTAG', {
          name,
          func,
        })
      }
    },

    changeParams2(
      e,
      health,
      attack,
      specialAttack,
      defense,
      specialDefense,
      speed,
      height,
      weight
    ) {
      const names = {
        hp: 'По HP',
        ATTACK: 'По Атаке',
        SPECIALATTACK: 'По Спец.Атаке',
        DEFENSE: 'По Защите',
        SPECIALDEFENSE: 'По Спец.Защите',
        SPEED: 'По Скорости',
        HEIGHT: 'По Росту',
        WEIGHT: 'По Весу',
      }

      switch (e.target.className) {
        case 'range-slider health-slider':
          if (health.minHealth > health.maxHealth) {
            const tmp = health.maxHealth
            health.maxHealth = health.minHealth
            health.minHealth = tmp
          }

          this.pokemons2 = this.pokemons.filter(
            (item) =>
              item.PokemonInfo.HP >= health.minHealth &&
              item.PokemonInfo.HP <= health.maxHealth
          )

          if (this.Tags.includes(names.hp)) {
            return
          } else {
            this.$store.dispatch('pokemon/SETTAG', {
              name: names.hp,
              func: this.changeParams2,
            })
          }

          break
        case 'range-slider attack-slider':
          if (attack.minAttack > attack.maxAttack) {
            const tmp = attack.maxAttack
            attack.maxAttack = attack.minAttack
            attack.minAttack = tmp
          }

          this.pokemons2 = this.pokemons.filter(
            (item) =>
              item.PokemonInfo.Attack >= attack.minAttack &&
              item.PokemonInfo.Attack <= attack.maxAttack
          )

          if (this.Tags.includes(names.ATTACK)) {
            return
          } else {
            this.$store.dispatch('pokemon/SETTAG', {
              name: names.ATTACK,
              func: this.changeParams2,
            })
          }

          break
        case 'range-slider special-attack-slider':
          if (specialAttack.minSpecialAttack > specialAttack.maxSpecialAttack) {
            const tmp = specialAttack.maxSpecialAttack
            specialAttack.maxSpecialAttack = specialAttack.minSpecialAttack
            specialAttack.minSpecialAttack = tmp
          }

          this.pokemons2 = this.pokemons.filter(
            (item) =>
              item.PokemonInfo.SpecialAttack >=
                specialAttack.minSpecialAttack &&
              item.PokemonInfo.SpecialAttack <= specialAttack.maxSpecialAttack
          )

          if (this.Tags.includes(names.SPECIALATTACK)) {
            return
          } else {
            this.$store.dispatch('pokemon/SETTAG', {
              name: names.SPECIALATTACK,
              func: this.changeParams2,
            })
          }

          break
        case 'range-slider defense-slider':
          if (defense.minDefense > defense.maxDefense) {
            const tmp = defense.maxDefense
            defense.maxDefense = defense.minDefense
            defense.minDefense = tmp
          }

          this.pokemons2 = this.pokemons.filter(
            (item) =>
              item.PokemonInfo.Defense >= defense.minDefense &&
              item.PokemonInfo.Defense <= defense.maxDefense
          )

          if (this.Tags.includes(names.DEFENSE)) {
            return
          } else {
            this.$store.dispatch('pokemon/SETTAG', {
              name: names.DEFENSE,
              func: this.changeParams2,
            })
          }

          break
        case 'range-slider special-defense-slider':
          if (
            specialDefense.minSpecialDefense > specialDefense.maxSpecialDefense
          ) {
            const tmp = specialDefense.maxSpecialDefense
            specialDefense.maxSpecialDefense = specialDefense.minSpecialDefense
            specialDefense.minSpecialDefense = tmp
          }

          this.pokemons2 = this.pokemons.filter(
            (item) =>
              item.PokemonInfo.SpecialDefense >=
                specialDefense.minSpecialDefense &&
              item.PokemonInfo.SpecialDefense <=
                specialDefense.maxSpecialDefense
          )

          if (this.Tags.includes(names.SPECIALDEFENSE)) {
            return
          } else {
            this.$store.dispatch('pokemon/SETTAG', {
              name: names.hp,
              func: this.SPECIALDEFENSE,
            })
          }

          break
        case 'range-slider speed-slider':
          if (speed.minSpeed > speed.maxSpeed) {
            const tmp = speed.maxSpeed
            speed.maxSpeed = speed.minSpeed
            speed.minSpeed = tmp
          }

          this.pokemons2 = this.pokemons.filter(
            (item) =>
              item.PokemonInfo.Speed >= speed.minSpeed &&
              item.PokemonInfo.Speed <= speed.maxSpeed
          )

          if (this.Tags.includes(names.SPEED)) {
            return
          } else {
            this.$store.dispatch('pokemon/SETTAG', {
              name: names.SPEED,
              func: this.changeParams2,
            })
          }

          break

        case 'range-slider height-slider':
          if (height.minHeight > height.maxHeight) {
            const tmp = height.maxHeight
            height.maxHeight = height.minHeight
            height.minHeight = tmp
          }

          this.pokemons2 = this.pokemons.filter(
            (item) =>
              item.PokemonInfo.Height >= height.minHeight &&
              item.PokemonInfo.Height <= height.maxHeight
          )

          if (this.Tags.includes(names.HEIGHT)) {
            return
          } else {
            this.$store.dispatch('pokemon/SETTAG', {
              name: names.HEIGHT,
              func: this.changeParams2,
            })
          }

          break

        case 'range-slider weight-slider':
          if (weight.minWeight > weight.maxWeight) {
            const tmp = weight.maxWeight
            weight.maxWeight = weight.minWeight
            weight.minWeight = tmp
          }

          this.pokemons2 = this.pokemons.filter(
            (item) =>
              item.PokemonInfo.Weight >= weight.minWeight &&
              item.PokemonInfo.Weight <= weight.maxWeight
          )

          if (this.Tags.includes(names.WEIGHT)) {
            return
          } else {
            this.$store.dispatch('pokemon/SETTAG', {
              name: names.WEIGHT,
              func: this.changeParams2,
            })
          }

          break
      }
    },

    GoToParams2(data) {
      if (this.choiceP !== false && data.id !== this.firstPokemon.id) {
        this.$store.dispatch('pokemon/CHOOSEVSPOKEMON', data)

        this.$router.replace(
          `/versus/${this.saveThePath}/?=${Upper(
            this.firstPokemon.PokemonName
          )}/VS/${Upper(this.VSpokemon.PokemonName)}`
        )

        this.$store.dispatch('pokemon/GETERRNOTIFICATION', '')

        return
      } else if (this.choiceP !== false && data.id === this.firstPokemon.id) {
        this.$store.dispatch(
          'pokemon/GETERRNOTIFICATION',
          'Нельзя сравнивать 2х одинаковых покемонов'
        )

        return
      } else {
        this.$router.push('/pokemon/' + Upper(data.PokemonName))

        this.$store.dispatch('pokemon/GETERRNOTIFICATION', '')
      }
    },

    GoToFilters() {
      this.$store.dispatch('theme/SETOPENPAGE', true)
    },

    CancelVersus() {
      this.$store.dispatch('pokemon/CHANGESTATE', false)
    },

    SearchCheck() {
      if (this.searchValue !== '') {
        this.pokemons2.filter((item) => {
          return item.PokemonName.toLowerCase().includes(
            this.searchValue.toLowerCase()
          )
        })
      }

      this.pokemons2 = firebase
        .database()
        .ref('Pokemons/')
        .orderByChild('PokemonName')
        .startAt(this.searchValue)
        .endAt(this.searchValue + '\uf8ff')
    },
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
    }

    .cancel-home-btn {
      @include FilAndCanButton(45px, 150px, $r, 'toUpperCase');
    }

    .render-tags-block {
      top: -10px;
      width: 320px;
      margin: 0px auto;
      position: relative;
    }
  }
}
</style>
