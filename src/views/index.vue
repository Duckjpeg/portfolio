<template>
	<section id="indexWrapper">
		<div id="start" style="position: absolute; top: 0"></div>
		<navBar />
		<section>
			<header>
				<mouse />
				<topPage id="titleComp" />
			</header>
			<main>
				<section class="subTitle content" style="font-size: 200px">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Recusandae numquam, vel obcaecati, nobis perspiciatis velit,
					a distinctio dicta hic reprehenderit tempore. Ratione,
					Loluptate! Quam ea nulla vitae fuga porro eaque!
				</section>
				<section id="about" class="content">
					show case with stuff like what I do why me what I have
					learnt you top priority rates and how I do buisness
				</section>
			</main>
		</section>
	</section>
</template>
<script>
import mouse from "../components/mouse.vue";
import topPage from "../components/topPage.vue";
import navBar from "../components/navBar.vue";
export default {
	components: {
		mouse,
		topPage,
		navBar,
	},
};
</script>
<style>
.content {
	margin-left: 100px;
}
#titleComp {
	z-index: 97;
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
	color: var(--goldColor);
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
