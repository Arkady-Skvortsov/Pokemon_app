<template>
   <span 
        class="txt-about-pokemon"
        :style="{'color': aboutPok === true ? 'black' : 'white'}"
   >

   Этот покемон полностью контролирует электричество. Есть рассказы о том, что Запдос гнездится в темных глубинах черных как смоль грозовых облаков. Запдос - легендарный птичий покемон. Говорят, что когда он потрет свои перья, сразу после этого упадет молния.

   </span>
</template>

<script>
	export default {
		computed: {
			aboutPok() {
				return this.$store.getters['theme/CHANGETHEME']
			}
		}
	}
</script>

<style lang="scss">
	.txt-about-pokemon {
		font-size: $f_size2;
		font-family: $Orienta;
		color: $w;
		font-weight: bold;
	}
</style>