<template>
  <transition name="notification">
    <!-- Починю анимацию -->
    <div
      v-if="false"
      class="main-notification-block"
      :style="{
        backgroundImage: `url(${require(`../assets/img/pockemons/types_background/JPG/${back}`)})`,
      }"
    >
      <div class="notification-block">
        <div class="cl-block">
          <i class="material-icons cl" @click="Close">close</i>
        </div>
        <div class="txt-block">
          <span class="text">{{ mess }}</span>
        </div>
      </div>
    </div>
    <div
      class="warning-notification-block"
      v-else
      :style="{ background: 'red' }"
    >
      <div class="cl-warning-block">
        <i class="material-icons cl-warning" @click="Close">close</i>
      </div>

      <div class="txt-warning-block">
        <span class="text-warning">{{ mess }}</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    mess: {
      type: String,
      required: true,
    },
  },

  methods: {
    Close() {
      this.$emit('Close')
    },
  },

  computed: {
    back() {
      return this.$store.getters['theme/BACKGROUNDTHEME']
    },
  },
}
</script>

<style lang="scss">
.main-notification-block {
  height: 100px;
  width: 450px;
  background-position: center;
  background-size: cover;

  .notification-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;

    .cl-block {
      height: 30px;
      width: 30px;
      border-radius: 15px;
      background: $w;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px 10px;

      .cl {
        color: $b;
        font-size: 25px;
        cursor: pointer;
        font-weight: bold;
        transition: 0.7s;
        -o-transition: 0.7s;
        -moz-transition: 0.7s;
        -webkit-transition: 0.7s;

        &:hover {
          transform: rotate(180deg);
        }
      }
    }

    .txt-block {
      margin: -15px 50px;

      .text {
        font-family: $Orienta;
        font-size: 20px;
        font-weight: bold;
      }
    }
  }

  .notification-enter {
    opacity: 0;
    transform: translateY(-100px);
  }

  .notification-enter-active,
  .notification-leave-active {
    transition: transform 0.8s, opacity 0.8s;
  }

  .notification-enter-to {
    opacity: 1;
    transform: translateY(0px);
  }

  .notification-leave {
    opacity: 1;
    transform: translateY(0px);
  }

  .notification-leave-to {
    opacity: 0;
    transform: translateY(-100px);
  }
}

.warning-notification-block {
  height: 100px;
  width: 350px;
  border-radius: $block_radius;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;

  .cl-warning-block {
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background: $w;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .cl-warning {
      color: $b;
      font-size: 25px;
      cursor: pointer;
      font-weight: bold;
      transition: 0.7s;
      -o-transition: 0.7s;
      -moz-transition: 0.7s;
      -webkit-transition: 0.7s;

      &:hover {
        transform: rotate(180deg);
      }
    }
  }

  .txt-warning-block {
    margin: 5px 50px;

    .text-warning {
      font-family: $Orienta;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
