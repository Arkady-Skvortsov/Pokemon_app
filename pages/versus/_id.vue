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
              background: `url(${require(`../../assets/img/icons/` +
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
            'background-image': `url(${require(`../../assets/img/pockemons/first_generation/${first_pokemon.PokemonBackground}`)})`,
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
              @click="GoBack"
              :style="{
                background: VStheme ? 'black' : 'white',
                color: VStheme ? 'white' : 'black',
              }"
            >
              <i class="material-icons icon-back">arrow_back</i>
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
              'background-image': `url(${require(`../../assets/img/pockemons/types_background/JPG/${first_pokemon.PokemonTypeBackground}`)})`,
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

      <div class="second-versus-pokemon-block">
        <div
          class="second-header"
          v-if="!Object.keys(GetVSpokemon).length"
          :style="{ background: VStheme ? 'black' : 'white' }"
        >
          <button
            class="btn-block"
            @click="Add"
            :style="{
              background: VStheme ? 'white' : 'black',
              color: VStheme ? 'black' : 'white',
            }"
          >
            <i class="material-icons plus-btn">add</i>
          </button>
        </div>

        <div
          class="second-header-second"
          v-else
          :style="{ border: VStheme ? 'white' : 'black' }"
        >
          <div class="second-pokemon-header">
            <div class="pokemon-second-index-block">
              <span
                class="pokemon-second-index"
                :style="{ color: VStheme ? 'white' : 'black' }"
                >#{{ GetVSpokemon.id }}</span
              >
            </div>

            <div
              class="pokemon-second-icon-block"
              :style="{
                'background-image': `url(${require('../../assets/img/icons/' +
                  GetVSpokemon.PokemonIcon)})`,
                'background-size': 'cover',
                'background-position': 'center',
                border: VStheme ? '1px solid white' : '1px solid black',
              }"
            ></div>
          </div>

          <div
            class="pokemon-second-wrapper__body"
            :style="{
              'background-image': `url(${require('../../assets/img/pockemons/first_generation/' +
                GetVSpokemon.PokemonBackground)})`,
              'background-size': 'cover',
              'background-position': 'center',
              border: VStheme ? '1px solid white' : '1px solid black',
            }"
          >
            <div class="add-btn-block">
              <button
                class="btn-block"
                @click="GoAway"
                :style="{
                  background: VStheme ? 'white' : 'black',
                  color: VStheme ? 'black' : 'white',
                }"
              >
                <i class="material-icons close-btn">close</i>
              </button>
            </div>
          </div>
          <div class="pokemon-second-wrapper__footer">
            <div
              class="footer-second-name-block"
              :style="{ background: VStheme ? 'black' : 'white' }"
            >
              <span
                class="pokemon-second-name"
                :style="{ color: VStheme ? 'white' : 'black' }"
                >{{ GetVSpokemon.PokemonName | Upper }}</span
              >

              <div
                class="footer-second-type-block"
                :style="{
                  'background-image': `url(${require('../../assets/img/pockemons/types_background/JPG/' +
                    GetVSpokemon.PokemonTypeBackground)})`,
                  'background-size': 'cover',
                  'background-position': 'center',
                  borderTop: VStheme ? '1px solid white' : '1px solid black',
                }"
              >
                <span
                  class="pokemon-second-type"
                  :style="{ color: VStheme ? 'white' : 'black' }"
                  >{{ GetVSpokemon.PokemonType }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <!-- Потом поставлю его чуть по другому -->
        <Notification v-if="message !== ''" :mess="message" @Close="Close" />
      </div>

      <div class="list-versus-items-block">
        <div class="vs-txt-block">
          <span :style="{ color: VStheme ? 'white' : 'black' }"
            >Сравнить по:</span
          >
        </div>
        <div class="render-choices" v-for="(item, idx) of vItems" :key="idx">
          <div
            class="vs-blocks"
            @click="changeCategory(idx)"
            :style="{
              background: !Object.keys(GetVSpokemon).length ? 'grey' : 'black',
            }"
            :disabled="!Object.keys(GetVSpokemon).length"
          >
            <span
              class="vs-block-name"
              ref="vsblockname"
              :style="{ color: VStheme ? 'black' : 'white' }"
              >{{ item.name }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Upper from '../../filters/Upper.js'
import Notification from '../../components/Notification.vue'

export default {
  components: {
    Notification,
  },

  filters: { Upper },

  data: () => ({
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

  async asyncData({ $axios, params }) {
    const first_pokemon = await $axios.$get(
      'http://localhost:3000/pokemons/' + params.id
    )

    return { first_pokemon }
  },

  mounted() {
    this.$store.dispatch('pokemon/GETFIRSTVSPOKEMON', this.first_pokemon)

    this.$store.dispatch('pokemon/SAVINGTHEPATH', this.$route.params.id)
  },

  methods: {
    Close() {
      this.$store.dispatch('pokemon/GETVSMESSAGE', '')
    },

    showBtn() {
      return this.backShow === false
        ? (this.backShow = true)
        : (this.backShow = false)
    },

    GoBack() {
      this.$store.dispatch('pokemon/CHANGESTATE', false)

      this.$store.dispatch('pokemon/CLEARVSPOKEMON')

      this.$store.dispatch('pokemon/GETVSMESSAGE', '')

      this.$router.go(-1)
    },

    VersusStats(value1, value2, txt, value3, value4) {
      let variable

      let tmp = value1

      if (value1 > value2) {
        variable = parseFloat((tmp -= value2) / 100)

        this.$store.dispatch('theme/SETBACKGROUNDTHEME', value3)

        this.$store.dispatch(
          'pokemon/GETVSMESSAGE',
          `${Upper(this.first_pokemon.PokemonName)} оказался лучше ${Upper(
            this.GetVSpokemon.PokemonName
          )} в показателе ${txt} на ${variable}%`
        )
      } else if (value2 > value1) {
        variable = parseFloat((value2 - tmp) / 100)

        this.$store.dispatch('theme/SETBACKGROUNDTHEME', value4)

        this.$store.dispatch(
          'pokemon/GETVSMESSAGE',
          `${Upper(this.GetVSpokemon.PokemonName)} оказался лучше ${Upper(
            this.first_pokemon.PokemonName
          )} в показателе ${txt} на ${variable}%`
        )
      } else {
        this.$store.dispatch('theme/SETBACKGROUNDTHEME', value3)

        this.$store.dispatch(
          'pokemon/GETVSMESSAGE',
          `${Upper(this.first_pokemon.PokemonName)} и ${Upper(
            this.GetVSpokemon.PokemonName
          )} оказались равны в показателе ${txt}`
        )

        variable = 0
      }
    },

    changeCategory(idx) {
      if (!Object.keys(this.GetVSpokemon).length) {
        return
      } else {
        switch (idx) {
          case 0:
            this.VersusStats(
              this.first_pokemon.PokemonInfo.HP,
              this.GetVSpokemon.PokemonInfo.HP,
              'HP',
              this.first_pokemon.PokemonTypeBackground,
              this.GetVSpokemon.PokemonTypeBackground
            )
            break
          case 1:
            this.VersusStats(
              this.first_pokemon.PokemonInfo.Attack,
              this.GetVSpokemon.PokemonInfo.Attack,
              'Атака',
              this.first_pokemon.PokemonTypeBackground,
              this.GetVSpokemon.PokemonTypeBackground
            )
            break
          case 2:
            this.VersusStats(
              this.first_pokemon.PokemonInfo.SpecialAttack,
              this.GetVSpokemon.PokemonInfo.SpecialAttack,
              'Спец.Атака',
              this.first_pokemon.PokemonTypeBackground,
              this.GetVSpokemon.PokemonTypeBackground
            )
            break
          case 3:
            this.VersusStats(
              this.first_pokemon.PokemonInfo.Defense,
              this.GetVSpokemon.PokemonInfo.Defense,
              'Защита',
              this.first_pokemon.PokemonTypeBackground,
              this.GetVSpokemon.PokemonTypeBackground
            )
            break
          case 4:
            this.VersusStats(
              this.first_pokemon.PokemonInfo.SpecialDefense,
              this.GetVSpokemon.PokemonInfo.SpecialDefense,
              'Спец.Защита',
              this.first_pokemon.PokemonTypeBackground,
              this.GetVSpokemon.PokemonTypeBackground
            )
            break
          case 5:
            this.VersusStats(
              this.first_pokemon.PokemonInfo.Speed,
              this.GetVSpokemon.PokemonInfo.Speed,
              'Скорость',
              this.first_pokemon.PokemonTypeBackground,
              this.GetVSpokemon.PokemonTypeBackground
            )
            break
        }
      }
    },

    Add() {
      this.$store.dispatch('pokemon/CHANGESTATE', true)

      this.$store.dispatch('pokemon/GETVSMESSAGE', '')

      this.$router.replace('/')
    },

    GoAway() {
      this.$store.dispatch('pokemon/CLEARVSPOKEMON')

      this.$store.dispatch('pokemon/GETVSMESSAGE', '')

      this.$store.dispatch('pokemon/CHANGESTATE', true)

      setTimeout(() => {
        this.$router.replace('/')
      }, 100)
    },
  },

  computed: {
    VStheme() {
      return this.$store.getters['theme/CHANGETHEME']
    },

    choicePokemon() {
      return this.$store.getters['pokemon/CHOICEPOKEMON']
    },

    GetVSpokemon() {
      return this.$store.getters['pokemon/VSPOKEMON']
    },

    message() {
      return this.$store.getters['pokemon/VSMESSAGE']
    },
  },
}
</script>

<style lang="scss">
@media only screen and (min-device-width: 360px) {
  .versus-pokemon-page {
    background: $w;
    height: 100%;
    width: 100%;

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
        margin: 10px;
        cursor: pointer;
        border-radius: $card_radius;

        .second-header {
          background: $b;
          height: $card_height;
          width: $card_width_2;
          border-radius: $card_radius;
          border: $b_black;
          display: flex;
          align-items: center;
          justify-content: center;

          .btn-block {
            @include button;
          }
        }

        .second-header-second {
          border: $b_black;

          .second-pokemon-header {
            border-top-right-radius: $card_radius;
            border-top-left-radius: $card_radius;
            height: 40px;
            display: flex;
            width: $card_width_2;
            justify-content: space-between;
            align-items: center;

            .pokemon-second-index-block {
              .pokemon-second-index {
                margin: 5px;
                font-size: $f_size1;
                font-family: $Orienta;
              }
            }

            .pokemon-second-icon-block {
              height: 25px;
              width: 25px;
              border: $b_black;
              border-radius: 15px;
              background: $b;
              margin: 5px;
            }
          }

          .pokemon-second-wrapper__body {
            height: 150px;
            max-width: $card_width_2;
            border-top: $b_black;
            border-bottom: $b_black;
            display: flex;
            justify-content: center;
            align-items: center;

            .add-btn-block {
              // display: flex;
              // align-items: center;
              // justify-content: center;

              .btn-block {
                @include button;
              }
            }
          }

          .pokemon-second-wrapper__footer {
            height: 63px;
            max-width: $card_width_2;
            background: $w;
            display: flex;
            flex-direction: column;
            border-bottom-right-radius: $card_radius;
            border-bottom-left-radius: $card_radius;

            .footer-second-name-block {
              height: 25px;
              max-width: $card_width_2;
              text-align: center;
              font-size: 15px;
              font-family: $Orienta;
              border-bottom: $b_black;
            }

            .footer-second-type-block {
              height: 39px;
              max-width: $card_width_2;
              text-align: center;
              font-size: $f_size3;
              font-family: $Orienta;
            }
          }
        }
      }

      .list-versus-items-block {
        max-width: 200px;

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
            cursor: pointer;
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
}
</style>
