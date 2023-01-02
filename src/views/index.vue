<template>
	<main>
		<header>
			<div class="mouse"></div>
			<div class="titleContainer">
				<div class="titleWrapper">
					<span class="mainTitle">HARRy</span>
					<div class="slash"></div>
					<span class="afterSlash">{{ year }}</span>
				</div>
				<span class="surnameTitle">steVen</span>
			</div>
			<nav></nav>
		</header>
		<body>
			<div class="subTitle" style="font-size: 200px">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Recusandae numquam, vel obcaecati, nobis perspiciatis velit, a
				distinctio dicta hic reprehenderit tempore. Ratione, voluptate!
				Quam ea nulla vitae fuga porro eaque!
			</div>
		</body>
	</main>
</template>
<script>
export default {
	data() {
		return {
			year: 2023,
			navX: 0,
			navY: 0,
			scrollY: 0,
		};
	},
	mounted() {
		this.year = new Date().getFullYear();
		for (const card of document.querySelectorAll(".card")) {
			card.onmousemove = (event) => this.handleOnMouseMove(event);
		}
		window.addEventListener("scroll", (event) => this.handleOnScroll(event));
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
			document.querySelector('.mouse').setAttribute("style", `top: ${event.pageY}px; left: ${event.pageX}px`)
			//if height => 22vw => 12vw
			this.scrollY = window.pageYOffset / 5;
			if (screen.width < 1000) {
				if (this.scrollY * 0.143 <= 10) {
					//should be *0.22 but js is tweaking
					document.documentElement.style.setProperty(
						"--scrollY",
						`${this.scrollY * 0.14}vw`
					); //should be 10vw ish
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
			document.querySelector('.mouse').setAttribute("style", `top: ${event.pageY}px; left: ${event.pageX}px`)
		},
	},
};
</script>
<style>
/*styles in sections in assets / styles and imported in main.js */
body {
	padding-top: 80px;
	cursor: visible;
}

/*custom mouse */
.mouse {
	position: absolute;
	width:5vw;
	height:5vw;
	background: green;
	border-radius: 5vw;
	transform: translate(-50%, -50%);
	z-index:99;
	pointer-events: none;
}
</style>
