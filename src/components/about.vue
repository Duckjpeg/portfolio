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
			<div class="animatedBackground"></div>
			<span>
				Me is at university of cambridge yeah <br />
				and I made this website when I was like 16 and forgot how to do all of this but I have managed to remeber
				how to edit the text
			</span>
			<br />
			<br />
			<br /><br />
			<br />
			<br />
			<arrow />
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
