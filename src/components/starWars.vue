<template lang="">
	<div id="starWarsWrapper">
		<div id="board">
			<div id="starWarsContentBody">
				AND WELCOME TO MY PORTFOLIO
				<br />
				<br />
				elit. Quae eius magnam laudantium necessitatibus, assumenda
				blanditiis, nulla odit laboriosam doloremque, at et dicta ullam
				enim unde! Quos temporibus quibusdam quae pariatur! Lorem ipsum
				dolor sit amet, consectetur adipisicing elit. Harum ducimus
				<br />
				<br />
				<br />
				<br />
				<br />
				totam inventore quisquam, cupiditate iure quas non perspiciatis
				aut animi maxime odit ullam ea rem magni nobis obcaecati ad
				placeat.
			</div>
		</div>
	</div>
</template>
<script>
export default {
	mounted() {
		window.addEventListener("scroll", () => this.handleOnScrollStarWars());
	},
	unmounted() {
		window.removeEventListener("scroll", this.handleOnScrollStarWars);
	},
	methods: {
		handleOnScrollStarWars() {
			//mans finna set scrollY pt2
			let scrollY = window.pageYOffset;
			document.documentElement.style.setProperty(
				"--scrollYpx",
				`${scrollY}px`
			);
			document.documentElement.style.setProperty(
				"--scrollYnoUnit",
				`${scrollY}`
			);
		},
	},
};
</script>
<style>
#starWarsWrapper {
	width: 40vw; /*TODO: make text like a block*/
	position: relative;
	height: 100vh;
	transform: perspective(200px) rotateX(25deg);
	transform-origin: 50% 70%;
}
#board {
	position: relative;
	top: calc(
		(var(--scrollYpx) / -0.8)
	); /*TODO: also make font sizes better for mobile and make so it scrolls off at same rate*/
}

#starWarsContentBody {
	font-family: "Pathway Gothic One", sans-serif;
	font-weight: 800;
	text-align: center;
	font-size: 5vw;
	letter-spacing: 2px;
	position: absolute;
	top: calc(
		90vh + (400px) / 0.8
	); /*so Hello disappears when star wars shows up */
	color: var(--goldColor);
	background-color: green;
}

/*above 1000px */
@media screen and (min-width: 1000px) {
	#starWarsContentBody {
		font-size: 50px;
	}
}
/*mobile */
@media screen and (max-width: 500px) {
	#starWarsWrapper {
		width: calc(100vw - 100px);
		transform: perspective(600px) rotateX(25deg);
	}
	#starWarsContentBody {
		top: calc(90vh + (400px) / 0.7);
	}
}
</style>
