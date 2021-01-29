<template>
  <div
    class="main-tag-container"
    :style="{
      background: Theme ? 'black' : 'white',
      border: Theme ? '1px solid white' : '1px solid black',
    }"
  >
    <div class="tag-container">
      <div class="cross-block">
        <i
          class="material-icons closes"
          :style="{ color: Theme ? 'white' : 'black' }"
          @click="DelTag"
          >close</i
        >
      </div>

      <div class="tag-name__block">
        <span class="tag-name" :style="{ color: Theme ? 'white' : 'black' }">{{
          TAG
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    Theme() {
      return this.$store.getters['theme/CHANGETHEME']
    },

    TAG() {
      return this.$store.getters['theme/TAGSOBJ']
    },
  },

  mounted() {
    console.log(this.TAG)
  },

  methods: {
    DelTag() {
      console.log(this.TAG[0])
    },
  },
}
</script>

<style lang="scss">
.main-tag-container {
  height: $tag_h;
  width: $tag_w;
  display: inline-block;
  position: relative;
  border-radius: $card_radius;
  border: $b_black;
  cursor: pointer;
  transition: 0.8s;
  -o-transition: 0.8s;
  -webkit-transition: 0.8s;
  -moz-transition: 0.8s;

  &:hover {
    transform: scale(0.9);
  }

  .tag-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .cross-block {
      .closes {
        font-size: 30px;
        font-weight: bold;
      }
    }

    .tag-name__block {
      margin-top: -5px;

      .tag-name {
        font-size: 15px;
        font-family: $OpenSans;
      }
    }
  }
}
</style>
