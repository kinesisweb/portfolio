<template>
	<div class="hex-outer-container">
		<div
			class="hex-icon-container"
			:class="{ 'mb-4': isTitle || isDescription }"
		>
			<div class="hex-icon">
				<v-icon color="white" :size="48" style="z-index: 1">
					<slot></slot>
				</v-icon>
			</div>
		</div>
		<div v-if="isTitle" class="title text-center">
			<slot name="title"></slot>
		</div>
		<div v-if="isDescription" class="body-2">
			<slot name="description"></slot>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		isTitle() {
			if (!this.$slots.title) return false;
			else return !!this.$slots.title[0].text.length;
		},
		isDescription() {
			if (!this.$slots.description) return false;
			else return !!this.$slots.description[0].text.length;
		}
	}
};
</script>

<style lang="scss">
.hex-outer-container {
	width: 200px;
	text-align: center;
	margin: 0 auto;
}

.hex-icon-container {
	height: 100px;
	width: 100px;
	display: inline-block;
	position: relative;
	text-align: center;
}
.hex-icon {
	background: #333c58;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: calc(100% * 0.57735);

	&:before {
		background-color: inherit;
		content: '';
		height: inherit;
		position: absolute;
		right: calc((100% / 2) - ((100% * 0.57735) / 2));
		top: 0;
		transform: rotateZ(60deg);
		width: inherit;
	}

	&:after {
		background-color: inherit;
		content: '';
		height: inherit;
		position: absolute;
		right: calc((100% / 2) - ((100% * 0.57735) / 2));
		top: 0;
		transform: rotateZ(-60deg);
		width: inherit;
	}
}
</style>
