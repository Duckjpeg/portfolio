<template>
	<div>
		<div id="aboutTitle">
			first <br />
			a little bit <br />about me
			<br />
			<br />
			<br />
			<arrow />
		</div>
		<div id="aboutContent">
			<div class="animatedBackground"></div>
			<span>
				I am currently studying for my A-levels doing Further Maths, Physics and Chemistry.<br /><br />
				In my free time, I've been teaching myself web development through online courses and tutorials. <br /><br />This has allowed me to gain a deep
				understanding of programming languages, such as HTML, CSS, and JavaScript, as well as popular frameworks like Vuejs and express js and mongoDB.
				<br /><br />Learning web development has honed my problem-solving skills, attention to detail, and ability to work independently.<br /><br /><br /><br /><br /><br />
				Why me?<br /><br />
				I can help you create a custom website that showcases your brand and helps you connect with your customers.<br /><br />
				As a solo website developer, I'll work closely with you to understand your business and create a website that meets your unique needs. If you
				need a simple website to showcase your services or a website that stands out from the rest.<br /><br />
				My goal is to create a website that reflects your brand and helps you reach your business goals. I use the latest web design technologies to
				ensure that your website is fast, responsive, and optimized for search engines. And because I'm a solo developer, you'll get personalized
				attention and quick turnaround times.<br /><br />
				I believe in delivering high-quality websites that are both beautiful and functional. That's why I offer competitive pricing and flexible
				payment options based on the features and functions of your website, so you can get a website that fits your budget. And if you need ongoing
				maintenance or support, I'm here to help you every step of the way.
			</span>
			<br />
			<br />
			<br /><br />
			<br />
			<br />
			<arrow />
		</div>
	</div>
</template>
<script>
import arrow from "../components/arrow.vue";
export default {
	components: {
		arrow,
	},
	data() {
		return {};
	},
	mounted() {},
	methods: {},
};
</script>
<style scoped>
#aboutTitle {
	font-family: var(--titleFont);
	color: var(--goldColor);
	font-size: 6vw;
	text-align: center;
	font-weight: 600;
	height: 100vh;
	padding-top: 3vw;
	line-height: 10vw;
}
#aboutContent {
	font-family: var(--mainFont);
	color: var(--goldColor);
	text-align: left;
	font-size: 4vw;
	margin-bottom: 80vw;
	padding: 4vw;
}

#aboutContent span {
}

#aboutContent > img {
	width: 100%;
}
@media screen and (min-width: 1000px) {
	#aboutTitle {
		font-family: var(--titleFont);
		color: var(--goldColor);
		font-size: 60px;
		text-align: center;
		font-weight: 600;
		padding-top: 30px;
		line-height: 100px;
	}
}
</style>
