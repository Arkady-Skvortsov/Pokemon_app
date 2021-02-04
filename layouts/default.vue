<template>
  <div>
    <div>
      <transition name="Page">
        <Nuxt />
      </transition>

      <div>
        <Navbar />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import messages from '@/utils/messages.js'

export default {
  components: {
    Navbar,
  },

  computed: {
    error() {
      return this.$store.getters['auth/ERROR']
    },
  },

  watch: {
    error(fbError) {
      console.log(messages[fbError.code] || 'Что-то пошло не так')
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap'); // First font
@import url('https://fonts.googleapis.com/css2?family=Orienta&display=swap'); // Second font

.Page-enter {
  transform: translateY(640px);
  opacity: 0;
}

.Page-enter-active {
  transition: opacity 0.9s, transform 0.2s;
}

.Page-enter-to {
  transform: translateY(0);
  opacity: 1;
}
</style>
