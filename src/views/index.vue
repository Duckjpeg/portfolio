<template>
	<main>
		<header>
			<div class="sizeWarn">
				This website may have some problems due to your screen width
			</div>
			<nav class="navBar">
				<!--
			<div class="navWrapper">
				<router-link to="#start" class="navLinks">stARt</router-link>
				<router-link to="#about" class="navLinks">About</router-link>
				<router-link to="#projects" class="navLinks"
					>pRojects</router-link
				>
				<router-link to="#contact" class="navLinks"
					>coNtAct</router-link
				>
			</div>-->
				<div id="cards">
					<div class="card">
						<router-link class="bigNavLink" to="/"></router-link>
						<div class="cardBorder"></div>
						<div class="cardContent">
							<div class="cardImgWrapper">
								<img
									src="/house.png"
									alt=""
									class="home cardImg"
								/>
							</div>
							<div class="infoWrapper">
								<div class="infoTitle">Home</div>
								<div class="infoDescription"></div>
							</div>
						</div>
					</div>
					<div class="card">
						<router-link
							class="bigNavLink"
							to="#about"
						></router-link>
						<div class="cardBorder"></div>
						<div class="cardContent">
							<div class="cardImgWrapper">
								<img src="/info.png" class="about cardImg" />
							</div>
							<div class="infoWrapper">
								<div class="infoTitle">About</div>
								<div class="infoDescription"></div>
							</div>
						</div>
					</div>
					<div class="card">
						<router-link
							class="bigNavLink"
							to="#projects"
						></router-link>
						<div class="cardBorder"></div>
						<div class="cardContent">
							<div class="cardImgWrapper">
								<img
									src="/blueprint.png"
									class="projects cardImg"
								/>
							</div>
							<div class="infoWrapper">
								<div class="infoTitle">pRojects</div>
								<div class="infoDescription"></div>
							</div>
						</div>
					</div>
					<div class="card">
						<router-link
							class="bigNavLink"
							to="#contact"
						></router-link>
						<div class="cardBorder"></div>
						<div class="cardContent">
							<div class="cardImgWrapper">
								<img
									src="/contact.png"
									class="contact cardImg"
								/>
							</div>
							<div class="infoWrapper">
								<div class="infoTitle">contAct</div>
								<div class="infoDescription"></div>
							</div>
						</div>
					</div>
				</div>
			</nav>
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
		//so like font size (OG) - scroll height then when scroll height is big enough it doesnt't subract more
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
			document.documentElement.style.setProperty(
				"--scrollY",
				`${this.scrollY / 5}px`
			);
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
	top: -5px;
	left: 5vw;
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
	height: calc(21.5vw - var(--scrollY) * 3.3);
	max-height: 210px;
	background: linear-gradient(
		180deg,
		rgba(20 20 20 / 1) 0%,
		rgba(20 20 20 / 0.9) 65%,
		rgba(20 20 20 / 0.75) 78%,
		rgba(20 20 20 / 0.5) 90%,
		rgba(20, 20, 20, 0.3) 95%,
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
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
}
/*cards */
/*For Nav bar at start from hyperplexed*/
#cards {
	/*display: inline-grid;*/
	display: none;
	width: 95vw;
	width: 95dvw;
	gap: 1vw;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 1fr;
	padding: 2.5vw;
}
#cards:hover > .card > .cardBorder {
	opacity: 1; /*on hover they all set to clear and set to the coordinate */
	/*for some reason it doesn't overflow the box */
	/*doesnt overflow because its a background not its own element numb nuts */
}
.card {
	aspect-ratio: 5/4; /*makes square */
	background-color: rgba(255 255 255 / 0.2);
	border-radius: 0.75vw;
	cursor: pointer;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 350px;
}
.card::before {
	/*acting on top layer */
	background: radial-gradient(
		800px circle at var(--mouse-x) var(--mouse-y),
		rgba(255 255 255 / 0.1),
		transparent 40%
	);
	z-index: 3;
}
.card:hover::before {
	opacity: 1;
}
.card::before,
.card > .cardBorder {
	height: 100%;
	width: 100%;
	border-radius: inherit;
	content: "";
	position: absolute;
	left: 0px;
	top: 0px;
	opacity: 0;
	transition: opacity 500ms;
}
.cardBorder {
	/*gradient on card thats like => card | cardBorder(radial) | cardContetnt | card::before(raidial) */
	background: radial-gradient(
		400px circle at var(--mouse-x) var(--mouse-y),
		rgba(255, 255, 255, 0.8),
		transparent 40%
	);
	z-index: 1;
}
.card > .cardContent {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position: relative;
	height: calc(100% - 0.4vw);
	width: calc(100% - 0.4vw);
	background: rgba(30 30 30 / 1);
	margin: 0.2vw;
	border-radius: inherit;
	z-index: 2;
}
/*end of cards */

.bigNavLink {
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 4;
}

.cardImgWrapper > .cardImg {
	width: 11vw;
	height: 11vw;
	max-width: 200px;
	max-height: 200px;
}
.cardImgWrapper {
	filter: invert(92%); /*pretty much same as title color */
}
.infoTitle {
	font-family: var(--titleFont);
	color: var(--mainFontColor);
	font-size: 3vw;
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
}
/*for really small width screens */
@media screen and (max-width: 300px) {
	.titleContainer {
		padding: 30px 0 0 2px;
	}
	.sizeWarn {
		display: flex;
	}
}
/*for really big screens */
@media screen and (min-width: 1500px) {
	#cards {
		padding: 50px;
		display: flex;
		display: none; /*until I find where to put them */
		justify-content: space-between;
	}
	#cards > .card {
		width: 350px;
	}
	.infoTitle {
		font-size: 45px;
	}
}
</style>
