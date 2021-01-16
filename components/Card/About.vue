<template>
  <span
    class="txt-about-pokemon"
    :style="{ color: aboutPok === true ? 'black' : 'white' }"
  >
    {{ about }}
  </span>
</template>

<script>
export default {
  computed: {
    aboutPok() {
      return this.$store.getters['theme/CHANGETHEME']
    },

    about() {
      return this.$store.getters['pokemon/ABOUTPOKEMONPARAMS']
    },
  },
}
</script>

<style lang="scss">
.txt-about-pokemon {
  font-size: $f_size2;
  font-family: $Orienta;
  color: $w;
  font-weight: bold;
}
</style>
