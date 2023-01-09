<template>
	<section id="pageWrapper">
		<router-view />
	</section>
</template>
<script>
export default {};
</script>
<style>
* {
	cursor: none;
}
:root {
	--mainBg: rgb(20 20 20);
	--mainFontColor: rgb(235 235 235);
	--subFontColor: rgb(200 200 200);
	--smallTextColor: rgb(130 130 130);

	--mainFont: "Inter", sans-serif;
	--titleFont: "Major Mono Display", monospace;

	--scrollY: 0px;
	--scroll: 0px;
}
::selection {
	background-color: var(--mainFontColor);
	color: var(--mainBg);
}
body {
	scroll-behavior: smooth;
	background: var(--mainBg);
	display: absolute;
	left: 0;
	top: 0;
}
#pageWrapper {
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
	color: var(--subFontColor);
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
