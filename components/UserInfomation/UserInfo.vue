<template>
  <div class="UserInfo-main-page">
    <div class="UserInfo-blocks">
      <span class="UserInfo-txt2">Ваш email:</span>
      <span class="UserInfo-txt2">{{ email }}</span>
    </div>
    <div class="UserInfo-blocks">
      <span class="UserInfo-txt2">Ваш уникальный код:</span>
      <span class="UserInfo-txt">{{ password }}</span>
    </div>
    <div class="UserInfo-blocks">
      <span class="UserInfo-txt2">Последний визит: {{ lastVisit }}</span>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
  data: () => ({
    email: firebase.auth().currentUser.email,
    password: firebase.auth().currentUser.uid,
    lastVisit: firebase.auth().currentUser.metadata.lastSignInTime,
  }),

  methods: {
    showHidepassword() {
      return this.$refs.input.type === 'password'
        ? (this.$refs.input.type = 'text')
        : (this.$refs.input.type = 'password')
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

  .UserInfo-blocks {
    display: inline;
    margin: 10px;

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
