<template>
	<div class="titleContainer">
		<div class="titleWrapper">
			<span class="mainTitle mainTitleTemplate"
				>H<span class="spinny" id="spinnyA">A</span> RRy</span
			>
			<div class="slash"></div>
			<span class="afterSlash">{{ year }}</span>
		</div>
		<span class="surnameTitle"
			>ste<span class="spinny" id="spinnyV">V</span> en</span
		>
	</div>
</template>
<script>
export default {
	data() {
		return {
			year: 2023,
			navX: 0,
			navY: 0,
			scrollY: 0,
			pageHeight: 0,
		};
	},
	mounted() {
		this.year = new Date().getFullYear();
		window.addEventListener("scroll", (event) =>
			this.handleOnScroll(event)
		);
		document.addEventListener("mousemove", (event) =>
			this.handleOnMouseMove(event)
		);
	},
	unmounted() {
		//document.removeEventListener(card.onmousemove);
		window.removeEventListener("scroll", this.handleOnScroll);
	},
	methods: {
		handleOnMouseMove(event) {
			for (const card of document.querySelectorAll(".card")) {
				const rect = card.getBoundingClientRect(); //gets info on rectangle
				this.navX = event.clientX - rect.left; //make x and Y relative to the card
				this.navY = event.clientY - rect.top; //its like imagine it was outside the box
				card.style.setProperty("--mouse-x", `${this.navX}px`); //sets it for css
				card.style.setProperty("--mouse-y", `${this.navY}px`);
			}
		},
		handleOnScroll(event) {
			//to find page height
			let B = document.body;
			let H = document.documentElement;
			console.log(B, H);
			if (typeof document.height !== "undefined") {
				this.pageHeight = document.height; // For webkit browsers
			} else {
				this.pageHeight = Math.max(
					B.scrollHeight,
					B.offsetHeight,
					H.clientHeight,
					H.scrollHeight,
					H.offsetHeight
				);
			}
			//in here because it change if screen width changes
			document
				.querySelector("#mouse")
				.setAttribute(
					"style",
					`top: ${this.mouseY}px; left: ${this.mouseX}px`
				);
			document.documentElement.style.setProperty(
				"--scrollRotate",
				`${
					(window.pageYOffset /
						(this.pageHeight - window.innerHeight)) *
					720
				}deg` // gets a % of page height and rotates cursor to percent through page
			); //subtract window height since page offset doesn't = full page height / when its at bottom
			//should be 10vw ish
			//if height => 22vw => 12vw
			this.scrollY = window.pageYOffset / 5;
			if (screen.width < 1000) {
				if (this.scrollY * 0.143 <= 10) {
					document.documentElement.style.setProperty(
						"--scrollY",
						`${this.scrollY * 0.143}vw` //should roughly be 10vw (1/7 * 70 to get 10)
					); //should be 10vw
				} else {
					document.documentElement.style.setProperty(
						"--scrollY",
						`${70 * 0.143}vw` //should roughly be 10vw (1/7 * 70 to get 10)
					); //should be 10vw
				}
			} else {
				if (this.scrollY <= 70) {
					document.documentElement.style.setProperty(
						"--scrollY",
						`${this.scrollY}px`
					);
				} else {
					document.documentElement.style.setProperty(
						"--scrollY",
						`${70}px`
					);
				}
			}
		},
	},
};
</script>
<style>
/*all var(--scrollY) / num, numberes were found through 
trial and error an look nice on screen but not in code*/
/*below 1000 and above 500*/
.mainTitle {
	font-size: calc(10vw - var(--scrollY) / 5);
}
.surnameTitle {
	font-family: var(--titleFont);
	font-size: calc(2vw - var(--scrollY) / 200);
	color: var(--smallTextColor);
	position: relative;
	left: 0.5vw;
	top: calc(-4.5vw + var(--scrollY) / 10);
	letter-spacing: calc(4.95vw - var(--scrollY) / 7.5);
}
.afterSlash {
	font-family: var(--titleFont);
	color: var(--mainFontColor);
	position: relative;
	font-size: calc(13vw - var(--scrollY) / 3);
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
	height: calc(21vw - var(--scrollY) / 2);
	background: linear-gradient(
		180deg,
		rgba(20 20 20 / 1) 0%,
		rgba(20 20 20 / 1) 75%,
		rgba(20 20 20 / 0.9) 87%,
		rgba(20 20 20 / 0.7) 94%,
		rgba(20, 20, 20, 0.5) 97%,
		rgba(0, 0, 0, 0) 100%
	);
}
.slash {
	width: 0.6vw;
	height: calc(15vw - var(--scrollY) / 2.5);
	max-width: 10px;
	max-height: 150px;
	background: linear-gradient(
		180deg,
		rgba(20 20 20 /0),
		rgb(235 235 235 /0.8),
		rgba(235 235 235 /1),
		rgb(235 235 235 /0.8),
		rgba(20 20 20 /0)
	);
	position: relative;
	left: 2vw;
	transform: skew(-30deg);
}
/*above 1000px*/
@media screen and (min-width: 1000px) {
	.mainTitle {
		font-size: calc(110px - var(--scrollY) * 0.9);
	}
	.slash {
		left: 15px;
		height: calc(130px - var(--scrollY));
		width: calc(10px - var(--scrollY) / 15);
	}
	.afterSlash {
		position: relative;
		left: 25px;
		font-size: calc(130px - var(--scrollY));
		top: -6px;
	}
	.surnameTitle {
		font-size: calc(25px - var(--scrollY) / 5);
		left: 5px;
		top: calc(-25px + var(--scrollY) / 10);
		letter-spacing: calc(52px - var(--scrollY) / 2.25);
	}
	.titleContainer {
		padding: 20px 0 0 20px;
		height: calc(210px - var(--scrollY) * 1.5);
	}
	#indexWrapper > main {
		padding-top: 220px;
	}
}
@media screen and (max-width: 500px) {
	.titleContainer {
		height: 25vw; /*doesn't shrink since at that scale theres no point */
		padding: 2vw 0 0 5vw;
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
		padding: 5px 0 0 5px;
	}
	.titleContainer .afterSlash {
		position: relative;
		top: 4px;
	}
	.surnameTitle {
		position: relative;
		top: -2vw;
	}
}
</style>
