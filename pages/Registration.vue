<template>
  <div
    class="main-registration-block"
    :style="{
      'background-image': `url(
                ${require('../assets/img/pockemons/types_background/JPG/electric.jpg')}
              )`,
    }"
  >
    <div class="registration-title">
      <h1 class="title">Registration</h1>
    </div>

    <div class="registration-process-block">
      <form>
        <div class="email-registration">
          <input
            type="text"
            placeholder="Создайте свой email"
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

        <div class="password-registration">
          <input
            type="password"
            placeholder="Создайте свой password"
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

        <button class="registration-button" @click.prevent="Registration">
          Зарегистрир.
        </button>
      </form>
    </div>

    <div class="login-href">
      <span>Есть аккаунт?</span>
      <nuxt-link to="/" tag="span" class="log"> Войти </nuxt-link>
      <!-- Dynamically param -->
    </div>
  </div>
</template>

<script>
import { email, required, minLength, maxLength } from 'vuelidate/lib/validators'
import firebase from 'firebase/app'

export default {
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
    Registration() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      const formData = {
        email: this.email,
        password: this.password,
      }

      try {
        this.$store.dispatch('auth/Register', formData)

        this.$router.push('/home')
      } catch (e) {}
    },
  },
}
</script>

<style lang="scss">
.main-registration-block {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-position: center;
  background-size: cover;

  .registration-title {
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

  .registration-process-block {
    display: flex;
    justify-content: center;
    align-items: space-between;
    margin: 0 auto;

    .email-registration {
      .email {
        height: $b_hAndw;
        width: $b_width;
        font-size: 20px;
        font-family: $Orienta;
        border: $b_black;
      }
    }

    .password-registration {
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
    }

    .registration-button {
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

  .login-href {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 20px;
      font-family: $Orienta;
    }

    .log {
      cursor: pointer;
      color: $w;
    }
  }
}
</style>
