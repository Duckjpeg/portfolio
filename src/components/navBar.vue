<template>
	<nav>
		<div class="elementWrapper">
			<a href="#contact" class="hover">contAct</a>
			<div class="seperator"></div>
			<a href="#about" class="hover">About</a>
			<div class="seperator"></div>
			<a href="#start" class="hover">stARt</a>
		</div>
	</nav>
</template>
<script>
//TODO: make work on screen sizes like mobile and hide mouse
export default {};
</script>
<style scoped>
nav {
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100px;
	background: rgb(30 30 60);
	z-index: 98;
}
nav > div {
	position: relative;
	width: 100vh;
	transform-origin: top right;
	translate: -100% 0;
	rotate: -90deg;
	left: 35%;
	display: flex;
	justify-self: space-evenly;
}
nav > div > a {
	text-decoration: none;
	font-size: 30px;
	color: var(--mainFontColor);
	font-family: var(--titleFont);
}
nav > div > div {
	position: relative;
	width: 10px;
	height: 10px;
	border-radius: 20px;
	border: var(--goldColor) solid;
}
nav > div > * {
	margin: auto;
}

@media screen and (max-width: 500px) {
	nav {
		width: 110vw;
		height: 10vw;
		display: flex;
		align-items: center;
		top: 22vw;
		background: rgb(40 40 70);
	}
	nav > div {
		width: 100vw;
		flex-direction: row-reverse;
		translate: 0 0;
		rotate: 0deg;
		left: 0;
	}
	nav > div > a {
		font-size: 4vw;
	}
	nav > div > div {
		width: 2vw;
		height: 2vw;
		border-radius: 2vw;
		border-width: 0.75vw;
	}
}
@media screen and (max-width: 300px) {
	nav {
		top: 23vw;
	}
}
</style>
