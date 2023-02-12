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
					<section id="about" class="subTitle visibleElements"></section>
					<section id="welcome">
						and Welcome to my portfolio
					</section>
					<section id="contact" class="subTitle visibleElements">
						<contact />
					</section>
					<div class="cheese" style="width: 50px">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates quam cumque at quo ipsum necessitatibus laboriosam earum error
						tempora, molestias ut laborum alias distinctio voluptate odit, voluptatibus magni quaerat voluptas!
					</div>
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
export default {
	components: {
		mouse,
		topPage,
		navBar,
		contact,
		hello,
	},
	mounted() {},
	unmounted() {},
	methods: {},
};
</script>
<style>
#about {
	position: relative;
}
/*TODO: maybe add a lil something fly around on scroll */

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
	#intro {
		margin-left: 0px;
	}
	#mainBody {
		left: 0;
	}
}
</style>
