<template>
  <div
    class="main-navbar-container"
    :style="{ borderTop: bgTheme ? '1px solid white' : '1px solid black' }"
  >
    <div class="navbar-container">
      <div
        class="home link-blocks"
        :style="{
          border: bgTheme ? '1px solid white' : '1px solid black',
          background: bgTheme ? 'black' : 'white',
        }"
      >
        <nuxt-link to="/home" no-prefetch>
          <i
            class="material-icons icons"
            :style="{ color: bgTheme ? 'white' : 'black' }"
            >home</i
          >
        </nuxt-link>
      </div>
      <div
        class="list link-blocks"
        :style="{
          border: bgTheme ? '1px solid white' : '1px solid black',
          background: bgTheme ? 'black' : 'white',
        }"
      >
        <nuxt-link to="/list">
          <i
            class="material-icons icons"
            :style="{ color: bgTheme ? 'white' : 'black' }"
            >list</i
          >
        </nuxt-link>
      </div>
      <div
        class="user link-blocks"
        :style="{
          border: bgTheme ? '1px solid white' : '1px solid black',
          background: bgTheme ? 'black' : 'white',
        }"
      >
        <nuxt-link to="/user">
          <!-- User page -->
          <i
            class="material-icons icons"
            :style="{ color: bgTheme ? 'white' : 'black' }"
            >cog</i
          >
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    bgTheme() {
      return this.$store.getters['theme/CHANGETHEME']
    },
  },
}
</script>

<style lang="scss">
.main-navbar-container {
  height: 70px;
  width: 100vw;
  background: $sun_color;
  border-top: $b_black;

  .navbar-container {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .link-blocks {
      margin: 10px auto;
      height: $link_hAndw;
      width: $link_hAndw;
      border: $b_white;
      border-radius: $card_radius;
      cursor: pointer;
      display: inherit;
      justify-content: center;
      align-items: center;
      background: $b;

      .icons {
        font-size: 40px;
      }
    }
  }
}
</style>
