<template>
	<div class="menuHam">
		<input type="checkbox" />
		<div class="bar" id="line1"></div>
		<div class="bar" id="line2"></div>
		<div class="bar" id="line3"></div>
	</div>
</template>
<script></script>
<style>
.bar {
	width: 10vw;
	height: 2vw;
	border: 0.1vw var(--mainFontColor) solid;
	background: rgb(20 20 20);
	margin: 0.725vw; /*TODO: make work on screen sizes */
	transform: skew(-20deg);
}
#line1 {
	/*TODO: make so no animate on page load */
	animation: line-1-close 600ms forwards;
}
#line2 {
	animation: line-2-close 600ms forwards;
}
#line3 {
	animation: line-3-close 600ms forwards;
}
.menuHam > input {
	cursor: none;
	width: 10vw;
	height: 8vw; /*need to adjust size on scroll*/
	position: absolute;
	opacity: 0;
	z-index: 99;
}
.menuHam > input:checked ~ #line1 {
	animation: line-1-open 600ms forwards;
}
.menuHam > input:checked ~ #line2 {
	animation: line-2-open 600ms forwards;
}
.menuHam > input:checked ~ #line3 {
	animation: line-3-open 600ms forwards;
}
.menuHam {
	z-index: 98;
	position: fixed;
	top: 3.5vw;
	right: 0;
}
@keyframes line-1-open {
	15% {
		translate: 0 133%;
	}
	60% {
		rotate: 0deg;
		transform: skew(0deg);
	}
	100% {
		translate: 0 133%;
		rotate: 45deg;
		transform: skew(-45deg);
	}
}
@keyframes line-2-open {
	0% {
		opacity: 1;
	}
	25% {
		opacity: 0;
	}
	100% {
		opacity: 0; /*TODO: make fade out and also make fade in smooother */
	}
}
@keyframes line-3-open {
	15% {
		translate: 0 -133%;
	}
	60% {
		rotate: 0deg;
		transform: skew(0deg);
	}
	100% {
		translate: 0 -133%;
		rotate: -45deg;
		transform: skew(45deg);
	}
}
@keyframes line-1-close {
	0% {
		translate: 0 133%;
		rotate: 45deg;
	}
	40% {
		rotate: 0deg;
	}
	85% {
		translate: 0 133%;
	}
	100% {
		translate: 0 0;
		rotate: 0deg;
	}
}
@keyframes line-2-close {
	0% {
		opacity: 0; /*TODO: make fade out and also make fade in smooother */
	}
	75% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
@keyframes line-3-close {
	0% {
		translate: 0 -133%;
		rotate: -45deg;
	}
	40% {
		rotate: 0deg;
	}
	85% {
		translate: 0 -133%;
	}
	100% {
		translate: 0 0;
		rotate: 0deg;
	}
}
</style>
