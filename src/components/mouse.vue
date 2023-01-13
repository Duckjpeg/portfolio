<template>
	<div id="mouse"></div>
</template>
<script>
export default {
	data() {
		return {
			mouseY: "0px",
			mouseX: "0px",
			pageHeight: 0,
		};
	},
	mounted() {
		//adds a hover event listener to each element for mouse to scale and listens for hovewr and no hover
		for (const element of document.querySelectorAll(".hover")) {
			element.addEventListener("mouseout", () => this.nothovering());
		}
		for (const element of document.querySelectorAll(".hover")) {
			element.addEventListener("mouseover", () => this.hovering());
		}
		window.addEventListener("mousemove", (event) =>
			this.handleMousePositon(event)
		);
	},
	methods: {
		handleMousePositon(event) {
			this.mouseY = event.clientY;
			this.mouseX = event.clientX;
			document.documentElement.style.setProperty(
				"--mouseY",
				`${this.mouseY}px`
			);
			document.documentElement.style.setProperty(
				"--mouseX",
				`${this.mouseX}px`
			);
		},
		hovering() {
			document.querySelector("#mouse").style.scale = 2;
		},
		nothovering() {
			document.querySelector("#mouse").style.scale = 1;
		},
	},
};
</script>
<style scoped>
/*custom mouse */
#mouse {
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 0 12px 20.8px 12px;
	border-color: transparent transparent var(--goldColor) transparent;
	position: fixed;
	z-index: 99;
	pointer-events: none;
	mix-blend-mode: difference;
	transform-origin: 50% 65%;
	translate: -50% -60%;
	left: var(--mouseX);
	top: var(--mouseY);
	scale: 1;
	rotate: 180deg;
	transition: 300ms scale;
}
</style>
