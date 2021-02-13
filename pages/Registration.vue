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
        <div class="photoURL-registration">
          <div
            class="photoURL-main-block"
            :style="{
              'background-image': `url(${back})`,
              'background-position': 'center',
              'background-size': 'cover',
            }"
          >
            <button class="photo-add-button">
              <input
                type="file"
                class="inputFile"
                @change="ChangeImg($event)"
              />
            </button>
          </div>
        </div>

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

export default {
  layout: 'empty',

  data: () => ({
    email: '',
    password: '',
    photoURL: null,
    back: null,
  }),

  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6), maxLength: maxLength(12) },
    photoURL: { required },
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
        photoURL: this.photoURL,
      }

      try {
        this.$store.dispatch('auth/Register', formData)

        this.$router.push('/home')
      } catch (e) {}
    },

    ChangeImg(e) {
      const reader = new FileReader()

      reader.onload = () => {
        this.back = reader.result
        //e.target.files[0]
      }

      this.photoURL = e.target.files[0]

      reader.readAsDataURL(e.target.files[0])
    },
  },
}
</script>

<style lang="scss">
.main-registration-block {
  background-position: center;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

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

    .photoURL-registration {
      height: 110px;
      width: 110px;
      border-radius: 55px;
      margin: 0 auto;

      .photoURL-main-block {
        height: inherit;
        width: inherit;
        background: $b;
        border-radius: 55px;

        .photo-add-button {
          background: $w;
          height: $btn_height;
          width: $btn_height;
          border-radius: $f_size2;
          border: 0;
          z-index: 4;
          margin-top: 80px;
          margin-left: 75px;
          cursor: pointer;

          .inputFile::-webkit-file-upload-button {
            visibility: hidden;
          }

          .inputFile::before {
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
    }

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
