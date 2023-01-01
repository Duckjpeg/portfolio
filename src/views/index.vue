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
			year: 2022,
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
		document.removeEventListener(card.onmousemove);
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
			this.scrollY = window.pageYOffset;
			if (this.scrollY <= 350) {
				document.documentElement.style.setProperty(
					"--scrollY",
					`${this.scrollY / 5}px`
				);
			} else {
				this.scrollY = 350;
			}
			//document.querySelector(".slash").style.width = calc();
			//need to adjust title wrapper background size using multiplier of scroll height
			console.log(this.scrollY);
		},
	},
};
</script>
<style>
body {
	padding-top: 20px;
}
/*Title */
.mainTitle {
	font-family: var(--titleFont);
	font-size: calc(11.5vw - var(--scrollY));
	color: var(--mainFontColor);
}
.surnameTitle {
	font-family: var(--titleFont);
	font-size: calc(3vw - var(--scrollY) / 5);
	color: var(--smallTextColor);
	position: relative;
	left: 0.5vw;
	top: calc(-3.5vw + var(--scrollY) / 200);
	letter-spacing: calc(5.1vw - var(--scrollY) * 0.5);
}
.afterSlash {
	font-family: var(--titleFont);
	color: var(--mainFontColor);
	position: relative;
	font-size: calc(14vw - var(--scrollY));
	left: 5vw;
}
.titleWrapper {
	display: flex;
	flex-direction: row;
}
.titleContainer {
	padding: 1vw 0 0 2vw;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	width: 100dvw;
	height: calc(21.5vw - var(--scrollY) * 1.5);
	background: linear-gradient(
		180deg,
		rgba(20 20 20 / 1) 0%,
		rgba(20 20 20 / 1) 75%,
		rgba(20 20 20 / 0.9) 85%,
		rgba(20 20 20 / 0.7) 92%,
		rgba(20, 20, 20, 0.5) 95%,
		rgba(0, 0, 0, 0) 100%
	);
}
.slash {
	width: 1vw;
	height: calc(15vw - var(--scrollY));
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
	left: 3.5vw;
	transform: skew(-30deg);
}

/*warning banner for screen size */
.sizeWarn {
	width: 100vw;
	width: 100dvw;
	height: 30px;
	display: none;
	font-family: "Inter", sans-serif;
	font-size: 10px;
	background: rgba(255, 0, 0, 0.5);
	position: absolute;
	left: 0;
	top: 0;
	color: var(--mainFontColor);
}

/*Nav */
/*Nav */
/*Nav */
.navBar {
}
/*max font stuff (above 1000px) */
@media screen and (min-width: 1000px) {
	.mainTitle {
		font-size: calc(120px - var(--scrollY) * 0.9);
	}
	.slash {
		left: 35px;
		height: calc(150px - var(--scrollY));
	}
	.afterSlash {
		position: relative;
		left: 50px;
		font-size: calc(150px - var(--scrollY));
		top:-6px;
	}
	.titleContainer {
		padding: 20px 0 0 20px;
	}
	.surnameTitle {
		font-size: calc(30px - var(--scrollY) / 5);
		left: 5px;
		top: calc(-35px + var(--scrollY) / 10);
		letter-spacing: calc(55px - var(--scrollY) / 2.25);
	}
	.titleContainer {
		padding: 10px 0 0 20px;
		height: calc(215px - var(--scrollY) * 1.5);
	}
}
@media screen and (max-width: 500px) {
	.titleContainer {
		left: 3.5vw;
		height: 21.5vw; /*doesn't shrink since at that scale theres no point */
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
	.titleContainer > .titleWrapper > .afterSlash {
		position: relative;
		top: 4px;
	}
	.sizeWarn {
		display: none;
	}
	.surnameTitle {
		position: relative;
		top: -2vw;
	}
}
</style>
