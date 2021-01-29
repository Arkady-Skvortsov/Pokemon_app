<template>
  <div
    class="history-block"
    :style="{
      'background-image': `url(${require('../assets/img/pockemons/types_background/JPG/' +
        vHistory.background)})`,
      border: Theme ? '1px solid white' : '1px solid black',
    }"
    @click="GoToVS"
  >
    <div class="vs-main-block">
      <div
        class="first-pokemon-history-block pokemon-blocks"
        :style="{
          'background-image': `url(
                ${require('../assets/img/pockemons/first_generation/' +
                  vHistory.Fpokemon.PokemonBackground)}
              )`,
          border: Theme ? '1px solid white' : '1px solid black',
        }"
      ></div>
      <div class="vs-block">
        <span class="vs-txt" :style="{ color: Theme ? 'white' : 'black' }"
          >VS</span
        >
      </div>
      <div
        class="second-pokemon-history-block pokemon-blocks"
        :style="{
          'background-image': `url(
                ${require('../assets/img/pockemons/first_generation/' +
                  vHistory.Spokemon.PokemonBackground)}
              )`,
          border: Theme ? '1px solid white' : '1px solid black',
        }"
      ></div>
    </div>
    <div class="txt-block">
      <span
        class="txt-about-vs"
        :style="{ color: Theme ? 'white' : 'black' }"
        >{{ vHistory.text }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vHistory: {
      type: [Object],
      required: true,
    },
  },

  mounted() {
    console.log(this.vHistory.date)
  },

  computed: {
    Theme() {
      return this.$store.getters['theme/CHANGETHEME']
    },
  },

  methods: {
    GoToVS() {
      this.$router.push(this.vHistory.path)
    },
  },
}
</script>

<style lang="scss">
.history-block {
  height: $tag_w;
  max-width: 100vw;
  margin-top: 20px;
  border: 1px solid black;
  background-position: center;
  background-size: cover;

  .vs-main-block {
    margin: 10px auto;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .pokemon-blocks {
      height: $height_btn;
      width: $width_btn;
      background-position: center;
      background-size: cover;
      border: $b_black;
    }

    .vs-block {
      display: flex;
      justify-content: center;
      align-items: center;

      .vs-txt {
        font-size: $link_hAndw;
        font-family: $Orienta;
        text-align: center;
      }
    }
  }

  .txt-block {
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    .txt-about-vs {
      font-family: $Orienta;
      font-size: 10px;
    }
  }
}
</style>
