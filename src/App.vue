<template>
	<section id="pageWrapper">
		<svg id="noise" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100vw" height="100vh">
			<filter id="n" x="0" y="0">
				<feTurbulence type="fractalNoise" baseFrequency="0.4" stitchTiles="stitch" />
			</filter>

			<rect width="10000px" height="100vh" filter="url(#n)" opacity="0.9" />
		</svg>
		<router-view />
	</section>
</template>
<script>
export default {};
</script>
<style>
* {
	cursor: none;
	scroll-behavior: smooth;
}
/*z-index: 99 -> mouse -> navbar -> title */
:root {
	--mainBg: rgb(15, 15, 30);
	--mainFontColor: rgb(235 235 235);
	--subFontColor: rgb(200 200 200);
	--smallTextColor: rgb(130 130 130);

	--fixedElementsBg: rgb(30 30 60);

	--goldColor: rgb(255, 213, 0);
	--scaleMouse: 1;

	--mainFont: sans-serif;
	--titleFont: "Major Mono Display", monospace;
	--cursiveFont: "Pacifico", cursive;

	--scrollY: 0px;
	--scrollYvw: 0px;
	--scrollYnoUnit: 0;
}
::selection {
	background-color: var(--mainFontColor);
	color: var(--mainBg);
}
#noise {
	position: fixed;
	z-index: 97;
	width: 110vw;
	height: 110vh;
	top: 0;
	left: 0;
	opacity: 0.08;
	pointer-events: none;
}
body {
	background: rgb(20 20 60);
	display: absolute;
	left: 0;
	top: 0;
}
html {
	overflow-x: hidden;
}
body #mouse {
	opacity: 0;
}
body:hover #mouse {
	opacity: 1;
}
.mainTitleTemplate {
	font-family: var(--titleFont);
	color: var(--mainFontColor);
}
.subTitle {
	font-family: "Inter", sans-serif;
	font-weight: 700; /*weights - 700, 100, 300*/
	color: var(--goldColor);
}
.info {
	font-family: "Inter", sans-serif;
	font-weight: 300; /*weights - 700, 100, 300*/
	color: var(--subFontColor);
}
.smallText {
	font-family: "Inter", sans-serif;
	font-weight: 200; /*weights - 700, 100, 300*/
	color: var(--smallTextColor);
}
</style>
