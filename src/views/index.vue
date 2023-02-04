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
					<div id="welcomemsg">Hello!</div>
					<div id="filler"></div>
					<section id="starWarsIntro" class="visibleElements">
						<starWars />
					</section>
				</div>
				<div id="mainBody">
					<section id="about" class="subTitle visibleElements"></section>
					<section id="contact" class="subTitle visibleElements">
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
import starWars from "../components/starWars.vue";
import contact from "../components/contact.vue";
export default {
	components: {
		mouse,
		topPage,
		navBar,
		starWars,
		contact,
	},
	mounted() {
		window.addEventListener("scroll", (event) => this.scrollBiz(event));
		window.addEventListener("resize", () => this.fillspacing());
		this.fillspacing();
	},
	unmounted() {
		//document.removeEventListener(card.onmousemove);
		window.removeEventListener("scroll", this.scrollBiz);
		window.removeEventListener("resize", () => this.fillspacing());
	},
	methods: {
		scrollBiz(event) {
			//basically timelining
			let scrollHeight = window.pageYOffset;
			if (scrollHeight > 400) {
				document.querySelector("#welcomemsg").style.display = "none";
			} else {
				document.querySelector("#welcomemsg").style.display = "block";
			}
			if (
				parseInt(document.querySelector("#filler").style.height) +
					document.querySelector("#filler").offsetTop -
					document.querySelector("#titleComp").getBoundingClientRect().height * 2 <
				window.pageYOffset
			) {
				document.querySelector("#starWarsIntro").style.opacity = 0;
			} else {
				document.querySelector("#starWarsIntro").style.opacity = 1;
			}
		},
		fillspacing() {
			let firstDiv = document.querySelector("#filler");
			let starWarsHeight = document.querySelector("#starWarsContentBody");
			if (window.innerWidth > 500) {
				firstDiv.style.height = `${
					starWarsHeight.clientHeight / (0.8 - 1 / (window.innerWidth / 75)) //so it get bigger as screen size reduces
				}px`;
			} else if (window.innerWidth > 350) {
				firstDiv.style.height = `${
					starWarsHeight.clientHeight / (0.2 + window.innerWidth / 1700) //so it get bigger as screen size reduces
				}px`;
			} else {
				firstDiv.style.height = `${
					starWarsHeight.clientHeight / (0.2 + window.innerWidth / 1500) //so it get bigger as screen size reduces
				}px`;
			}
		},
	},
};
</script>
<style>
#about {
	position: relative;
}
/*TODO: maybe add a lil something fly around on scroll */

main #welcomemsg {
	font-size: 10vw;
	color: var(--goldColor);
	position: fixed;
	top: calc(45vh);
	font-family: var(--cursiveFont);
	scale: calc(1 - (var(--scrollYnoUnit) / 200) + 1);
} /*make reactive (size biz) and make it look neat maybe different font for each letter */
/*TODO: make it max out above 1000px screen width */

#filler {
	width: calc(100vw - 100px);
}
#starWarsIntro {
	top: -8vw;
	position: fixed;
}
#mainBody {
	position: relative;
	left: 100px;
	width: calc(100vw - 100px);
	z-index: 20;
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
	justify-content: center;
}
#titleComp {
	z-index: 97;
	padding-left: 120px;
}
@media screen and (max-width: 1000px) {
	#content {
		margin-top: 15vw;
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
	#content {
		margin-left: 0px;
	}
	nav {
		display: none;
	}
}
</style>
