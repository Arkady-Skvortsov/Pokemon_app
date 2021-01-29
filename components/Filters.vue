<template>
  <div
    class="pokemon-filters-block"
    :style="{ background: theme === true ? 'black' : 'white' }"
  >
    <div class="filter-navbar-block">
      <button
        class="filter-back-block"
        :style="{ background: theme === true ? 'white' : 'black' }"
      >
        <i
          class="material-icons arrow_block"
          :style="{ color: theme === true ? 'black' : 'white' }"
          @click="ClosePage"
          >arrow_back</i
        >
      </button>

      <div class="filter-name-block">
        <span
          class="name"
          :style="{ color: theme === true ? 'white' : 'black' }"
          >Фильтры</span
        >
      </div>
    </div>

    <div class="some-settings-block">
      <div class="main-wrap-settings">
        <!-- v-for будет директива тут, впринципе так же, как и будут выскакивать его дивы -->

        <div class="settings-index settings">
          <div>
            <span
              class="settings-title"
              :style="{ color: theme === true ? 'white' : 'black' }"
              >По индексу</span
            >
          </div>
          <div
            class="settings-choice-block"
            @click="shows = shows === false ? true : false"
            :style="{
              background: theme === true ? 'black' : 'white',
              border: theme === true ? '1px solid white' : '1px solid black',
            }"
          >
            <span
              class="settings-choice"
              :style="{ color: theme === true ? 'white' : 'black' }"
              >{{ idxStandart }}</span
            >
            <i
              class="material-icons arrow_drop"
              :style="{
                transform: shows === true ? 'rotate(0deg)' : 'rotate(180deg)',
                color: theme === true ? 'white' : 'black',
              }"
              >arrow_drop_down</i
            >
          </div>
          <transition-group name="settings-choice-anim" v-if="shows">
            <div
              class="settings-choice-block"
              v-for="(sIdx, index) in settingsIndex"
              :key="sIdx.id"
              @click="SortByIndex(index)"
              :style="{
                background: theme === true ? 'white' : 'black',
                border: theme === true ? '1px solid black' : '1px solid white',
              }"
            >
              <!-- Тут тоже будет своеобразный v-for для выбора категорий или условия -->
              <span
                class="settings-choice txt-choice"
                :style="{ color: theme === true ? 'black' : 'white' }"
                >{{ sIdx.name }}</span
              >
            </div>
          </transition-group>
        </div>

        <div class="settings-name settings">
          <div>
            <span
              class="settings-title"
              :style="{ color: theme === true ? 'white' : 'black' }"
              >По имени</span
            >
          </div>
          <div
            class="settings-choice-block"
            @click="shows2 = shows2 === false ? true : false"
            :style="{
              background: theme === true ? 'black' : 'white',
              border: theme === true ? '1px solid white' : '1px solid black',
            }"
          >
            <span
              class="settings-choice"
              :style="{ color: theme === true ? 'white' : 'black' }"
              >{{ nameStandart }}</span
            >
            <i
              class="material-icons arrow_drop"
              :style="{
                transform: shows2 === true ? 'rotate(0deg)' : 'rotate(180deg)',
                color: theme === true ? 'white' : 'black',
              }"
              >arrow_drop_down</i
            >
          </div>
          <transition-group name="settings-choice-anim" v-if="shows2">
            <div
              class="settings-choice-block"
              v-for="(Name, index) in settingsName"
              :key="Name.id"
              @click="SortByName(index)"
              :style="{
                background: theme === true ? 'white' : 'black',
                border: theme === true ? '1px solid black' : '1px solid white',
              }"
            >
              <span
                class="settings-choice txt-choice"
                :style="{ color: theme === true ? 'black' : 'white' }"
                >{{ Name.name }}</span
              >
            </div>
          </transition-group>
        </div>

        <div class="settings-generation settings">
          <div>
            <span
              class="settings-title"
              :style="{ color: theme === true ? 'white' : 'black' }"
              >По Покол.</span
            >
          </div>
          <div
            class="settings-choice-block"
            @click="shows4 = shows4 === false ? true : false"
            :style="{
              background: theme === true ? 'black' : 'white',
              border: theme === true ? '1px solid white' : '1px solid black',
            }"
          >
            <span
              class="settings-choice"
              :style="{ color: theme === true ? 'white' : 'black' }"
              >{{ generationStandart }}</span
            >
            <i
              class="material-icons arrow_drop"
              :style="{
                transform: shows4 === true ? 'rotate(0deg)' : 'rotate(180deg)',
                color: theme === true ? 'white' : 'black',
              }"
              >arrow_drop_down</i
            >
          </div>
          <transition-group name="settings-choice-anim" v-if="shows4">
            <div
              class="settings-choice-block"
              v-for="(Generation, index) in settingsGeneration"
              :key="Generation.id"
              @click="SortByGeneration(index)"
              :style="{
                background: theme === true ? 'white' : 'black',
                border: theme === true ? '1px solid black' : '1px solid white',
              }"
            >
              <span
                class="settings-race-name"
                :style="{ color: theme === true ? 'black' : 'white' }"
                >{{ Generation.name }}</span
              >
            </div>
          </transition-group>
        </div>

        <div class="settings-rasa settings">
          <div>
            <span
              class="settings-title"
              :style="{ color: theme === true ? 'white' : 'black' }"
              >По рассе</span
            >
          </div>
          <div
            class="settings-choice-block"
            @click="shows3 = shows3 === false ? true : false"
            :style="{
              background: theme === true ? 'black' : 'white',
              border: theme === true ? '1px solid white' : '1px solid black',
            }"
          >
            <span
              class="settings-choice"
              :style="{ color: theme === true ? 'white' : 'black' }"
              >{{ raceStandart }}</span
            >
            <i
              class="material-icons arrow_drop"
              :style="{
                transform: shows3 === true ? 'rotate(0deg)' : 'rotate(180deg)',
                color: theme === true ? 'white' : 'black',
              }"
              >arrow_drop_down</i
            >
          </div>
          <transition-group name="settings-choice-anim" v-if="shows3">
            <div
              class="settings-choice-race-block"
              v-for="(Race, index) in settingsRace"
              :key="Race.id"
              @click="SortByRace(index)"
              :style="{
                background: theme === true ? 'white' : 'black',
                border: theme === true ? '1px solid black' : '1px solid white',
              }"
            >
              <span
                class="settings-race-name"
                :style="{ color: theme === true ? 'black' : 'white' }"
                >{{ Race.race }}</span
              >
              <div
                class="choice-pokemon-icon"
                :style="{
                  'background-image': `url(${require('../assets/img/icons/' +
                    Race.icon)})`,
                  'background-size': 'cover',
                  'background-position': 'center',
                }"
              ></div>
            </div>
          </transition-group>
        </div>
      </div>

      <div class="settings-with-numbers-block">
        <div class="HP-settings-block stat-settings-blocks">
          <div>
            <span
              class="stat-settings-txt"
              :style="{ color: theme === true ? 'white' : 'black' }"
              >По HP</span
            >
          </div>

          <div class="range-slider-block">
            <input
              type="range"
              class="range-slider health-slider"
              min="0"
              max="250"
              step="10"
              v-model.number="health.minHealth"
              @change="changeParams($event)"
            />
            <input
              type="range"
              class="range-slider health-slider"
              min="0"
              max="250"
              step="10"
              v-model.number="health.maxHealth"
              @change="changeParams($event)"
            />
          </div>

          <div class="range-stat-block">
            <div>
              <span
                class="range-min-stat-txt range-stat-txt"
                :style="{ color: theme === true ? 'white' : 'black' }"
                >{{ health.minHealth }}</span
              >
            </div>
            <div>
              <span
                class="range-max-stat-txt range-stat-txt"
                :style="{ color: theme === true ? 'white' : 'black' }"
                >{{ health.maxHealth }}</span
              >
            </div>
          </div>
        </div>
        <div class="Attack-settings-block stat-settings-blocks">
          <div>
            <span
              class="stat-settings-txt"
              :style="{ color: theme === true ? 'white' : 'black' }"
              >По Атаке</span
            >
          </div>

          <div class="range-slider-block">
            <input
              type="range"
              class="range-slider attack-slider"
              min="0"
              max="250"
              step="10"
              v-model.number="attack.minAttack"
              @change="changeParams($event)"
            />
            <input
              type="range"
              class="range-slider attack-slider"
              min="0"
              max="250"
              step="10"
              v-model.number="attack.maxAttack"
              @change="changeParams($event)"
            />
          </div>

          <div class="range-stat-block">
            <div>
              <span
                class="range-min-stat-txt range-stat-txt"
                :style="{ color: theme === true ? 'white' : 'black' }"
                >{{ attack.minAttack }}</span
              >
            </div>
            <div>
              <span
                class="range-max-stat-txt range-stat-txt"
                :style="{ color: theme === true ? 'white' : 'black' }"
                >{{ attack.maxAttack }}</span
              >
            </div>
          </div>
        </div>
        <div class="SpecialAttack-settings-block stat-settings-blocks">
          <div>
            <span
              class="stat-settings-txt"
              :style="{ color: theme === true ? 'white' : 'black' }"
              >По Спец.Атаке</span
            >
          </div>

          <div class="range-slider-block">
            <input
              type="range"
              class="range-slider special-attack-slider"
              min="0"
              max="250"
              step="10"
              v-model.number="specialAttack.minSpecialAttack"
              @change="changeParams($event)"
            />
            <input
              type="range"
              class="range-slider special-attack-slider"
              min="0"
              max="250"
              step="10"
              v-model.number="specialAttack.maxSpecialAttack"
              @change="changeParams($event)"
            />
          </div>

          <div class="range-stat-block">
            <div>
              <span
                class="range-min-stat-txt range-stat-txt"
                :style="{ color: theme === true ? 'white' : 'black' }"
                >{{ specialAttack.minSpecialAttack }}</span
              >
            </div>
            <div>
              <span
                class="range-max-stat-txt range-stat-txt"
                :style="{ color: theme === true ? 'white' : 'black' }"
                >{{ specialAttack.maxSpecialAttack }}</span
              >
            </div>
          </div>
        </div>
        <div class="Defense-settings-block stat-settings-blocks">
          <div>
            <span
              class="stat-settings-txt"
              :style="{ color: theme === true ? 'white' : 'black' }"
              >По Защите</span
            >
          </div>

          <div class="range-slider-block">
            <input
              type="range"
              class="range-slider defense-slider"
              min="0"
              max="250"
              step="10"
              v-model.number="defense.minDefense"
              @change="changeParams($event)"
            />
            <input
              type="range"
              class="range-slider defense-slider"
              min="0"
              max="250"
              step="10"
              v-model.number="defense.maxDefense"
              @change="changeParams($event)"
            />
          </div>

          <div class="range-stat-block">
            <div>
              <span
                class="range-min-stat-txt range-stat-txt"
                :style="{ color: theme === true ? 'white' : 'black' }"
                >{{ defense.minDefense }}</span
              >
            </div>
            <div>
              <span
                class="range-max-stat-txt range-stat-txt"
                :style="{ color: theme === true ? 'white' : 'black' }"
                >{{ defense.maxDefense }}</span
              >
            </div>
          </div>
        </div>
        <div class="SpecialDefense-settings-block stat-settings-blocks">
          <div>
            <span
              class="stat-settings-txt"
              :style="{ color: theme === true ? 'white' : 'black' }"
              >По Спец.Защите</span
            >
          </div>

          <div class="range-slider-block">
            <input
              type="range"
              class="range-slider special-defense-slider"
              min="0"
              max="250"
              step="10"
              v-model.number="specialDefense.minSpecialDefense"
              @change="changeParams($event)"
            />
            <input
              type="range"
              class="range-slider special-defense-slider"
              min="0"
              max="250"
              step="10"
              v-model.number="specialDefense.maxSpecialDefense"
              @change="changeParams($event)"
            />
          </div>

          <div class="range-stat-block">
            <div>
              <span
                class="range-min-stat-txt range-stat-txt"
                :style="{ color: theme === true ? 'white' : 'black' }"
                >{{ specialDefense.minSpecialDefense }}</span
              >
            </div>
            <div>
              <span
                class="range-max-stat-txt range-stat-txt"
                :style="{ color: theme === true ? 'white' : 'black' }"
                >{{ specialDefense.maxSpecialDefense }}</span
              >
            </div>
          </div>
        </div>
        <div class="Speed-settings-block stat-settings-blocks">
          <div>
            <span
              class="stat-settings-txt"
              :style="{ color: theme === true ? 'white' : 'black' }"
              >По Скорости</span
            >
          </div>

          <div class="range-slider-block">
            <input
              type="range"
              class="range-slider speed-slider"
              min="0"
              max="250"
              step="10"
              v-model.number="speed.minSpeed"
              @change="changeParams($event)"
            />
            <input
              type="range"
              class="range-slider speed-slider"
              min="0"
              max="250"
              step="10"
              v-model.number="speed.maxSpeed"
              @change="changeParams($event)"
            />
          </div>

          <div class="range-stat-block">
            <div>
              <span
                class="range-min-stat-txt range-stat-txt"
                :style="{ color: theme === true ? 'white' : 'black' }"
                >{{ speed.minSpeed }}</span
              >
            </div>
            <div>
              <span
                class="range-max-stat-txt range-stat-txt"
                :style="{ color: theme === true ? 'white' : 'black' }"
                >{{ speed.maxSpeed }}</span
              >
            </div>
          </div>
        </div>
        <div class="Height-settings-block stat-settings-blocks">
          <div>
            <span
              class="stat-settings-txt"
              :style="{ color: theme === true ? 'white' : 'black' }"
              >По Росту</span
            >
          </div>

          <div class="range-slider-block">
            <input
              type="range"
              class="range-slider height-slider"
              min="0"
              max="250"
              step="10"
              v-model.number="height.minHeight"
              @change="changeParams($event)"
            />
            <input
              type="range"
              class="range-slider height-slider"
              min="0"
              max="250"
              step="10"
              v-model.number="height.maxHeight"
              @change="changeParams($event)"
            />
          </div>

          <div class="range-stat-block">
            <div>
              <span
                class="range-min-stat-txt range-stat-txt"
                :style="{ color: theme === true ? 'white' : 'black' }"
                >{{ height.minHeight }}</span
              >
            </div>
            <div>
              <span
                class="range-max-stat-txt range-stat-txt"
                :style="{ color: theme === true ? 'white' : 'black' }"
                >{{ height.maxHeight }}</span
              >
            </div>
          </div>
        </div>
        <div class="Weight-settings-block stat-settings-blocks">
          <div>
            <span
              class="stat-settings-txt"
              :style="{ color: theme === true ? 'white' : 'black' }"
              >По Весу</span
            >
          </div>

          <div class="range-slider-block">
            <input
              type="range"
              class="range-slider weight-slider"
              min="0"
              max="250"
              step="10"
              v-model.number="weight.minWeight"
              @change="changeParams($event)"
            />
            <input
              type="range"
              class="range-slider weight-slider"
              min="0"
              max="250"
              step="10"
              v-model.number="weight.maxWeight"
              @change="changeParams($event)"
            />
          </div>

          <div class="range-stat-block">
            <div>
              <span
                class="range-min-stat-txt range-stat-txt"
                :style="{ color: theme === true ? 'white' : 'black' }"
                >{{ weight.minWeight }}</span
              >
            </div>
            <div>
              <span
                class="range-max-stat-txt range-stat-txt"
                :style="{ color: theme === true ? 'white' : 'black' }"
                >{{ weight.maxWeight }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',

  props: ['pokemons2'],

  emits: ['SortByRace', 'changeParams'],

  data: () => ({
    shows: false,
    shows2: false,
    shows3: false,
    shows4: false,
    health: {
      minHealth: 0,
      maxHealth: 250,
    },
    attack: {
      minAttack: 0,
      maxAttack: 250,
    },
    specialAttack: {
      minSpecialAttack: 0,
      maxSpecialAttack: 250,
    },
    defense: {
      minDefense: 0,
      maxDefense: 250,
    },
    specialDefense: {
      minSpecialDefense: 0,
      maxSpecialDefense: 250,
    },
    speed: {
      minSpeed: 0,
      maxSpeed: 250,
    },

    height: {
      //Пока что временные параметры
      minHeight: 0,
      maxHeight: 250,
    },

    weight: {
      minWeight: 0,
      maxWeight: 250,
    },

    pokemons3: [],

    idxStandart: 'Стандартно',
    nameStandart: 'Стандартно',
    raceStandart: 'Стандартно',
    generationStandart: 'Стандартно',
  }),

  computed: {
    theme() {
      return this.$store.getters['theme/CHANGETHEME']
    },

    settingsIndex() {
      return this.$store.getters['settings/SETTINGSINDEX']
    },

    settingsName() {
      return this.$store.getters['settings/SETTINGSNAME']
    },

    settingsRace() {
      return this.$store.getters['settings/SETTINGSRACE']
    },

    settingsGeneration() {
      return this.$store.getters['settings/SETTINGSGENERATION']
    },

    POKEMONS() {
      return this.pokemons2
    },

    FilteredPokemons() {
      return this.POKEMONS
    },

    openPage() {
      return this.$store.getters['theme/SETOPENPAGE']
    },

    Tags() {
      return this.$store.getters['pokemon/TAGS']
    },
  },

  methods: {
    SortByIndex(idx) {
      const name = 'По индексу'

      switch (idx) {
        case 0:
          this.pokemons3.sort((a, b) => a.id - b.id)

          this.idxStandart = this.settingsIndex[0].name
          break
        case 1:
          this.pokemons3.sort((a, b) => b.id - a.id)

          this.idxStandart = this.settingsIndex[1].name
          break
      }

      if (this.Tags.includes(name)) {
        return
      } else {
        this.$store.dispatch('pokemon/SETTAG', {
          name,
          func: this.SortByIndex,
        })
      }

      console.log(this.Tags, arguments)
    },

    SortByName(idx) {
      const name = 'По имени'

      switch (idx) {
        case 0:
          this.pokemons3.sort((a, b) =>
            a.PokemonName.localeCompare(b.PokemonName)
          )

          this.nameStandart = this.settingsName[0].name

          break
        case 1:
          this.pokemons3.sort((a, b) =>
            b.PokemonName.localeCompare(a.PokemonName)
          )

          this.nameStandart = this.settingsName[1].name

          break
      }

      if (this.Tags.includes(name)) {
        return
      } else {
        this.$store.dispatch('pokemon/SETTAG', {
          name,
          func: this.SortByName,
        })
      }

      console.log(this.Tags)
    },

    SortByRace(idx) {
      this.$emit('SortByRace2', idx, this.raceStandart, this.settingsRace)
    },

    changeParams(e) {
      this.$emit(
        'changeParams',
        e,
        this.health,
        this.attack,
        this.specialAttack,
        this.defense,
        this.specialDefense,
        this.speed,
        this.height,
        this.weight
      )
    },

    SortByGeneration(idx) {
      switch (idx) {
        case 0:
          this.pokemons3.sort((a, b) =>
            a.generation.localeCompare(b.generation)
          )
          break

        case 1:
          this.pokemons3.sort((a, b) =>
            b.generation.localeCompare(a.generation)
          )
          break
      }
    },

    ClosePage() {
      this.$store.dispatch('theme/SETOPENPAGE', false)
    },
  },

  mounted() {
    this.pokemons3 = this.pokemons2
  },
}
</script>

