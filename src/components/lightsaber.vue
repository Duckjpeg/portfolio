<template>
	<div>
		<div id="lineSpacer"></div>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
	mounted() {},
	methods: {},
};
</script>
<style scoped>
#lineSpacer {
	position: relative;
	left: 10%;
	width: 80%;
	height: 8px;
	border-radius: 5px;
	background: linear-gradient(90deg, rgba(255, 165, 0, 1) 12%, rgba(74, 194, 255, 1) 36%, rgba(255, 213, 0, 1) 65%, rgba(95, 156, 63, 1) 94%);
	background-size: 600% 100%;
	margin-top: 6vw;
	margin-bottom: 3vw;
	animation: moveLine 5s infinite;
	animation-direction: alternate;
}
@media screen and (min-width: 1000px) {
	#lineSpacer {
		margin-top: 60px;
		margin-bottom: 30px;
	}
}
@keyframes moveLine {
	0% {
		background-position: 0 0;
	}
	100% {
		background-position: 100% 0;
	}
}
</style>
