<template>
	<section id="indexWrapper">
		<header>
			<div class="test" id="mouse"></div>
			<div class="titleContainer">
				<div class="titleWrapper">
					<span class="mainTitle"
						>H<span class="spinny" id="spinnyA">A</span> RRy</span
					>
					<div class="slash"></div>
					<span class="afterSlash">{{ year }}</span>
				</div>
				<span class="surnameTitle"
					>ste<span class="spinny" id="spinnyV">V</span> en</span
				>
			</div>
			<nav>
				<div class="menuHam">
					<input type="checkbox" />
					<div class="bar" id="line1"></div>
					<div class="bar" id="line2"></div>
					<div class="bar" id="line3"></div>
				</div>
			</nav>
		</header>
		<main>
			<div class="subTitle" style="font-size: 200px">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Recusandae numquam, vel obcaecati, nobis perspiciatis velit, a
				distinctio dicta hic reprehenderit tempore. Ratione, voluptate!
				Quam ea nulla vitae fuga porro eaque!
			</div>
		</main>
	</section>
</template>
<script>
export default {
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
				"--scroll",
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
					//should be *0.22 but js is tweaking
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
		handleOnMouseMove(event) {
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
	},
};
</script>
<style>
/*styles in sections in assets / styles and imported in main.js */
#indexWrapper {
	padding-top: 14vw; /*in titles this is set to a max value*/
	cursor: none;
}

.bar{
    width:10vw;
    height:2vw;
	border:0.1vw var(--mainFontColor) solid;
    background:rgb(20 20 20);
	margin:0.725vw; /*TODO: make work on screen sizes */
	transform:skew(-20deg);
}
#line1{ /*TODO: make so no animate on page load */
	animation: line-1-close 600ms forwards;
}
#line2{
	animation: line-2-close 600ms forwards;
}
#line3{
	animation: line-3-close 600ms forwards;
}
.menuHam > input{
	width:10vw;
	height:120px; /*need to adjust size on scroll*/
	position: absolute;
	opacity:0;
	z-index:99;
}
.menuHam > input:checked ~ #line1{
	animation: line-1-open 600ms forwards;
}
.menuHam > input:checked ~ #line2{
	animation: line-2-open 600ms forwards;
}
.menuHam > input:checked ~ #line3{
	animation: line-3-open 600ms forwards;
}

.menuHam{
    z-index:98;
    position:fixed;
	top:20px;
	right:0;
}
@keyframes line-1-open{
	15%{
		translate: 0 133%;
	}
	60%{
		rotate:0deg;
		transform:skew(0deg);
	}
	100%{
		translate: 0 133%;
		rotate:45deg;
		transform:skew(-45deg);
	}
}
@keyframes line-2-open{
	0%{
		opacity:1;
	}
	25%{
		opacity:0;
	}
	100%{
		opacity:0; /*TODO: make fade out and also make fade in smooother */
	}
}
@keyframes line-3-open{
	15%{
		translate: 0 -133%;
	}
	60%{
		rotate: 0deg;
		transform:skew(0deg);
	}
	100%{
		translate: 0 -133%;
		rotate:-45deg;
		transform:skew(45deg);
	}
}

@keyframes line-1-close{
	0%{
		translate: 0 133%;
		rotate:45deg;
	}
	40%{
		rotate:0deg;
	}
	85%{
		translate: 0 133%;
	}
	100%{
		translate: 0 0;
		rotate: 0deg;
	}
}
@keyframes line-2-close{
	0%{
		opacity:0; /*TODO: make fade out and also make fade in smooother */
	}
	75%{
		opacity:0;
	}
	100%{
		opacity:1;
	}
}
@keyframes line-3-close{
	0%{
		translate: 0 -133%;
		rotate:-45deg;
	}
	40%{
		rotate: 0deg;
	}
	85%{
		translate: 0 -133%;
	}
	100%{
		translate: 0 0;
		rotate: 0deg;
	}
}

/*custom mouse */
#mouse {
	position: fixed;
	z-index: 99;
	pointer-events: none;
	mix-blend-mode: difference;
	left: var(--mouseX);
	top: var(--mouseY);
	width: 40px;
	height: 40px;
	background: rgb(20, 20, 20);
	border: 5px solid rgb(255, 255, 255);
	border-radius: 40px;
	transform: translate(-50%, -50%);
}
#spinnyA {
	transform-origin: 50% 55%;
}
#spinnyV {
	transform-origin: 15% 50%; /*no clue why such an odd value */
}
.spinny {
	position: absolute;
	transform: rotateZ(var(--scroll));
	font-size: 95%;
}
@media screen and (max-width: 1000px) {
	#spinnyV {
		top: 0.2vw;
	}
}
</style>
