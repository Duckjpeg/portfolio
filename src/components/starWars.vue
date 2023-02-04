<template lang="">
	<div id="starWarsWrapper">
		<div id="board">
			<div id="starWarsContentBody">
				AND WELCOME TO MY PORTFOLIO <span id="slashPersonal">/ personal website</span>
				<br />
				<br />
				As you can probably guess by the title my name is Harry.
				<br />
				<br />
				<br />
				I am currently doing four A-Levels <br />
				Maths <br />Further Maths<br />
				Physics <br />Chemistry
				<br />
				<br />
				<br />
				And I am teaching myself website develtopment.
				<br />So far I have learnt how to make functional, eye catching (depending on who you ask) websites like
				the one you're on now
				<br />
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
			document.documentElement.style.setProperty("--scrollYpx", `${scrollY}px`);
			document.documentElement.style.setProperty("--scrollYnoUnit", `${scrollY}`);
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
	top: calc((var(--scrollYpx) / -0.8)); /*TODO: also make font sizes better for mobile and make so it scrolls off at same rate*/
}
#slashPersonal {
	font-size: 1vw;
	position: relative;
	bottom: 0.5vw;
}

#starWarsContentBody {
	font-family: "Pathway Gothic One", sans-serif;
	font-weight: 800;
	text-align: center;
	font-size: 5vw;
	letter-spacing: 2px;
	position: absolute;
	top: calc(90vh + (400px) / 0.8); /*so Hello disappears when star wars shows up */
	color: var(--goldColor);
}

/*above 1000px */
@media screen and (min-width: 1000px) {
	#starWarsContentBody {
		font-size: 50px;
	}
	#slashPersonal {
		font-size: 20px;
		bottom: 10px;
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
