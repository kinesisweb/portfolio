<template>
	<canvas ref="canvas-hero"></canvas>
</template>

<script>
export default {
	data() {
		return {
			context: null
		};
	},

	mounted() {
		this.context = this.$refs['canvas-hero'].getContext('2d');

		this.$refs['canvas-hero'].width = this.$refs[
			'canvas-hero'
		].parentElement.clientWidth;
		this.$refs['canvas-hero'].height = this.$refs[
			'canvas-hero'
		].parentElement.clientHeight;

		this.drawBackground();
	},

	methods: {
		drawBackground() {
			const bkg = new Image();
			bkg.src = require('@/assets/hero-background.png');

			bkg.onload = () => {
				this.context.drawImage(bkg, 0, 0);
			};
		}
	}
};
</script>
