<template>
	<section id="indexWrapper">
		<div id="start" style="position:absolute;top:0"></div>
		<nav>
			<div class="elementWrapper">
				<a href="#start" class="hover">stARt</a>
				<div class="seperator"></div>
				<a href="#about" class="hover">About</a>
				<div class="seperator"></div>
				<a href="#contact" class="hover">contAct</a>
			</div>
		</nav>
		<section id="content">
			<header>
				<mouse />
				<topPage id="titleComp" />
			</header>
			<main>
				<div class="subTitle" style="font-size: 200px">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Recusandae numquam, vel obcaecati, nobis perspiciatis velit,
					a distinctio dicta hic reprehenderit tempore. Ratione,
					Loluptate! Quam ea nulla vitae fuga porro eaque!
				</div>
			</main>
		</section>
	</section>
</template>
<script>
import mouse from "../components/mouse.vue";
import topPage from "../components/topPage.vue";
export default {
	components: {
		mouse,
		topPage,
	},
};
</script>
<style>
nav {
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100px;
	background: rgb( 20 20 20);
	z-index: 98;
}
nav > div{
	position:relative;
	width:100vh;
	transform-origin: top right;
	translate: -100% 0 ;
	rotate:-90deg;
	left:35%;
	display: flex;
	justify-content: space-around;
}
nav > div > a {
	text-decoration: none;
	font-size:30px;
	color: aquamarine;
	font-family: var(--titleFont);
}
.seperator{
	width:10px;
	height:10px;
	border-radius: 20px;
	border: purple solid;
}
#content {
	position: relative;
	left: 100px;
}
#titleComp {
	padding-left: 120px;
}
/*styles in sections in assets / styles and imported in main.js */
#indexWrapper > main {
	padding-top: 20vw; /*in titles this is set to a max value*/
}
#spinnyA {
	transform-origin: 50% 55%;
}
#spinnyV {
	top: 2px;
	transform-origin: 15% 50%; /*no clue why such an odd value */
}
.spinny {
	position: absolute;
	transform: rotateZ(var(--scrollRotate));
	font-size: 95%;
}
/*below 1000px */
@media screen and (max-width: 1000px) {
	#spinnyV {
		top: 0.1vw;
	}
}
</style>
