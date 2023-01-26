<template lang="">
	<div id="starWarsWrapper">
		<div class="subTitle" id="board">
			<div id="starWarsContentBody">
				HAMBURGER AHHHHHH ipsum dolor sit amet consectetur adipisicing
				<br />
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
		window.addEventListener("scroll", (event) =>
			this.handleOnScrollStarWars(event)
		);
	},
	unmounted() {
		window.removeEventListener("scroll", this.handleOnScrollStarWars);
	},
	methods: {
		handleOnScrollStarWars(event) {
			//mans finna set scrollY pt2
			let scrollYStar = window.pageYOffset;
			document.documentElement.style.setProperty(
				"--scrollYStar",
				`${scrollYStar}px`
			);
		},
	},
};
</script>
<style>
#starWarsWrapper {
	width: calc(100vw - 100px); /*minus nav bar and its already shifted left*/
	position: relative;
	height: 100vh;
	transform: perspective(300px) rotateX(25deg);
	transform-origin: 50% 70%;
}
#board {
	position: relative;
	top: calc(var(--scrollYStar) * -0.5);
}
#starWarsContentBody {
	text-align: center;
	font-size: 70px;
	letter-spacing: 2px;
	position: absolute;
	top: 15vw;
	padding-bottom: 500px;
}
</style>