<style lang="scss">
@media only screen and (min-device-width: 360px) {
  .pokemon-filters-block {
    height: 100vh;
    width: 100vw;
    background: $w;
    overflow-x: hidden;
    position: absolute;
    z-index: 4;

    .filter-navbar-block {
      max-width: 240px;
      margin: 10px 10px;
      //height: 45px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .filter-back-block {
        height: 45px;
        width: 45px;
        cursor: pointer;
        border: 0;
        background: $b;
        border-radius: 25px;
        transition: 0.8s;
        -o-transition: 0.8s;
        -moz-transition: 0.8s;
        -webkit-transition: 0.8s;

        font-size: 25px;
        font-weight: bold;
        text-align: center;
        color: $w;

        &:hover {
          transform: translateX(-10px);
          box-shadow: 0 0 25px $b;
        }
      }

      .filter-name-block {
        .name {
          font-size: 40px;
          font-family: $OpenSans;
        }
      }
    }

    .some-settings-block {
      max-width: 100vw;
      margin: 0 auto;

      .main-wrap-settings {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;

        .settings {
          height: 60px;
          width: 90px;

          .settings-title {
            font-size: 23px;
            font-family: $OpenSans;
          }

          .settings-choice-block {
            border: 1px solid $b;
            height: 25px;
            background: $b;
            width: 101.5px;
            cursor: pointer;
            display: flex;
            flex-direction: center;
            justify-content: space-around;
            align-items: center;

            .settings-choice {
              font-size: 16px;
              font-family: $OpenSans;
            }

            .txt-choice {
              font-size: 12px;
              font-family: $OpenSans;
            }

            .arrow_drop {
              transition: 0.8s;
              -o-transition: 0.8s;
              -webkit-transition: 0.8s;
              -moz-transition: 0.8s;
            }
          }

          .settings-choice-race-block {
            border: $b_black;
            height: 25px;
            width: 101.5px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: $w;

            .settings-race-name {
              font-size: 12px;
              font-family: $OpenSans;
            }

            .choice-pokemon-icon {
              height: 15px;
              width: 15px;
              border-radius: $icon_radius;
              border: $b_white;
            }
          }
        }
      }
    }

    .settings-with-numbers-block {
      max-width: 200px;
      margin: 45px auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .stat-settings-blocks {
        height: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        .stat-settings-txt {
          text-align: center;
          font-size: 25px;
          font-family: $OpenSans;
        }

        .range-stat-block {
          width: 200px;
          margin: 10px auto;
          display: flex;
          justify-content: space-around;
          align-items: center;

          .range-stat-txt {
            font-size: 15px;
            font-family: $OpenSans;
          }
        }

        .range-slider-block {
          width: 200px;
          top: 10px;
          left: 35px;
          position: relative;
        }

        .range-slider-block svg,
        .range-slider-block input[type='range'] {
          left: 0;
          bottom: 0;
          position: absolute;
        }

        input[type='range']::-webkit-slider-thumb {
          height: 15px;
          -webkit-appearance: none;
          width: 15px;
          z-index: 1;
          color: black;
          position: relative;
          border-radius: 10px;
          cursor: pointer;
          margin-top: -8px;
        }

        input[type='range']::-moz-range-thumb {
          height: 15px;
          width: 15px;
          border-radius: 10px;
          cursor: pointer;
          z-index: 2;
          position: relative;
          margin-top: -8px;
        }

        input[type='range']::-ms-thumb {
          height: 15px;
          width: 15px;
          border-radius: 10px;
          cursor: pointer;
          z-index: 2;
          position: relative;
          margin-top: -8px;
        }

        input[type='range']::-webkit-slider-runnable-track {
          width: 100%;
          height: 2px;
          cursor: pointer;
          background: green;
        }

        input[type='range']:focus::-webkit-slider-runnable-track {
          background: green;
        }

        input[type='range']::-moz-range-track {
          width: 100%;
          height: 2px;
          cursor: pointer;
          background: green;
        }

        input[type='range']::-ms-track {
          width: 100%;
          height: 2px;
          cursor: pointer;
          background: transparent;
          border-color: transparent;
          border-width: 16px 0;
          color: transparent;
        }

        input[type='range']::-ms-fill-lower {
          background: green;
        }

        input[type='range']:focus::-ms-fill-lower {
          background: green;
        }

        input[type='range']::-ms-fill-upper {
          background: green;
        }

        input[type='range']:focus::-ms-fill-upper {
          background: green;
        }
      }
    }
  }

  .settings-choice-anim-enter {
    opacity: 0;
  }

  .settings-choice-anim-enter-active,
  .settings-choice-anim-leave-active {
    transition: opacity 0.8s;
  }

  .settings-choice-anim-enter-to {
    opacity: 1;
  }

  .settings-choice-anim-leave-to {
    opacity: 0;
  }
}
</style>
