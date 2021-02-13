<template>
  <div class="UserInfo-main-page">
    <div class="UserInfo-blocks">
      <span class="UserInfo-txt2">Ваш Аватар:</span>
      <div
        class="UserInfo-avatar-block"
        :style="{
          'background-image': `url(${UserImg})`,
          'background-size': 'cover',
          'background-position': 'center',
        }"
      ></div>
    </div>
    <div class="UserInfo-blocks">
      <span class="UserInfo-txt2">Ваш email:</span>
      <span class="UserInfo-txt2">{{ email }}</span>
    </div>
    <div class="UserInfo-blocks">
      <span class="UserInfo-txt2">Ваш уникальный код:</span>
      <input
        class="UserInfo-txt inpt"
        ref="input"
        type="password"
        :value="password"
      />
      <button class="eyeButton" @click="showHidepassword">
        <i class="material-icons eye-icon">eye</i>
      </button>
    </div>
    <div class="UserInfo-blocks">
      <span class="UserInfo-txt2">Последний визит: {{ lastVisit }}</span>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/storage'

export default {
  data: () => ({
    email: firebase.auth().currentUser.email,
    password: firebase.auth().currentUser.uid,
    lastVisit: firebase.auth().currentUser.metadata.lastSignInTime,
  }),

  mounted() {
    console.log(this.UserImg)
  },

  methods: {
    showHidepassword() {
      return this.$refs.input.type === 'password'
        ? (this.$refs.input.type = 'text')
        : (this.$refs.input.type = 'password')
    },
  },

  computed: {
    UserImg() {
      return this.$store.getters['auth/PHOTOAUTH']
    },
  },
}
</script>

<style lang="scss">
.UserInfo-main-page {
  min-width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .UserInfo-avatar-block {
    height: 110px;
    width: 110px;
    border-radius: 55px;
  }

  .UserInfo-blocks {
    margin: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;

    .eyeButton {
      height: $b_hAndw;
      width: $b_hAndw;
      background: $w;
      border: 0;
      border-radius: 20px;
      cursor: pointer;
      transform: scale(0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
    }

    .UserInfo-input {
      font-size: $f_size2;
      font-family: $Orienta;
    }

    .UserInfo-txt {
      font-size: 10px;
      font-family: $Orienta;
    }

    .UserInfo-txt2 {
      font-size: 15px;
      font-family: $Orienta;
    }
  }
}
</style>
