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
export default {};
</script>
<style scoped>
nav {
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100px;
    background: rgb(40 40 40); /*double normal so it looks normal at start */
    mix-blend-mode: difference;
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
	justify-content: space-around;
}
nav > div > a {
	text-decoration: none;
	font-size: 30px;
	color: var(--mainFontColor);
	font-family: var(--titleFont);
}
nav > div > div {
	position: relative;
	top: 10px;
	width: 10px;
	height: 10px;
	border-radius: 20px;
	border: var(--goldColor) solid;
}
</style>
