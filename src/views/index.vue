<template>
	<main>
		<header>
			<div class="sizeWarn">
				This website may have some problems due to your screen width
			</div>
			<div class="titleContainer">
				<div class="titleWrapper">
					<span class="mainTitle">HARRy</span>
					<div class="slash"></div>
					<span class="afterSlash">{{ year }}</span>
				</div>
				<span class="surnameTitle">steVen</span>
			</div>
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
		//TODO: sort on scroll title shrinks to top left and when 3/4 through small nav bar fades in
		//figure out how to make scrollY stay const depending on screen width
		//above 1000px width 350px down is stop
		//500w : 100px;
		//
		window.addEventListener("scroll", this.handleOnScroll);
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
		handleOnScroll() {
			const headerHeight = document.querySelector(".titleContainer").clientHeight;
			//if height => 22vw => 12vw
			this.scrollY = window.pageYOffset / 5;
			if (screen.width < 1000) {
				if ( this.scrollY*0.143 <= 10 ){ //should be *0.22 but js is tweaking
					document.documentElement.style.setProperty(
						"--scrollY",
						`${this.scrollY*0.14}vw`
					); //should be 10vw ish 
				} else {
					document.documentElement.style.setProperty(
						"--scrollY",
						`${70*0.143}vw` //should roughly be 10vw (1/7 * 70 to get 10)
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
/*styles in sections in assets / styles and imported in main.js */
body {
	padding-top: 20px;
}
</style>
