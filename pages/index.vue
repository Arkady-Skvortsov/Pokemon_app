<template>
  <div
    class="main-login-block"
    :style="{
      'background-image': `url(
                ${require('../assets/img/pockemons/types_background/JPG/electric.jpg')}
              )`,
    }"
  >
    <div class="login-title">
      <h1 class="title">Login</h1>
    </div>

    <div class="login-process-block">
      <form>
        <div class="email-login">
          <input
            type="text"
            placeholder="Введите свой email"
            class="email inputs"
            v-model.trim="email"
            :style="{
              color:
                ($v.email.$dirty && !$v.email.required) ||
                ($v.email.$dirty && !$v.email.email)
                  ? 'red'
                  : 'black',
            }"
          />
        </div>

        <div class="password-login">
          <input
            type="password"
            placeholder="Введите свой password"
            class="password inputs"
            v-model.trim="password"
            :style="{
              color:
                ($v.password.$dirty && !$v.password.required) ||
                ($v.password.$dirty && !$v.password.minLength) ||
                ($v.password.$dirty && !$v.password.maxLength)
                  ? 'red'
                  : 'black',
            }"
          />
        </div>

        <button class="login-button inputs" @click.prevent="LogIn">
          Войти
        </button>
      </form>
    </div>

    <div class="registration-href">
      <span>Нет аккаунта?</span>
      <nuxt-link to="/Registration" tag="span" class="registr">
        Зарагистрироваться
      </nuxt-link>
      <!-- Dynamically param -->
    </div>
  </div>
</template>

<script>
import { email, required, minLength, maxLength } from 'vuelidate/lib/validators'
import Notification from '../components/Notification'

export default {
  compontens: {
    Notification,
  },

  layout: 'empty',

  data: () => ({
    email: '',
    password: '',
  }),

  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6), maxLength: maxLength(12) },
  },

  methods: {
    async LogIn() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      const formData = {
        email: this.email,
        password: this.password,
      }

      try {
        await this.$store.dispatch('auth/Login', formData)
        this.$router.push('/home')
      } catch (e) {}
    },
  },

  mounted() {
    console.log(this.$v.password, this.$v.email.$dirty)
  },
}
</script>

<style lang="scss">
.main-login-block {
  background-position: center;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  .login-title {
    margin: 5px auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
      color: $w;
      font-family: $Orienta;
      font-size: 45px;
    }
  }

  .login-process-block {
    display: flex;
    justify-content: center;
    align-items: space-between;
    margin: 0 auto;

    .email-login {
      .email {
        height: $b_hAndw;
        width: $b_width;
        font-size: 20px;
        font-family: $Orienta;
        border: 1px solid green;
      }
    }

    .password-login {
      .password {
        height: $b_hAndw;
        width: $b_width;
        font-size: 20px;
        font-family: $Orienta;
        border: $b_black;
      }
    }

    .inputs {
      margin: 20px;
      border: 1px solid $r;
      transition: 0.7s;
      -o-transition: 0.7s;
      -moz-transition: 0.7s;
      -webkit-transition: 0.7s;
    }

    .login-button {
      background: $b;
      cursor: pointer;
      font-size: 25px;
      font-family: $Orienta;
      color: $w;
      height: $link_hAndw;
      width: 180px;
      border: 0;
      margin: 10px 60px;
    }
  }

  .registration-href {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 20px;
      font-family: $Orienta;
    }

    .registr {
      cursor: pointer;
      color: $w;
    }
  }
}
</style>
