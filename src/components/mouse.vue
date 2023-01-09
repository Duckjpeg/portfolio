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
		window.addEventListener("mousemove", (event) =>
			this.handleMousePositon(event)
		);
		document.addEventListener("scroll", (event) =>
			this.handleMousePositonScroll(event)
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
			document
				.querySelector("#mouse")
				.setAttribute(
					"style",
					`top: ${this.mouseY}px; left: ${this.mouseX}px`
				);
		},
		handleMousePositonScroll(event) {
			//in here because it change if screen width changes
			document
				.querySelector("#mouse")
				.setAttribute(
					"style",
					`top: ${this.mouseY}px; left: ${this.mouseX}px`
				);
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
	border-width: 0 30px 51.1px 30px;
	border-color: transparent transparent rgba(0, 255, 153, 0.7) transparent;
	position: fixed;
	z-index: 99;
	pointer-events: none;
	mix-blend-mode: difference;
    transform-origin: 50% 65%;
    translate:-50% -60%;
	left: var(--mouseX);
	top: var(--mouseY);
	rotate: var(--scrollRotate);
}
</style>
