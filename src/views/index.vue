<template>
	<section id="indexWrapper">
		<header>
			<mouse />
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
		</header>
		<nav>
			<a href="#start" style="position: fixed">Start</a>
		</nav>
		<main id="start">
			<div class="subTitle" style="font-size: 200px">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Recusandae numquam, vel obcaecati, nobis perspiciatis velit, a
				distinctio dicta hic reprehenderit tempore. Ratione, Loluptate!
				Quam ea nulla vitae fuga porro eaque!
			</div>
		</main>
	</section>
</template>
<script>
import mouse from "../components/mouse.vue";
export default {
	components: {
		mouse,
	},
	data() {
		return {
			year: 2023,
			navX: 0,
			navY: 0,
			scrollY: 0,
			mouseY: "0px",
			mouseX: "0px",
			pageHeight: 0,
		};
	},
	mounted() {
		this.year = new Date().getFullYear();
		for (const card of document.querySelectorAll(".card")) {
			card.onmousemove = (event) => this.handleOnMouseMove(event);
		}
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
		handleOnMouseMove(event) {},
	},
};
</script>
<style>
/*styles in sections in assets / styles and imported in main.js */
#indexWrapper > main {
	padding-top: 20vw; /*in titles this is set to a max value*/
}
#spinnyA {
	transform-origin: 50% 55%;
}
#spinnyV {
	top: 2px;
	transform-origin: 15% 50%; /*no clue why such an odd value */
}
.spinny {
	position: absolute;
	transform: rotateZ(var(--scrollRotate));
	font-size: 95%;
}
/*below 1000px */
@media screen and (max-width: 1000px) {
	#spinnyV {
		top: 0.1vw;
	}
}
</style>
