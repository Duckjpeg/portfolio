<template>
	<div id="contactWrapper">
		<span>if you wish to contact me don't hesitate to send an email or check out my instagram</span>
		<section>
			<a :href="`mailto:harry.steven.b@gmail.com`" class="hover" id="emailLink"><img class="contactImg" src="/mail.png" /></a>
			<a :href="`https://www.instagram.com/harry__steven/ `" class="hover" id="instagram"><img class="contactImg" src="/instagram.png" /></a>
			<a :href="`mailto:harry.steven.b@gmail.com`" class="hover" id="emailLink"><img class="contactImg" src="/mail.png" /></a>
			<a :href="`https://www.instagram.com/harry__steven/ `" class="hover" id="instagram"><img class="contactImg" src="/instagram.png" /></a>
			<a :href="`mailto:harry.steven.b@gmail.com`" class="hover" id="emailLink"><img class="contactImg" src="/mail.png" /></a>
			<a :href="`https://www.instagram.com/harry__steven/ `" class="hover" id="instagram"><img class="contactImg" src="/instagram.png" /></a>
			<a :href="`mailto:harry.steven.b@gmail.com`" class="hover" id="emailLink"><img class="contactImg" src="/mail.png" /></a>
			<a :href="`https://www.instagram.com/harry__steven/ `" class="hover" id="instagram"><img class="contactImg" src="/instagram.png" /></a>
			<a :href="`mailto:harry.steven.b@gmail.com`" class="hover" id="emailLink"><img class="contactImg" src="/mail.png" /></a>
			<a :href="`https://www.instagram.com/harry__steven/ `" class="hover" id="instagram"><img class="contactImg" src="/instagram.png" /></a>
			<a :href="`mailto:harry.steven.b@gmail.com`" class="hover" id="emailLink"><img class="contactImg" src="/mail.png" /></a>
			<a :href="`https://www.instagram.com/harry__steven/ `" class="hover" id="instagram"><img class="contactImg" src="/instagram.png" /></a>
			<a :href="`mailto:harry.steven.b@gmail.com`" class="hover" id="emailLink"><img class="contactImg" src="/mail.png" /></a>
			<a :href="`https://www.instagram.com/harry__steven/ `" class="hover" id="instagram"><img class="contactImg" src="/instagram.png" /></a>
			<a :href="`mailto:harry.steven.b@gmail.com`" class="hover" id="emailLink"><img class="contactImg" src="/mail.png" /></a>
			<a :href="`https://www.instagram.com/harry__steven/ `" class="hover" id="instagram"><img class="contactImg" src="/instagram.png" /></a>
			<a :href="`mailto:harry.steven.b@gmail.com`" class="hover" id="emailLink"><img class="contactImg" src="/mail.png" /></a>
			<a :href="`https://www.instagram.com/harry__steven/ `" class="hover" id="instagram"><img class="contactImg" src="/instagram.png" /></a>
		</section>
	</div>
</template>
<style scoped>
#contactWrapper {
	width: 100%;
	display: flex;
	flex-direction: column;
	text-align: center;
	font-size: 3vw;
	font-weight: 300;
	font-family: var(--titleFont);
	overflow-x: hidden;
}
#contactWrapper > section {
	white-space: nowrap;
	position: relative;
	animation: treadmil 3s infinite linear;
}
@keyframes treadmil {
	0% {
		transform: translate(0, 0);
	}
	100% {
		transform: translate(-42vw, 0);
	}
}
/*must be a multiple of image width (210px above 1000px) otherwise its jolty */
@keyframes treadmilBig {
	0% {
		transform: translate(0, 0);
	}
	100% {
		transform: translate(-420px, 0);
	}
}
.contactImg {
	height: 7vw;
	max-height: 70px;
	aspect-ratio: 1;
	padding: 0;
	margin: 7vw;
}
@media screen and (min-width: 1000px) {
	.contactImg {
		margin: 70px;
	}
	#contactWrapper {
		font-size: 30px;
	}
	#contactWrapper > section {
		right: 420px;
		animation: treadmilBig 3s infinite linear;
	}
}
</style>
<script>
export default {
	mounted() {
		console.log(document.querySelector("#instagram").getBoundingClientRect());
	},
	unmounted() {},
	methods: {},
};
</script>
