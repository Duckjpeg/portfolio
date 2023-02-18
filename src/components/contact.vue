<template>
	<div id="contactWrapper">
		If you wish to contact me don't hesitate to send an email or check out my instagram :)
		<section>
			<a :href="`mailto:harry.steven.b@gmail.com`" class="hover" id="emailLink"><img class="contactImg" src="/mail.png" /></a>
			<a :href="`https://www.instagram.com/harry__steven/ `" class="hover" id="instagram"><img class="contactImg" src="/instagram.png" /></a>
		</section>
	</div>
</template>
<style scoped>
#contactWrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.contactImg {
	height: 50px;
	aspect-ratio: 1;
	margin: 50px;
}
</style>
