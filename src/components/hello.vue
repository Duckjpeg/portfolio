<template lang="">
	<div>
		<div id="welcomemsg">Hello!</div>
		<div id="welcomeFiller"></div>
	</div>
</template>
<script>
export default {
	mounted() {
		window.addEventListener("scroll", (event) => this.scrollHello(event));
		window.addEventListener("resize", () => {
			document.documentElement.style.setProperty("--veiwPortHeight", `${window.innerHeight}`);
		});
		document.documentElement.style.setProperty("--veiwPortHeight", `${window.innerHeight}`);
	},
	unmounted() {
		window.removeEventListener("scroll", this.scrollHello);
	},
	methods: {
		scrollHello(event) {
			//gah dayum I am smart
			let scrollHeight = window.pageYOffset;
			if (scrollHeight > window.innerHeight / 2) {
				document.querySelector("#welcomemsg").style.display = "none";
			} else {
				document.querySelector("#welcomemsg").style.display = "block";
			}
			document.documentElement.style.setProperty("--scrollYnoUnit", `${scrollHeight}`);
		},
	},
};
</script>
<style scoped>
#welcomemsg {
	font-size: 10vw;
	color: var(--goldColor);
	position: fixed;
	top: 50vh;
	left: calc((100vw - 100px) / 2 + 100px);
	translate: -50% 0;
	font-family: var(--cursiveFont);
	scale: calc(1 - (var(--scrollYnoUnit) / var(--veiwPortHeight)) * 4 + 1); /*at 50vh down its 0.5% so times 4 = 2 == initial scale  */
} /*make reactive (size biz) and make it look neat maybe different font for each letter */
/*TODO: make it max out above 1000px screen width */
#welcomeFiller {
	height: 100vh;
}
@media screen and (min-width: 1000px) {
	#welcomemsg {
		font-size: 100px;
	}
}
@media screen and (max-width: 500px) {
	#welcomemsg {
		translate: -50%;
		left: 50vw;
	}
}
</style>
