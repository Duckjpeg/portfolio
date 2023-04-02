<template>
	<section id="indexWrapper">
		<div id="start" style="position: absolute; top: 0"></div>
		<navBar />
		<mouse />
		<section>
			<header>
				<topPage id="titleComp" />
			</header>
			<main id="content">
				<div id="intro">
					<hello />
				</div>
				<div id="mainBody">
					<section id="welcome">and welcome to my website</section>
					<section id="about" class="visibleElements">
						<lightsaber />
						<about />
					</section>
					<section id="contact" class="subTitle">
						<contact />
					</section>
				</div>
			</main>
		</section>
	</section>
</template>
<script>
import mouse from "../components/mouse.vue";
import topPage from "../components/topPage.vue";
import navBar from "../components/navBar.vue";
import contact from "../components/contact.vue";
import hello from "../components/hello.vue";
import about from "../components/about.vue";
import lightsaber from "../components/lightsaber.vue";
import arrow from "../components/arrow.vue";
export default {
	components: {
		mouse,
		topPage,
		navBar,
		contact,
		hello,
		about,
		lightsaber,
		arrow,
	},
	mounted() {},
	unmounted() {},
	methods: {},
};
</script>
<style>
#welcome {
	font-family: var(--titleFont);
	color: var(--goldColor);
	font-size: 4vw;
	display: flex;
	position: relative;
	justify-content: center;
	/*TODO:make it work on all screen sizes and NEON GLOW WITH SOME SORT OF ANIMATION*/
}
#about {
	scroll-margin-top: 18vw;
}
#intro {
	z-index: 5;
	margin-top: 16vw;
	margin-left: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
#contact {
	display: flex;
	width: 100%;
	justify-content: center;
}
#titleComp {
	z-index: 97;
	padding-left: 120px;
}
/*TODO: maybe add a lil something fly around on scroll */
#mainBody {
	position: relative;
	left: 100px;
	width: calc(100% - 100px);
	z-index: 20;
}

@media screen and (min-width: 1000px) {
	#welcome {
		font-size: 40px;
	}
	#about {
		scroll-margin-top: 150px;
	}
}
@media screen and (max-width: 800px) {
	* {
		cursor: default;
	}
	#mouse {
		display: none;
	}
	.hover:hover {
		cursor: pointer;
	}
}
@media screen and (max-width: 500px) {
	#titleComp {
		padding-left: 5vw;
	}
	#intro {
		margin-left: 0px;
	}
	#mainBody {
		left: 0;
	}
	#welcome {
		width: 100vw;
	}
	#about {
		width: 100vw;
		scroll-margin-top: 35vw;
	}
	#contact {
		width: 100vw;
	}
}
</style>
