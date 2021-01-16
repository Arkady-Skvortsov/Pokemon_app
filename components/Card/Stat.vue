<template>
  <div class="statistic-pokemon-block">
    <div class="statistic-hp-block stat-blocks">
      <span
        class="statistic-txt"
        :style="{ color: statTheme === true ? 'black' : 'white' }"
      >
        ХП:
      </span>

      <div ref="parent_block" class="detail-statistic-block">
        <div
          ref="detail_child_hp"
          class="detail-statistic-child"
          :style="{
            background: stat.HP < 125 ? 'red' : 'green',
          }"
        >
          <div>
            <span
              class="detail-numbers"
              :style="{ color: statTheme === true ? 'black' : 'white' }"
            >
              {{ stat.HP }}
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

      <div ref="parent_block" class="detail-statistic-block">
        <div
          ref="detail_child_attack"
          class="detail-statistic-child"
          :style="{
            background: stat.Attack < 125 ? 'red' : 'green',
          }"
        >
          <div>
            <span
              class="detail-numbers"
              :style="{ color: statTheme === true ? 'black' : 'white' }"
            >
              {{ stat.Attack }}
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

      <div ref="parent_block" class="detail-statistic-block">
        <div
          ref="detail_child_specialAttack"
          class="detail-statistic-child"
          :style="{
            background: stat.SpecialAttack < 125 ? 'red' : 'green',
          }"
        >
          <div>
            <span
              class="detail-numbers"
              :style="{ color: statTheme === true ? 'black' : 'white' }"
            >
              {{ stat.SpecialAttack }}
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

      <div ref="parent_block" class="detail-statistic-block">
        <div
          ref="detail_child_defense"
          class="detail-statistic-child"
          :style="{
            background: stat.Defense < 125 ? 'red' : 'green',
          }"
        >
          <div>
            <span
              class="detail-numbers"
              :style="{ color: statTheme === true ? 'black' : 'white' }"
            >
              {{ stat.Defense }}
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

      <div ref="parent_block" class="detail-statistic-block">
        <div
          ref="detail_child_specialDefense"
          class="detail-statistic-child"
          :style="{
            background: stat.SpecialDefense < 125 ? 'red' : 'green',
          }"
        >
          <div>
            <span
              class="detail-numbers"
              :style="{ color: statTheme === true ? 'black' : 'white' }"
            >
              {{ stat.SpecialDefense }}
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

      <div ref="parent_block" class="detail-statistic-block">
        <div
          ref="detail_child_speed"
          class="detail-statistic-child"
          :style="{
            background: stat.Speed < 125 ? 'red' : 'green',
          }"
        >
          <div>
            <span
              class="detail-numbers"
              :style="{ color: statTheme === true ? 'black' : 'white' }"
            >
              {{ stat.Speed }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.schetForChild(this.$refs.detail_child_hp, this.stat.HP)
    this.schetForChild(this.$refs.detail_child_attack, this.stat.Attack)
    this.schetForChild(
      this.$refs.detail_child_specialAttack,
      this.stat.SpecialAttack
    )
    this.schetForChild(this.$refs.detail_child_defense, this.stat.Defense)
    this.schetForChild(
      this.$refs.detail_child_specialDefense,
      this.stat.SpecialDefense
    )
    this.schetForChild(this.$refs.detail_child_speed, this.stat.Speed)
  },

  computed: {
    statTheme() {
      return this.$store.getters['theme/CHANGETHEME']
    },

    stat() {
      return this.$store.getters['pokemon/STATPOKEMONPARAMS']
    },
  },

  methods: {
    schetForChild(child, param) {
      child.style.width = `${param}px`
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
    max-width: 100vw;
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
      width: 220px; //220px
      background: $w;

      .detail-statistic-child {
        //width: 65%;
        width: 0;
        background: green;
        height: inherit;
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
