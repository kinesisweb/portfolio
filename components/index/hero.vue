<template>
	<section id="hero">
		<v-container
			fluid
			class="ma-0 pa-0 hero"
			style="min-height: calc(100vh - 60px)"
		>
			<v-fade-transition>
				<div
					v-show="showOverlay"
					v-if="activeStack"
					class="hero-overlay"
					:class="{
						right: overlayContent[activeStack].right === true
					}"
				>
					<div class="hero-overlay-title">
						{{ overlayContent[activeStack].title }}
					</div>
					<div class="hero-overlay-content">
						<pre>{{ overlayContent[activeStack].content }}</pre>
					</div>
				</div>
			</v-fade-transition>
			<div>
				<div class="hero-text mb-4">Hi, I'm Craig</div>
				<div class="hero-activator-container mt-4">
					<v-fab-transition>
						<v-btn
							v-show="!hidden"
							:class="{ glow: !showStack }"
							class="hero-activator"
							light
							x-large
							@click="showStack = !showStack"
						>
							<v-icon>mdi-stack-overflow</v-icon>
						</v-btn>
					</v-fab-transition>
				</div>
			</div>
			<div class="hero-stack-container" :class="{ active: showStack }">
				<transition name="scale-bottom-left">
					<div v-show="showStack" class="hero-stack">
						<v-hover
							v-for="(item, n) in stack"
							v-slot:default="{ hover }"
							:key="item.id"
						>
							<v-btn
								:id="'stack-' + item.id"
								class="stack-icon"
								fab
								:color="hover ? '#b36605' : 'secondary'"
								dark
								:style="{
									transform: `rotate(${n *
										circleDegrees}deg) translate(250px) rotate(-${n *
										circleDegrees}deg)`
								}"
								@mouseover="highlight(item.id)"
								@mouseleave="showOverlay = false"
								><v-icon>mdi-{{ item.icon }}</v-icon>
							</v-btn>
						</v-hover>
					</div>
				</transition>
			</div>
		</v-container>
	</section>
</template>

<script>
import sample from '@/codesamples/index.js';

export default {
	data() {
		return {
			hidden: true,
			showStack: false,
			showOverlay: false,
			stack: [
				{ id: 'mysql', icon: 'database' },
				{ id: 'vue', icon: 'vuejs' },
				{ id: 'html', icon: 'language-html5' },
				{ id: 'nuxt', icon: 'nuxt' },
				{ id: 'vuetify', icon: 'vuetify' },
				{ id: 'nodejs', icon: 'nodejs' },
				{ id: 'js', icon: 'language-javascript' },
				{ id: 'wordpress', icon: 'wordpress' },
				{ id: 'git', icon: 'git' },
				{ id: 'dotnet', icon: 'dot-net' },
				{ id: 'css', icon: 'language-css3' }
			],
			overlayContent: {
				mysql: {
					title: 'MySQL',
					content: sample.mysql,
					right: true
				},
				vue: {
					title: 'Vue',
					right: true,
					content: sample.vue
				},
				vuetify: {
					title: 'Vuetify',
					content: sample.vuetify
				},
				html: {
					title: 'HTML5',
					right: true,
					content: sample.html
				},
				nuxt: {
					title: 'Nuxt',
					content: sample.nuxt
				},
				nodejs: {
					title: 'Node JS',
					content: sample.node
				},
				css: {
					title: 'CSS / SCSS',
					content: sample.css,
					right: true
				},
				wordpress: {
					title: 'Wordpress / PHP',
					content: sample.php
				},
				git: {
					title: 'Git Revision Control',
					right: true,
					content: sample.git
				},
				dotnet: {
					title: 'C# .NET',
					right: true,
					content: sample.dotnet
				},
				js: {
					title: 'Javascript',
					content: sample.js
				}
			},
			activeStack: null
		};
	},
	computed: {
		circleDegrees() {
			return 360 / this.stack.length;
		}
	},
	mounted() {
		this.hidden = false;
	},
	methods: {
		highlight(sector) {
			this.activeStack = sector;
			this.showOverlay = true;
		}
	}
};
</script>

<style lang="scss" scoped>
.hero {
	background: linear-gradient(
			to bottom,
			rgba(51, 60, 88, 0.2) 0%,
			rgba(51, 60, 88, 0.6) 80%,
			#333c58 calc(100% - 60px)
		),
		url('~@/assets/hero-background.png') 95% center / cover;
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
}

.hero-activator-container {
	text-align: center;
}

@media only screen and (max-width: 767px) {
	.hero-activator-container {
		display: none;
	}
}

.hero-overlay {
	position: absolute;
	width: calc(100% - 40px);
	height: 90%;
	display: flex;
	align-items: flex-start;
	top: 0;
	justify-content: center;
	font-family: 'Consolas', 'Monaco', 'Lucida Console', 'Courier New',
		monospace;
	opacity: 0.5;
	flex-flow: column;

	&.right {
		align-items: flex-end;
	}

	.hero-overlay-title {
		font-size: 2em;
	}
}

.hero-activator.glow {
	animation: glow 2s infinite;
}

.hero-text {
	font-size: 2em;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.hero-stack-container {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	pointer-events: none;

	&.active {
		animation: pulse 10s infinite linear;
	}

	.stack-icon {
		pointer-events: all;
	}
}

.hero-stack {
	width: 500px;
	height: 500px;
	position: relative;
	transition: transform 100ms ease-in-out;
}

.stack-icon {
	display: block;
	position: absolute;
	top: calc(50% - 28px);
	left: calc(50% - 28px);
	overflow: hidden;
	transition: all 300ms ease-in-out;
}

.scale-bottom-left-enter-active,
.scale-bottom-left-leave-active {
	transition: transform 300ms ease-in-out;
	transform-origin: center;
}

.scale-bottom-left-enter,
.scale-bottom-left-leave-to {
	transform: scale(0) rotate(90deg);
}

@keyframes pulse {
	0%,
	100% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.05);
	}
}

@keyframes glow {
	0%,
	100% {
		border-color: #ff8f00;
		box-shadow: 0 0 5px rgba(0, 77, 122, 0.2),
			inset 0 0 5px rgba(0, 77, 122, 0.1), 0 2px 0 #000;
	}
	50% {
		border-color: #ff8f00;
		box-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
			inset 0 0 10px rgba(255, 255, 255, 0.4), 0 2px 0 #000;
	}
}
</style>
