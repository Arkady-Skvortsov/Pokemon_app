<template>
  <div class="pokemon-plus-block" v-if="hideShow !== false">
    <button class="plus-block">
      <i class="material-icons plus-icon" @click="ChooseYou">add</i>
    </button>
  </div>
</template>

<script>
export default {
  emits: ['ChooseYou'],

  props: {
    hideShow: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    ChooseYou() {
      this.$emit('ChooseYou')
    },
  },
}
</script>

<style lang="scss"></style>
