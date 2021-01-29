<template>
  <div
    class="list-main-container"
    :style="{ background: Theme ? 'black' : 'white' }"
  >
    <div class="list-top-block">
      <div class="list-top-txt">
        <span class="top-txt" :style="{ color: Theme ? 'white' : 'black' }"
          >История сравнений</span
        >
      </div>
      <div
        class="list-top-bucket"
        :style="{ border: Theme ? '1px solid white' : '1px solid black' }"
        @click="ClearHistory"
      >
        <i class="material-icons b">delete</i>
      </div>
    </div>
    <div
      class="filter-list-block"
      :style="{ border: Theme ? '1px solid white' : '1px solid black' }"
      @click="FilterVS"
    >
      <span class="filter-txt" :style="{ color: Theme ? 'white' : 'black' }">{{
        txt
      }}</span>
    </div>
    <div class="body-list-block">
      <VSBLOCK
        v-for="(history, index) in vsHistory"
        :key="index"
        :vHistory="history"
      />
    </div>
  </div>
</template>

<script>
import VSBLOCK from '../components/VsBlock.vue'

export default {
  components: {
    VSBLOCK,
  },

  data: () => ({
    vsHistory: [],
    txt: 'Сначала новые',
  }),

  computed: {
    Theme() {
      return this.$store.getters['theme/CHANGETHEME']
    },

    VSHISTORY() {
      return this.$store.getters['pokemon/VSHISTORY']
    },
  },

  methods: {
    ClearHistory() {
      this.$store.dispatch('pokemon/CLEARHISTORY')
    },

    FilterVS() {
      if (this.txt === 'Сначала новые') {
        this.txt = 'Сначала старые'

        this.vsHistory.sort((a, b) => b.date.localeCompare(a.date))
      } else {
        this.txt = 'Сначала новые'

        this.vsHistory.sort((a, b) => a.date.localeCompare(b.date))
      }

      //console.log(this.vsHistory[this.vsHistory.length - 1]) - да, да, я сохраню для инфы юзера
    },
  },

  mounted() {
    this.vsHistory = this.VSHISTORY

    console.log(this.VSHISTORY)
  },
}
</script>

<style lang="scss">
.list-main-container {
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;

  .list-top-block {
    max-width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .list-top-txt {
      .top-txt {
        font-size: $f_size1;
        font-family: $Orienta;
      }
    }

    .list-top-bucket {
      height: $b_hAndw;
      width: $b_hAndw;
      border: $b_black;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: 0.8s;
      -o-transition: 0.8s;
      -moz-transition: 0.8s;
      -webkit-transition: 0.8s;

      .b {
        font-size: $f_size1;
        color: $r;
      }
    }
  }

  .filter-list-block {
    margin: 10px auto;
    height: $b_hAndw;
    max-width: $card_width_2;
    border-radius: $card_radius;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .filter-txt {
      font-size: $f_size2;
      font-family: $Orienta;
    }
  }

  .body-list-block {
    margin: 20px auto;
  }
}
</style>
