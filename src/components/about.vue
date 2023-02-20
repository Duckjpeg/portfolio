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
		<div id="aboutContent">
			<span>
				As you can probably guess from the title my name is Harry <br /><br />
				I am currently in my first year of studying for my A-levels.<br />For my A-levels I am currently studying:<br />Further-Maths <br />Maths
				<br />Physics <br />Chemistry. <br /><br />
				In my free time I am learning and constantly improving my skills in web devolpment and also developing my knowledge and abilities with
				programming embedded systems such as the raspberry pi pico.
				<br />
				<br />
				I also about a year ago began learning astrophotography</span
			>
		</div>
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
	text-align: left;
	font-size: 4vw;
	margin-bottom: 80vw;
	padding: 4vw;
}
#aboutContent span {
	background: rgba(15, 15, 30, 0.64);
}

#aboutContent > img {
	width: 100%;
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
