<template>
  <div class="statistic-pokemon-block">
    <div class="statistic-hp-block stat-blocks">
      <span
        class="statistic-txt"
        :style="{ color: statTheme === true ? 'black' : 'white' }"
      >
        ХП:
      </span>

      <div class="detail-statistic-block">
        <div class="detail-statistic-child">
          <div>
            <span
              class="detail-numbers"
              :style="{ color: statTheme === true ? 'black' : 'white' }"
            >
              90
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="statistic-attack-block stat-blocks">
      <span
        class="statistic-txt"
        :style="{ color: statTheme === true ? 'black' : 'white' }"
      >
        Атака:
      </span>

      <div class="detail-statistic-block">
        <div class="detail-statistic-child">
          <div>
            <span
              class="detail-numbers"
              :style="{ color: statTheme === true ? 'black' : 'white' }"
            >
              90
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="statistic-specAttack-block stat-blocks">
      <span
        class="statistic-txt"
        :style="{ color: statTheme === true ? 'black' : 'white' }"
      >
        Спец.Атака:
      </span>

      <div class="detail-statistic-block">
        <div class="detail-statistic-child">
          <div>
            <span
              class="detail-numbers"
              :style="{ color: statTheme === true ? 'black' : 'white' }"
            >
              125
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="statistic-defense-block stat-blocks">
      <span
        class="statistic-txt"
        :style="{ color: statTheme === true ? 'black' : 'white' }"
      >
        Защита:
      </span>

      <div class="detail-statistic-block">
        <div class="detail-statistic-child">
          <div>
            <span
              class="detail-numbers"
              :style="{ color: statTheme === true ? 'black' : 'white' }"
            >
              65
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="statistic-specDefense-block stat-blocks">
      <span
        class="statistic-txt"
        :style="{ color: statTheme === true ? 'black' : 'white' }"
      >
        Спец.Защита:
      </span>

      <div class="detail-statistic-block">
        <div class="detail-statistic-child">
          <div>
            <span
              class="detail-numbers"
              :style="{ color: statTheme === true ? 'black' : 'white' }"
            >
              75
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="statistic-speed-block stat-blocks">
      <span
        class="statistic-txt"
        :style="{ color: statTheme === true ? 'black' : 'white' }"
      >
        Скорость:
      </span>

      <div class="detail-statistic-block">
        <div class="detail-statistic-child">
          <div>
            <span
              class="detail-numbers"
              :style="{ color: statTheme === true ? 'black' : 'white' }"
            >
              75
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    statTheme() {
      return this.$store.getters['theme/CHANGETHEME']
    },
  },
}
</script>

<style lang="scss">
.statistic-pokemon-block {
  display: flex;
  flex-direction: column;

  .stat-blocks {
    height: 20px;
    width: 100vw;
    margin-top: 10.5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .statistic-txt {
      font-size: $f_size3;
      font-family: $Orienta;
      color: $w;
    }

    .detail-statistic-block {
      height: 20px;
      width: 220px;
      background: $w;

      .detail-statistic-child {
        width: 65%;
        height: inherit;
        background: green;
        display: flex;
        justify-content: center;
        align-items: center;

        .detail-numbers {
          font-size: $f_size2;
          font-family: $Orienta;
          text-align: center;
        }
      }
    }
  }
}
</style>
