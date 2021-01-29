<template>
  <div class="AppInfo-main-page">
    <div class="AppInfo-name-block">
      <span class="name-block">Последнее сравнение</span>
    </div>

    <div
      class="pokemon-main-versus-block"
      :style="{
        'background-image': `url(${require('../../assets/img/pockemons/types_background/JPG/electric.jpg')})`,
      }"
    >
      <div class="pokemon-main">
        <div
          class="first-pokemon pockemons-block"
          :style="{
            'background-image': `url(${require('../../assets/img/pockemons/first_generation/zapdos.png')})`,
          }"
        ></div>
        <div class="versus-block">
          <span class="versus-txt">VS</span>
        </div>
        <div
          class="second-pokemon pockemons-block"
          :style="{
            'background-image': `url(${require('../../assets/img/pockemons/first_generation/pikachu.png')})`,
          }"
        ></div>
      </div>

      <div class="pokemon-info-block">
        <span class="info-txt"
          >Zapdos оказался лучше Pikachu в параметре "HP"</span
        >
      </div>
    </div>

    <div class="versus-count-block info-vs-blocks">
      <span class="count-txt">Количество сравнений: 10</span>
    </div>

    <div class="best-race-block info-vs-blocks">
      <span class="race-txt">Преобладающая расса:</span>
      <div
        class="race-block"
        :style="{
          'background-image': `url(
                ${require('../../assets/img/icons/dragon.png')}
              )`,
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.AppInfo-main-page {
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .AppInfo-name-block {
    margin: 0 auto;
    justify-content: center;
    align-items: center;

    .name-block {
      font-size: $f_size3;
      font-family: $Orienta;
    }
  }

  .pokemon-main-versus-block {
    height: $tag_w;
    width: 100vw;
    margin-top: 20px;
    border: 1px solid black;
    background-position: center;
    background-size: cover;

    .pokemon-main {
      margin: 10px auto;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .pockemons-block {
        height: $height_btn;
        width: $width_btn;
        background-position: center;
        background-size: cover;
        border: $b_black;
      }

      .versus-block {
        display: flex;
        justify-content: center;
        align-items: center;

        .versus-txt {
          font-size: $link_hAndw;
          font-family: $Orienta;
          text-align: center;
        }
      }
    }

    .pokemon-info-block {
      margin: 0 auto;
      max-width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;

      .info-txt {
        font-size: $f_size2;
        font-family: $Orienta;
      }
    }
  }

  .versus-count-block {
    margin: 10px;
    .count-txt {
      font-size: 25px;
      font-family: $Orienta;
    }
  }

  .best-race-block {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .race-txt {
      font-size: 20px;
      font-family: $Orienta;
      margin: 10px;
    }

    .race-block {
      height: $b_hAndw;
      width: $b_hAndw;
      border-radius: $f_size1;
      background-size: cover;
      background-position: center;
    }
  }
}
</style>
