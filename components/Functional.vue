<template>
	<div class="functional-block-main">
		<div class="functional-block">
		    <button class="functional-block__change-theme" @click="ChangeTheme" :class="{changeBorder: theme}">
		        <i 
		           class="material-icons sun" 
		           ref="icon" 
		           :class="{changeText: theme, moonLight: theme, sun_rotate: !theme, moon_rotate: theme}"
		        >{{icon}}</i>
	        </button>
            
            <div class="functional-block__search-block">
            	<input 
            	    v-model="name" 
            	    type="text" 
            	    class="search-block__functional"
            	    :class="{changeBorder: theme, changeText: theme, show_search_block: searchShow}" 
            	    placeholder="Найдите покемона:)" 
            	/>
            </div>

            <button class="functional-block__icon-block"
                    :class="{changeBorder: theme}"
                    @click="SearchShow"
            >
            	<i class="material-icons" :class="{changeText: theme}">search</i>
            </button>
        </div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				name: '' //Это я еще оставлю
			}
		},

		emits: ['ChageTheme'],
        
        methods: {
		   ChangeTheme() {
               this.$emit('ChangeTheme', this.icon) 
	       },

	       SearchShow() {
	       	   if(this.searchShow === true) {
	              this.$store.dispatch('theme/CHANGES', false)
	       	   } else {
                  this.$store.dispatch('theme/CHANGES', true)
	       	   }
	       }
	    },

	    computed: {
	    	theme() {
	    		return this.$store.getters['theme/CHANGETHEME']
	    	},

	    	icon() {
	    		return this.$store.getters['theme/CHANGEICON']
	    	},

	    	searchShow() {
	    		return this.$store.getters['theme/CHANGESEARCH']
	    	}
	    }
	}
</script>
<style lang="scss">
    .functional-block-main {
    	max-width: 100vw;
        margin: 5px auto;
    }

    .functional-block {
    	display: flex;
    	justify-content: space-around;
    	align-items: center;
    }

	.functional-block__change-theme {
		width: 45px;
		height: 45px;
		cursor: pointer;
		background: $w;
        border: $b_black;
        transition: .7s;
        -o-transition: .7s;
        -moz-transition: .7s;
        -webkit-transition: .7s;
	}

	.sun {
		font-size: 35px;
		color: $sun_color;
		margin-top: 5px;
		text-shadow: 0 0 20px $sun_color;
	}

	.functional-block__search-block {} 

	.search-block__functional {
		max-width: 250px;
		height: 45px;
		opacity: 0;
		border: $b_black;
		font-size: 25px;
		font-family: $OpenSans;
		transition: .7s;
		-o-transition: .7s;
		-webkit-transition: .7s;
		-moz-transition: .7s;
	}

	.functional-block__icon-block {
		width: 45px;
		height: 45px;
		background: $w;
		cursor: pointer;
		font-size: 25px;
		border: $b_black;
		transition: .7s;
		-o-transition: .7s;
		-webkit-transition: .7s;
		-moz-transition: .7s;
	}

	.show_search_block {
	 	animation: show_search 1s ease-in 1;
	 	opacity: 1;
	}

	@keyframes show_search {
		0% {
			opacity: .2;	
		}

		25% {
            opacity: .4; 
		}

		50% { 
            opacity: .6; 
		}

 		75% {
            opacity: 8; 
   		}

		100% {
            opacity: 1; 
		}
	}

	.sun_rotate {
		animation: sunR 2s linear infinite;
	}

	@keyframes sunR {
		0% {
		  transform: rotate(45deg);	
		}

		25% {
		  transform: rotate(90deg);
		}

		50% {
		  transform: rotate(180deg);	 
		}

		75% {
		  transform: rotate(270deg);	
		}

		100% {
		  transform: rotate(360deg);
		}
	}

	.moon_rotate {
		animation: MoonR 2s linear infinite;
	}

	@keyframes MoonR {
		0% {
		  transform: rotate(0deg);
		}

		25% {
		  transform: rotate(15deg);
		}

		35% {
          transform: rotate(30deg);
		}

		50% {
		  transform: rotate(45deg);
		}

		75% {
		  transform: rotate(30deg);
		}

		85% {
		  transform: rotate(15deg);	
		}

		100% {
		  transform: rotate(0deg);
		}
	}
</style>