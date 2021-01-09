<template>
  <div
    class="versus-pokemon-page"
    :style="{ background: VStheme ? 'black' : 'white' }"
  >
    <div class="versus-pokemon-block">
      <div
        class="first-versus-pokemon-block"
        :style="{
          background: VStheme ? 'black' : 'white',
          border: VStheme ? 'black' : 'white',
        }"
        @click="showBtn"
      >
        <div
          class="pokemon-header"
          :style="{
            borderBottom: VStheme ? '1px solid white' : '1px solid black',
          }"
        >
          <div class="pokemon-index-block">
            <span
              class="pokemon-index"
              :style="{ color: VStheme ? 'white' : 'black' }"
              >#{{ first_pokemon.id }}</span
            >
          </div>

          <div
            class="pokemon-icon-block"
            :style="{
              'background-image': `url(${require('../assets/img/icons/' +
                first_pokemon.PokemonIcon)})`,
              'background-size': 'cover',
              'background-position': 'center',
              border: VStheme ? '1px solid white' : '1px solid black',
            }"
          ></div>
        </div>
        <div
          class="pokemon-wrapper__body"
          :style="{
            'background-image': `url(${require('../assets/img/pockemons/first_generation/' +
              first_pokemon.PokemonBackground)})`,
            'background-size': 'cover',
            'background-position': 'center',
            borderBottom: VStheme ? '1px solid white' : '1px solid black',
            borderTop: VStheme ? '1px solid white' : '1px solid black',
          }"
        >
          <transition name="back-icon">
            <button
              class="back-icon-block"
              v-if="backShow"
              :style="{
                background: VStheme ? 'black' : 'white',
                color: VStheme ? 'white' : 'black',
              }"
            >
              <nuxt-link
                to="/"
                tag="i"
                class="material-icons icon-back"
                exact
                no-prefetch
              >
                arrow_back
              </nuxt-link>
            </button>
          </transition>
        </div>
        <div class="pokemon-wrapper__footer">
          <div
            class="footer-name-block"
            :style="{ background: VStheme ? 'black' : 'white' }"
          >
            <span
              class="pokemon-name"
              :style="{ color: VStheme ? 'white' : 'black' }"
              >{{ first_pokemon.PokemonName | Upper }}</span
            >
          </div>
          <div
            class="footer-type-block"
            :style="{
              'background-image': `url(${require('../assets/img/pockemons/types_background/JPG/' +
                first_pokemon.PokemonTypeBackground)})`,
              'background-size': 'cover',
              'background-position': 'center',
              borderTop: VStheme ? '1px solid white' : '1px solid black',
            }"
          >
            <span
              class="pokemon-type"
              :style="{ color: VStheme ? 'white' : 'black' }"
              >{{ first_pokemon.PokemonType }}</span
            >
          </div>
        </div>
      </div>

      <div class="vs-txt">
        <span :style="{ color: VStheme ? 'white' : 'black' }">VS</span>
      </div>

      <div
        class="second-versus-pokemon-block"
        :style="{
          background: empty === true ? 'white' : 'black',
          border: empty === true ? '1px solid black' : '1px solid white',
          display: empty === true ? '' : 'flex',
          justifyContent: empty === true ? '' : 'center',
          alignItems: empty === true ? '' : 'center',
        }"
      >
        <div class="add-btn-block">
          <button class="btn-block" v-if="empty === false" @click="Add">
            <i class="material-icons plus-btn">add</i>
          </button>
          <button class="btn-block" v-else @click="GoAway">
            <i class="material-icons close-btn">close</i>
          </button>
        </div>
      </div>
    </div>
    <div class="list-versus-items-block">
      <div class="vs-txt-block">
        <span :style="{ color: VStheme ? 'white' : 'black' }"
          >Сравнить по:</span
        >
      </div>
      <div class="render-choices" v-for="(item, idx) of vItems">
        <div
          class="vs-blocks"
          @click="changeCategory(idx)"
          :style="{ background: VStheme ? 'white' : 'black' }"
          :disabled="empty"
        >
          <span
            class="vs-block-name"
            :style="{ color: VStheme ? 'black' : 'white' }"
            >{{ item.name }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Upper from '../filters/Upper.js'

export default {
  filters: { Upper },

  data: () => ({
    //timestamp variables
    backShow: false,
    empty: false,
    vItems: [
      {
        name: 'HP',
      },
      {
        name: 'Атака',
      },
      {
        name: 'Спец. Атака',
      },
      {
        name: 'Защита',
      },
      {
        name: 'Спец. Защита',
      },
      {
        name: 'Скорость',
      },
    ],
  }),

  methods: {
    showBtn() {
      return this.backShow === false
        ? (this.backShow = true)
        : (this.backShow = false)
    },
    changeCategory(idx) {
      switch (idx) {
        case 0:
          console.log(idx, this.first_pokemon.PokemonInfo.HP)
          break
        case 1:
          console.log(idx, this.first_pokemon.PokemonInfo.Attack)
          break
        case 2:
          console.log(idx, this.first_pokemon.PokemonInfo.SpecialAttack)
          break
        case 3:
          console.log(idx, this.first_pokemon.PokemonInfo.Defense)
          break
        case 4:
          console.log(idx, this.first_pokemon.PokemonInfo.SpecialDefense)
          break
        case 5:
          console.log(idx, this.first_pokemon.PokemonInfo.Speed)
          break
      }
    },

    Add() {
      this.$store.dispatch('pokemon/CHANGESTATE', true)

      this.$router.push('/')
    },

    GoAway() {
      alert('Go Away')
    },
  },

  computed: {
    VStheme() {
      return this.$store.getters['theme/CHANGETHEME']
    },

    first_pokemon() {
      return this.$route.query.id
    },

    choicePokemon() {
      return this.$store.getters['pokemon/CHOICEPOKEMON']
    },
  },

  components: { Card },
}
</script>

<style lang="scss">
@media only screen and (min-device-width: 320px) {
  .versus-pokemon-page {
    background: $w;
    height: 100vh;
    width: 100vw;

    .versus-pokemon-block {
      display: flex;
      justify-content: space-around;
      align-items: center;

      .first-versus-pokemon-block {
        height: $card_height;
        width: $card_width_2;
        background: $w;
        margin: 10px;
        cursor: pointer;
        border-radius: $card_radius;
        border: $b_black;

        .pokemon-header {
          border-top-right-radius: $card_radius;
          border-top-left-radius: $card_radius;
          height: 40px;
          display: flex;
          width: $card_width_2;
          justify-content: space-between;
          align-items: center;

          .pokemon-index-block {
            .pokemon-index {
              margin: 5px;
              font-size: $f_size1;
              font-family: $Orienta;
            }
          }

          .pokemon-icon-block {
            height: 25px;
            width: 25px;
            border: $b_black;
            border-radius: 15px;
            background: $b;
            margin: 5px;
          }
        }

        .pokemon-wrapper__body {
          height: 150px;
          max-width: $card_width_2;
          border-top: $b_black;
          border-bottom: $b_black;
          display: flex;
          justify-content: center;
          align-items: center;

          .back-icon-block {
            @include button;
          }
        }

        .pokemon-wrapper__footer {
          height: 63px;
          max-width: $card_width_2;
          background: $w;
          display: flex;
          flex-direction: column;
          border-bottom-right-radius: $card_radius;
          border-bottom-left-radius: $card_radius;

          .footer-name-block {
            height: 25px;
            max-width: $card_width_2;
            text-align: center;
            font-size: 15px;
            font-family: $Orienta;
            border-bottom: $b_black;
          }

          .footer-type-block {
            height: 39px;
            max-width: $card_width_2;
            border-bottom-right-radius: $card_radius;
            border-bottom-left-radius: $card_radius;
            text-align: center;
            font-size: $f_size3;
            font-family: $Orienta;
          }
        }

        .back-icon-enter {
          opacity: 0;
          transform: translateX(-45px);
        }

        .back-icon-enter-active,
        .back-icon-leave-active {
          transition: opacity 0.6s, transform 0.6s;
        }

        .back-icon-enter-to {
          opacity: 1;
          transform: translateX(0);
        }

        .back-icon-leave-to {
          opacity: 0;
          transform: translateX(-45px);
        }
      }

      .second-versus-pokemon-block {
        height: $card_height;
        width: $card_width_2;
        background: $w;
        margin: 10px;
        cursor: pointer;
        border-radius: $card_radius;
        border: $b_black;

        .add-btn-block {
          display: flex;
          align-items: center;
          justify-content: center;

          .btn-block {
            @include button;
          }
        }
      }
    }

    .list-versus-items-block {
      max-width: 200px;
      margin: 0 auto;

      .vs-txt-block {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-family: $Orienta;
      }

      .render-choices {
        .vs-blocks {
          height: 35px;
          width: 200px;
          background: $b;
          margin: 5px;
          display: flex;
          justify-content: center;
          align-items: center;

          .vs-block-name {
            font-size: 20px;
            font-family: $Orienta;
            color: $w;
          }
        }
      }
    }
  }
}
</style>
