<template>
  <div>
    <transition name="Page">
      <Nuxt />
    </transition>
  </div>
</template>

<script>
export default {}
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
