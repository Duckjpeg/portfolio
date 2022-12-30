<template>
	<body>
		<router-view />
	</body>
</template>
<script>
export default {};
</script>
<style>
:root{
  --mainBg: rgb(20 20 20);
  --mainFontColor : rgb(235 235 235);
  --subFontColor: rgb(200 200 200);
  --smallTextColor: rgb(130 130 130);

  --mainFont: 'Inter', sans-serif;
  --titleFont: "Major Mono Display", monospace;
}
::selection{
  background-color: var(--mainFontColor);
  color:var(--mainBg);
}
body{
  scroll-behavior: smooth;
  background: var(--mainBg);
  overflow-x: hidden;
  display: absolute;
  left:0;
  top:0;
}
.subTitle{
  font-family: 'Inter', sans-serif;
  font-weight:700; /*weights - 700, 100, 300*/
  color : var(--subFontColor)
}
.info{
  font-family: 'Inter', sans-serif;
  font-weight:300; /*weights - 700, 100, 300*/
  color : var(--subFontColor)
}
.smallText{
  font-family: 'Inter', sans-serif;
  font-weight:200; /*weights - 700, 100, 300*/
  color: var(--smallTextColor);
}
</style>
