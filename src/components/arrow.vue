<template>
	<div class="arrowWrapper">
		<span></span>
		<span></span>
		<span></span>
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
.arrowWrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.arrowWrapper span {
	display: block;
	width: 4vw;
	height: 4vw;
	border-bottom: .5vw solid var(--goldColor);
	border-right: .5vw solid var(--goldColor);
	transform: rotate(45deg);
	margin: -5px;
	animation: animate 5s infinite cubic-bezier(.54,1.19,.74,.88);
}

.arrowWrapper span:nth-child(2) {
	animation-delay: -0.75s;
}
.arrowWrapper span:nth-child(3) {
	animation-delay: -1.5s;
}

@keyframes animate {
	0% {
		opacity: 0;
		transform: rotate(45deg) translate(-2vw, -2vw);
	}
	50% {
		opacity: 1;
	}
	100% {
		opacity: 0;
		transform: rotate(45deg) translate(2vw, 2vw);
	}
}

@media screen and (min-width: 1000px) {
	.arrowWrapper span {
		display: block;
		width: 40px;
		height: 40px;
		border-bottom: 5px solid var(--goldColor);
		border-right: 5px solid var(--goldColor);
		margin: -10px;
	}
	.arrowWrapper {
		margin-top: 0px;
	}
}
@media screen and (max-width: 500px) {
	.arrowWrapper span {
		display: block;
		width: 5vw;
		height: 5vw;
		border-bottom: 1vw solid var(--goldColor);
		border-right: 1vw solid var(--goldColor);
		margin: -5vw;
	}
	.arrowWrapper {
		margin: 5vw;
	}
}
</style>
