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
				<div id="welcomemsg">Hello</div>
				<div id="filler"></div>
				<section id="starWarsIntro" class="visibleElements">
					<starWars />
				</section>
				<section
					id="about"
					class="subTitle visibleElements"
					style="width: 50px"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
					dolor a consequuntur voluptate perferendis sequi vitae, ex
					perspiciatis quae tempore enim incidunt harum veniam
					inventore exercitationem accusantium modi. Saepe, Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Ab dolor
					a consequuntur voluptate perferendis sequi vitae, ex
					perspiciatis quae tempore enim incidunt harum veniam
					inventore exercitationem accusantium modi. Saepe, Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Ab dolor
				</section>
			</main>
		</section>
	</section>
</template>
<script>
import mouse from "../components/mouse.vue";
import topPage from "../components/topPage.vue";
import navBar from "../components/navBar.vue";
import starWars from "../components/starWars.vue";
export default {
	components: {
		mouse,
		topPage,
		navBar,
		starWars,
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
		},
		fillspacing() {
			let firstDiv = document.querySelector("#filler");
			let starWarsHeight = document.querySelector("#starWarsContentBody");
			firstDiv.style.height = `${starWarsHeight.clientHeight}px`;
		},
	},
};
</script>
<style>
#about {
	position: relative;
}
/*TODO: maybe add a lil something fly around on scroll */

#welcomemsg {
	font-size: 200px;
	color: yellow;
	position: fixed;
	scale: calc(1 - (var(--scrollYnoUnit) / 200) + 1);
} /*make reactive (size biz) and make it look neat maybe different font for each letter */

#filler {
	width: calc(100vw - 100px);
}
#starWarsIntro {
	top: -8vw;
	position: fixed;
}

#content {
	margin-top: 16vw;
	margin-left: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
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
@media screen and (max-width: 500px) {
	* {
		cursor: default;
	}
	#mouse {
		display: none;
	}
	.hover:hover {
		cursor: pointer;
	}
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
