<template>
  <div
    class="pokemon-card-block"
    @click="GoToParams"
    :style="{
      boxShadow: theme ? '0 0 20px white' : '0 0 20px black',
      border: theme ? '1px solid white' : '1px solid black',
      background: theme ? 'black' : 'white',
    }"
  >
    <div class="pokemon-card-wrapper">
      <div
        class="pokemon-wrapper__header"
        :style="{ borderBottom: theme ? '1px solid white' : '1px solid black' }"
      >
        <div class="header-index-block">
          <span class="index" :style="{ color: theme ? 'white' : 'black' }"
            >#{{ index + 1 }}</span
          >
        </div>

        <div
          class="header-icon-block"
          :style="{
            'background-image': `url(${icon})`,
            'background-size': 'cover',
            'background-position': 'center',
            border: theme ? '1px solid white' : '1px solid black',
          }"
        ></div>
      </div>
      <div
        class="pokemon-wrapper__body"
        :style="{
          'background-image': `url(${background})`,
          'background-size': 'cover',
          'background-position': 'center',
          borderBottom: theme ? '1px solid white' : '1px solid black',
          borderTop: theme ? '1px solid white' : '1px solid black',
        }"
      >
        <Plus :hideShow="choiceP2" />
      </div>
      <div class="pokemon-wrapper__footer">
        <div
          class="footer-name-block"
          :style="{ background: theme ? 'black' : 'white' }"
        >
          <span
            class="pokemon-name"
            :style="{ color: theme ? 'white' : 'black' }"
            >{{ CardInfo.PokemonName | Upper }}</span
          >
        </div>
        <div
          class="footer-type-block"
          :style="{
            'background-image': `url(${backgroundType}}`,
            'background-size': 'cover',
            'background-position': 'center',
            borderTop: theme ? '1px solid white' : '1px solid black',
          }"
        >
          <span
            class="pokemon-type"
            :style="{ color: theme ? 'white' : 'black' }"
            >{{ CardInfo.PokemonType }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

import Upper from '../../filters/Upper.js'
import Plus from './Plus.vue'

export default {
  props: {
    CardInfo: {
      type: [Object, Array],
      required: true,
    },

    index: {
      type: Number,
      required: true,
    },
  },

  components: {
    Plus,
  },

  data: () => ({
    background: '',
    icon: '',
    backgroundType: '',
  }),

  mounted() {
    firebase
      .storage()
      .ref()
      .child(
        `/pokemons/${this.CardInfo.PokemonLinkGeneration}/${this.CardInfo.PokemonName}.png`
      )
      .getDownloadURL()
      .then((url) => {
        this.background = url
      })
      .catch((e) => {
        console.log(e)
      })

    firebase
      .storage()
      .ref()
      .child(`/icons/${this.CardInfo.PokemonTypeIcon}.png`)
      .getDownloadURL()
      .then((url) => {
        this.icon = url
      })
      .catch((e) => {
        console.log(e)
      })

    firebase
      .storage()
      .ref()
      .child(
        `/pokemons/types_background/${this.CardInfo.PokemonBackgroundName}`
      )
      .getDownloadURL()
      .then((url) => {
        this.backgroundType = url

        console.log(url)
      })
      .catch((e) => {
        console.log(e)
      })
  },

  filters: { Upper },

  emits: ['GoToParams', 'ChooseYou'],

  computed: {
    theme() {
      return this.$store.getters['theme/CHANGETHEME']
    },

    choiceP2() {
      return this.$store.getters['pokemon/CHOICEPOKEMON']
    },
  },

  methods: {
    GoToParams() {
      this.$emit('GoToParams', this.CardInfo)
    },
  },
}
</script>

<style lang="scss">
.pokemon-card-block {
  height: $card_height;
  width: $card_width_1;
  background: $w;
  cursor: pointer;
  margin: 7px;
  z-index: 3;
  display: inline-block;
  border-radius: $card_radius;
  border: $b_black;
  transition: 0.8s;
  -o-transition: 0.8s;
  -webkit-transition: 0.8s;
  -moz-transition: 0.8s;

  &:hover {
    transform: translateY(-10px);
  }

  .pokemon-card-wrapper {
    .pokemon-wrapper__header {
      border-top-right-radius: $card_radius;
      border-top-left-radius: $card_radius;
      height: 40px;
      display: flex;
      max-width: $card_width_1;
      justify-content: space-between;
      align-items: center;
      //border-bottom: $b_black;

      .header-index-block {
        .index {
          margin: 5px;
          font-size: $f_size1;
          font-family: $Orienta;
        }
      }

      .header-icon-block {
        height: 25px;
        width: 25px;
        border: $b_black;
        border-radius: 15px;
        margin: 5px;
      }
    }

    .pokemon-wrapper__body {
      height: 150px;
      max-width: $card_width_1;
      border-top: $b_black;
      border-bottom: $b_black;
      display: flex;
      justify-content: center;
      align-items: center;

      .pokemon-plus-block {
        justify-content: inherit;
        align-items: inherit;
        z-index: 99;

        .plus-block {
          @include button;
        }
      }
    }

    .pokemon-wrapper__footer {
      height: 62.5px;
      max-width: $card_width_1;
      background: $w;
      display: flex;
      flex-direction: column;
      border-bottom-right-radius: $card_radius;
      border-bottom-left-radius: $card_radius;

      .footer-name-block {
        height: 25px;
        max-width: $card_width_1;
        text-align: center;
        font-size: 15px;
        font-family: $Orienta;
        border-bottom: $b_black;
      }

      .footer-type-block {
        height: 39px; //39px
        max-width: $card_width_1;
        border-bottom-right-radius: $card_radius;
        border-bottom-left-radius: $card_radius;
        text-align: center;
        font-size: $f_size3;
        font-family: $Orienta;
      }
    }
  }
}
</style>
