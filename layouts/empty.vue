<template>
  <div class="render-block-here">
    <transition name="page-slider">
      <Nuxt />
    </transition>
  </div>
</template>

<script>
import messages from '@/utils/messages.js'

export default {
  computed: {
    error() {
      return this.$store.getters['auth/ERROR']
    },
  },

  watch: {
    error(fbError) {
      //Сделаю что-нибудь в Notification.vue.. Да, сделаю что-нибудь в уведомлениях
      console.log(messages[fbError.code] || 'Что-то пошло не так')
    },
  },
}
</script>

<style lang="scss">
.page-slider-enter {
  transform: translateY(640px);
  opacity: 0;
}

.page-slider-enter-active {
  transition: opacity 0.9s, transform 0.2s;
}

.page-slider-enter-to {
  transform: translateY(0);
  opacity: 1;
}
</style>
