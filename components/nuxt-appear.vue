<template>
	<div
		ref="appear"
		v-intersect.quiet.once="{
			handler: intersect,
			options: {
				threshold: [0, 0.5, 1]
			}
		}"
		class="nuxt-appear hidden"
		:class="[name]"
	>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'NuxtAppear',
	props: {
		name: {
			type: String,
			default: 'fade'
		},
		delay: {
			type: Number,
			default: 0
		}
	},
	mounted() {
		const inView = this.isInViewport(this.$refs.appear);
		if (inView) this.intersect();
	},
	methods: {
		intersect() {
			setTimeout(() => {
				this.$refs.appear.classList.remove('hidden');
			}, this.delay);
		},
		isInViewport(elem) {
			const bounding = elem.getBoundingClientRect();
			return (
				bounding.top >= 0 &&
				bounding.bottom <=
					(window.innerHeight ||
						document.documentElement.clientHeight)
			);
		}
	}
};
</script>

<style lang="scss">
.nuxt-appear {
	&.fade.hidden {
		opacity: 0;
	}

	&.fade {
		transition: opacity 1s ease-in-out;
	}

	&.slide-from-left.hidden {
		transform: translateX(-200px);
		opacity: 0;
	}

	&.slide-from-left {
		transition: transform 1s ease-out, opacity 500ms ease-out 500ms;
	}

	&.slide-from-bottom.hidden {
		transform: translateY(200px);
		opacity: 0;
	}

	&.slide-from-bottom {
		transition: transform 1s ease-out, opacity 500ms ease-out 500ms;
	}

	&.slide-from-right.hidden {
		transform: translateX(300px);
		opacity: 0;
	}

	&.slide-from-right {
		transition: transform 1s ease-out, opacity 500ms ease-out 500ms;
	}
}
</style>
