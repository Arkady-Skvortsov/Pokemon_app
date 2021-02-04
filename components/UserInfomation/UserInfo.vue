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
      >
        <button class="change-avatar-button">
          <input type="file" class="changeAvatar" @change="ChangeAvatar" />
        </button>
      </div>
    </div>
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

    ChangeAvatar(e) {
      console.log(e.target.files[0])
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

    .change-avatar-button {
      background: $w;
      height: $btn_height;
      width: $btn_height;
      border-radius: $f_size2;
      border: 0;
      z-index: 4;
      margin-top: 80px;
      margin-left: 75px;
      cursor: pointer;

      .changeAvatar::-webkit-file-upload-button {
        visibility: hidden;
      }

      .changeAvatar::before {
        content: '+';
        outline: none;
        white-space: nowrap;
        -webkit-user-select: none;
        cursor: pointer;
        margin-left: 1px;
        font-size: 30px;
      }
    }
  }

  .UserInfo-blocks {
    margin: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;

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
