<template lang="">
	<div>
		<nav class="navBar">
			<div id="cards">
				<div class="card">
					<router-link class="bigNavLink" to="/"></router-link>
					<div class="cardBorder"></div>
					<div class="cardContent">
						<div class="cardImgWrapper">
							<img src="/house.png" alt="" class="home cardImg" />
						</div>
						<div class="infoWrapper">
							<div class="infoTitle">Home</div>
							<div class="infoDescription"></div>
						</div>
					</div>
				</div>
				<div class="card">
					<router-link class="bigNavLink" to="#about"></router-link>
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
					<router-link class="bigNavLink" to="#contact"></router-link>
					<div class="cardBorder"></div>
					<div class="cardContent">
						<div class="cardImgWrapper">
							<img src="/contact.png" class="contact cardImg" />
						</div>
						<div class="infoWrapper">
							<div class="infoTitle">contAct</div>
							<div class="infoDescription"></div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
.navBar {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
}
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
