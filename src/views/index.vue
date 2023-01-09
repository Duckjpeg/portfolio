<template>
	<section id="indexWrapper">
		<nav>
			<a href="#start" class="navElement hover">stARt</a>
		</nav>
		<section id="content">
			<header>
				<mouse />
				<topPage id="titleComp" />
			</header>
			<main id="start">
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
	height: 100vh;
	width: 100px;
	background: purple;
	z-index: 98;
}
.navElement {
	text-decoration: none;
	color: aquamarine;
	font-family: var(--titleFont);
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
