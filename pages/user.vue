<template>
  <div
    class="user-main-block"
    :style="{
      'background-image': `url(
                ${require('../assets/img/pockemons/types_background/JPG/electric.jpg')}
              )`,
    }"
  >
    <div class="profile-name-block">
      <span class="profile-name">Profile</span>
    </div>

    <button class="change-component-button" @click="Change">
      {{ txt }}
    </button>

    <div class="user-info-container">
      <component :is="ChangeComponent"></component>
    </div>

    <button class="logOut-btn" @click="LogOut">Выйти с аккаунта</button>
  </div>
</template>

<script>
import AppInfo from '../components/UserInfomation/AppInfo'
import UserInfo from '../components/UserInfomation/UserInfo'

export default {
  components: {
    AppInfo,
    UserInfo,
  },

  data: () => ({
    txt: 'Личные данные',
  }),

  methods: {
    async LogOut() {
      await this.$store.dispatch('auth/Logout')

      this.$router.push('/?message=logout')
    },

    Change() {
      return this.txt === 'Личные данные'
        ? (this.txt = 'Приложение')
        : (this.txt = 'Личные данные')
    },
  },

  computed: {
    ChangeComponent() {
      return this.txt === 'Личные данные' ? 'UserInfo' : 'AppInfo'
    },
  },
}
</script>

<style lang="scss">
.user-main-block {
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;

  .profile-name-block {
    margin: 0 auto;
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    .profile-name {
      font-size: 45px;
      font-family: $Orienta;
      color: $w;
    }
  }

  .change-component-button {
    border: 0;
    background: $b;
    color: $w;
    height: 40px;
    width: 250px;
    margin: 50px 55px;
    cursor: pointer;
    font-size: $f_size1;
    font-family: $Orienta;
  }

  .user-info-container {
    width: 100vw;
    margin: 20px auto;
  }

  .logOut-btn {
    height: 40px;
    width: 250px;
    background: $r;
    cursor: pointer;
    border: 0;
    margin-left: 50px;
    border-radius: 40px;
    font-size: $f_size1;
    font-family: $Orienta;
  }
}
</style>
