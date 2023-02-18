<template>
	<div class="titleContainer">
		<div class="titleWrapper">
			<span class="mainTitle mainTitleTemplate">H<span class="spinny" id="spinnyA">A</span> RRy</span>
			<div class="slash"></div>
			<span class="afterSlash">{{ year }}</span>
		</div>
		<span class="surnameTitle">ste<span class="spinny" id="spinnyV">V</span> en</span>
	</div>
</template>
<script>
export default {
	data() {
		return {
			year: 2023,
			navX: 0,
			navY: 0,
			scrollYvw: 0,
			pageHeight: 0,
		};
	},
	mounted() {
		this.year = new Date().getFullYear();
		window.addEventListener("scroll", (event) => this.handleOnScroll(event));
	},
	unmounted() {
		//document.removeEventListener(card.onmousemove);
		window.removeEventListener("scroll", this.handleOnScroll);
	},
	methods: {
		handleOnScroll(event) {
			//to find page height
			let B = document.body;
			let H = document.documentElement;
			if (typeof document.height !== "undefined") {
				this.pageHeight = document.height; // For webkit browsers
			} else {
				this.pageHeight = Math.max(B.scrollHeight, B.offsetHeight, H.clientHeight, H.scrollHeight, H.offsetHeight);
			}
			//in here because it change if screen width changes
			document.documentElement.style.setProperty(
				"--scrollRotate",
				`${(window.pageYOffset / (this.pageHeight - window.innerHeight)) * 720}deg` // gets a % of page height and rotates cursor to percent through page
			); //subtract window height since page offset doesn't = full page height / when its at bottom
			//should be 10vw ish
			//if height => 22vw => 12vw
			this.scrollYvw = window.pageYOffset / 5;
			if (screen.width < 1000) {
				if (this.scrollYvw * 0.143 <= 10) {
					document.documentElement.style.setProperty(
						"--scrollYvw",
						`${this.scrollYvw * 0.143}vw` //should roughly be 10vw (1/7 * 70 to get 10)
					); //should be 10vw
				} else {
					document.documentElement.style.setProperty(
						"--scrollYvw",
						`${70 * 0.143}vw` //should roughly be 10vw (1/7 * 70 to get 10)
					); //should be 10vw
				}
			} else {
				if (this.scrollYvw <= 70) {
					document.documentElement.style.setProperty("--scrollYvw", `${this.scrollYvw}px`);
				} else {
					document.documentElement.style.setProperty("--scrollYvw", `${70}px`);
				}
			}
		},
	},
};
</script>
<style scoped>
/*all var(--scrollYvw) / num, numberes were found through 
trial and error an look nice on screen but not in code*/

/*below 1000 and above 500*/
.mainTitle {
	font-size: calc(10vw - var(--scrollYvw) / 5);
}
.surnameTitle {
	font-family: var(--titleFont);
	font-size: calc(2vw - var(--scrollYvw) / 200);
	color: var(--smallTextColor);
	position: relative;
	left: 0.5vw;
	top: calc(-4.5vw + var(--scrollYvw) / 10);
	letter-spacing: calc(4.95vw - var(--scrollYvw) / 7.5);
}
.afterSlash {
	font-family: var(--titleFont);
	color: var(--mainFontColor);
	position: relative;
	font-size: calc(13vw - var(--scrollYvw) / 3);
	top: 0.1vw;
	left: 3vw;
	bottom: 0.5vw;
}
.titleWrapper {
	display: flex;
	flex-direction: row;
}
.titleContainer {
	padding: 2vw 0 0 2vw;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	width: 100dvw;
	height: calc(16vw - var(--scrollYvw) / 2.8);
	background: var(--fixedElementsBg);
}
.slash {
	width: 0.6vw;
	height: calc(15vw - var(--scrollYvw) / 2.5);
	max-width: 10px;
	max-height: 150px;
	background: linear-gradient(180deg, rgba(20 20 20 /0), rgb(235 235 235 /0.8), rgba(235 235 235 /1), rgb(235 235 235 /0.8), rgba(20 20 20 /0));
	position: relative;
	left: 2vw;
	transform: skew(-30deg);
}

/*above 1000px*/
@media screen and (min-width: 1000px) {
	.mainTitle {
		font-size: calc(110px - var(--scrollYvw) * 0.9);
	}
	.slash {
		left: 15px;
		height: calc(130px - var(--scrollYvw));
		width: calc(10px - var(--scrollYvw) / 15);
	}
	.afterSlash {
		position: relative;
		left: 25px;
		font-size: calc(130px - var(--scrollYvw));
		top: -6px;
	}
	.surnameTitle {
		font-size: calc(25px - var(--scrollYvw) / 5);
		left: 5px;
		top: calc(-25px + var(--scrollYvw) / 10);
		letter-spacing: calc(52px - var(--scrollYvw) / 2.25);
	}
	.titleContainer {
		padding: 20px 0 0 20px;
		height: calc(160px - var(--scrollYvwvw) * 1.2);
	}
	#indexWrapper > main {
		padding-top: 220px;
	}
	#spinnyV {
		top: 0.1vw;
	}
}
@media screen and (max-width: 500px) {
	.titleContainer {
		height: 21vw; /*doesn't shrink since at that scale theres no point */
		padding-top: 2vw;

		/*lil bigger since nav now goes under*/
	}
	.slash {
		top: 6px;
		height: 15vw;
	}
	.mainTitle {
		position: relative;
		font-size: 11.5vw;
		top: 6px;
	}
	.surnameTitle {
		font-size: 3vw;
		top: -3.5vw;
		letter-spacing: 5.1vw;
		top: -2.5vw;
	}
	.afterSlash {
		font-size: 14vw;
		top: 6px;
	}
}

/*for really small width screens */
@media screen and (max-width: 300px) {
	.titleContainer {
		padding: .5vw 0 0 .5vw;
		height: 23vw;
	}
	.titleContainer .afterSlash {
		position: relative;
		top: 4px;
	}
	.surnameTitle {
		position: relative;
		top: -3.5vw;
	}
	#spinnyV{
		top:-1px;
	}
}


#spinnyA {
	transform-origin: 50% 55%;
}
#spinnyV {
	top: 1px;
	transform-origin: 15% 50%; /*no clue why such an odd value */
}
.spinny {
	color: var(--goldColor);
	position: absolute;
	transform: rotateZ(var(--scrollRotate));
	font-size: 95%;
}
</style>
