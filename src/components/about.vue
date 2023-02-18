<template>
	<div>
		<div id="aboutTitle">
			first <br />
			a little bit <br />about me
			<br />
			<br />
			<br />
			<arrow />
		</div>
		<div id="aboutContent">Hi as you can probably guess from the title my name is Harry</div>
	</div>
</template>
<script>
import arrow from "../components/arrow.vue";
export default {
	components: {
		arrow,
	},
	data() {
		return {};
	},
	mounted() {},
	methods: {},
};
</script>
<style scoped>
#aboutTitle {
	font-family: var(--titleFont);
	color: var(--goldColor);
	font-size: 6vw;
	text-align: center;
	font-weight: 600;
	height: 100vh;
	padding-top: 3vw;
	line-height: 10vw;
}
#aboutContent {
	font-family: var(--mainFont);
	color: var(--goldColor);
	text-align: center;
	font-size: 2vw;
	margin-bottom: 80vw;
}
@media screen and (min-width: 1000px) {
	#aboutTitle {
		font-family: var(--titleFont);
		color: var(--goldColor);
		font-size: 60px;
		text-align: center;
		font-weight: 600;
		padding-top: 30px;
		line-height: 100px;
	}
}
</style>
