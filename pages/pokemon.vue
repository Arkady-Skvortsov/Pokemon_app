<template>
	<div 
	    class="pokemon-page-block" 
	    :style="{'background': pokTheme === false ? `linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.833333) 0.01%, rgba(255, 255, 255, 0.829076) 0.02%, rgba(255, 255, 255, 0.786052) 0.03%, rgba(255, 255, 255, 0) 100%), url(${require('../assets/img/pockemons/types_background/JPG/' + pokemon.PokemonTypeBackground)})` : `linear-gradient(180deg, #000000 0%, rgba(12, 12, 12, 0.953125) 0.01%, rgba(255, 255, 255, 0) 100%), url(${require('../assets/img/pockemons/types_background/JPG/' + pokemon.PokemonTypeBackground)})`,
	        'background-position': 'center', 
	        'background-size': 'cover'
	    }"
	>
		<div class="pokemon-navbar-block">
			<button 
			    class="block-back"
                :style="{'background': pokTheme === true ? 'black' : 'white'}"
			>
				<nuxt-link
                   to="/"
                   exact
                   no-prefetch
                   tag="i"
                   class="material-icons Arr"
                   :style="{'color': pokTheme === true ? 'white' : 'black'}"
				> 
				   arrow_back	
				</nuxt-link>
			</button>

			<div 
			    class="block-type" 
			    :style="{
			    	  'background-image': `url(${require('../assets/img/icons/' + pokemon.PokemonIcon)})`, 
			          'background-position': 'center', 
			          'background-size': 'cover', 
			          'border': pokTheme === true ? '1px solid black' : '1px solid white'
			    }"
			>
			    	
			</div>
		</div>

		<div 
		    class="pokemon-avatar-block" 
		    :style="{'background-image': `url(${require('../assets/img/pockemons/first_generation/' + pokemon.PokemonBackground)})`,'background-size': 'cover', 
		        'background-position': 'center', 
		        'border': pokTheme === true ? '1px solid black' : '1px solid white'
		    }"
		>

		</div>

		<div class="pokemon-little-information-block">
			<div class="pokemon__height blocks">
				<span :style="{color: pokTheme === true ? 'black' : 'white'}">Height: {{pokemon.PokemonHeight}}</span><!-- m -->
			</div>
			<div class="pokemon__name blocks">
				<span :style="{color: pokTheme === true ? 'black' : 'white'}">Name: {{pokemon.PokemonName}}</span>
			</div>
			<div class="pokemon__weight blocks">
				<span :style="{color: pokTheme === true ? 'black' : 'white'}">Weight: {{pokemon.PokemonWeight}}</span><!-- kg -->
			</div>
			<div class="pokemon__type blocks">
				<span :style="{color: pokTheme === true ? 'black' : 'white'}">Type: {{pokemon.PokemonType}}</span>
			</div>
		</div>

        <button 
            class="change-information-button" 
            @click="Change"
            :style="{background: pokTheme === true ? 'black' : 'white', color: pokTheme === true ? 'white' : 'black'}"
        >
        	{{txt}}
        </button>

        <div class="pokemon-content-container">
        	<keep-alive> <!-- <transition></transition> -->
        	    <component :is="change"></component>
            </keep-alive> 
        </div>
        
        <nuxt-link
           to="/versus"
           tag="button"
           class="surprise-function-block"
           :style="{background: pokTheme === true ? 'black' : 'white', color: pokTheme === true ? 'white' : 'black'}"
        >
        	Сравнить
        </nuxt-link>
	</div>
</template>

<script>
    import About from "../components/About.vue";
    import Stat from "../components/Stat.vue"

	export default {
        data() {
        	return {
        		txt: "Параметры"
        	}
        },

		computed: {
            change() {
            	return this.txt === "Параметры" ? "About" : "Stat"
            },

            pokemon() {
            	return this.$route.query.id
            },

            pokTheme() {
            	return this.$store.getters['theme/CHANGETHEME']
            }
		},

		methods: {
			Change() {
				this.txt === "Параметры" ? this.txt = "Описание" : this.txt = "Параметры"
			}
		},

		components: {
			About,
			Stat
		}
	}
</script>

<style lang="scss">
   @media only screen and (min-device-width: 320px) {
	.pokemon-page-block {
		width: 100vw;
		height: 100vh;
		overflow-x: none;
		position: absolute;

		.pokemon-navbar-block {
			max-width: 95vw;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 15px auto;

			.block-back {
               height: 45px;
               width: 45px;
               border: 0;
               background: $w;
               border-radius: 25px;
               cursor: pointer;
               transition: .8s;
               -o-transiiton: .8s;
               -moz-transition: .8s;
               -webkit-transition: .8s;

               &:hover {
               	  opacity: .7;
               }

               .Arr {
               	  font-size: 40px;
               	  font-wegiht: bold;
               }
			}

			.block-type {
				height: 45px;
				width: 45px;
				border: $b_white;
				cursor: pointer;
				border-radius: 25px;
				transition: .9s;
				-o-transition: .9s;
                -moz-transition: .9s;
                -webkit-transition: .9s;

                &:hover {
                	transform: scale(1.1);
                }
			}
		}

		.pokemon-avatar-block {
			width: 75px;
			height: 75px;
			border: $b_white;
			margin: auto;
			cursor: pointer;
			transition: .9s;
			-o-transition: .9s;
			-moz-transition: .9s;
			-webkti-transition: .9s;

			&:hover {
              box-shadow: 0 0 20px $w;
			}
		}

		.pokemon-little-information-block {
			display: flex;
			justify-content: space-around;
            align-items: center; 
			max-width: 100vw;
			margin: 15px auto;
            
            .blocks {
            	font-size: $f_size2;
            	font-family: $Orienta;
            	color: $w;
            }
		}

		.change-information-button {
            @include two_button(40px auto);
		}

		.pokemon-content-container {
			max-width: 100vw;
			height: 200px;
			margin: -10px auto;
		}

		.surprise-function-block {
			 @include two_button(15px auto);

			 transition: .8s;
			 -o-transition: .8s;
			 -moz-transition: .8s;
			 -webkit-transition: .8s;

			 &:hover {
                background: red;
			 }
		}
	}
}
</style>	