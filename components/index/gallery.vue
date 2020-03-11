<template>
	<v-row>
		<v-col
			v-for="project in projects"
			:key="project.name"
			class="d-flex child-flex"
			cols="12"
			md="4"
		>
			<nuxt-appear name="slide-from-bottom" :delay="project.delay">
				<v-hover v-slot:default="{ hover }">
					<v-card flat tile class="d-flex project-item">
						<v-img
							:src="project.src"
							aspect-ratio="1"
							class="grey lighten-2"
						>
							<template v-slot:placeholder>
								<v-row
									class="fill-height ma-0"
									align="center"
									justify="center"
								>
									<v-progress-circular
										indeterminate
										color="grey lighten-5"
									></v-progress-circular>
								</v-row>
							</template>
							<v-expand-transition>
								<div
									v-if="hover"
									class="d-flex transition-slow-in-fast-out orange darken-2 v-card--reveal display-1 white--text"
									style="height: 100%;"
								>
									<div class="text-center">
										<div>
											{{ project.name }}
										</div>
										<div class="title">
											{{ project.stack }}
										</div>
									</div>
									<div>
										<v-btn
											v-if="project.git"
											tile
											x-large
											color="white"
											:href="project.git"
											target="_blank"
										>
											<v-icon x-large>mdi-github</v-icon>
										</v-btn>
										<v-btn
											outlined
											x-large
											color="white"
											@click="
												$emit('loadModal', project.id)
											"
										>
											Learn More
										</v-btn>
									</div>
								</div>
							</v-expand-transition>
						</v-img>
					</v-card>
				</v-hover>
			</nuxt-appear>
		</v-col>
	</v-row>
</template>

<script>
export default {
	data() {
		return {
			projects: [
				{
					id: 'lazyjourno',
					name: 'Lazy Journo',
					delay: 1000,
					src: require('@/assets/projects/lazyjourno.png'),
					stack: 'Wordpress / PHP',
					git: 'https://github.com/kinesisweb/lazyjourno'
				},
				{
					id: 'proelectric',
					name: 'Pro-Electric Ltd',
					delay: 800,
					src: require('@/assets/projects/proelectric.png'),
					stack: 'Node / Javascript'
				},
				{
					id: 'renandrain',
					name: 'Ren & Rain Marketing',
					delay: 600,
					src: require('@/assets/projects/renandrain.png'),
					stack: 'NodeJS / Vue / MySQL',
					git: 'https://github.com/kinesisweb/renandrain'
				},
				{
					id: 'vuantecca',
					name: 'Vu an Tecca',
					delay: 400,
					src: require('@/assets/projects/vuantecca.png'),
					stack: 'NodeJS / Nuxt',
					git: 'https://github.com/kinesisweb/Vu_an_Tecca'
				},
				{
					id: 'tictactoe',
					name: 'Noughts & Crosses',
					delay: 200,
					src: require('@/assets/projects/noughtscrosses.png'),
					stack: 'Vanilla JS',
					git: 'https://github.com/kinesisweb/tic-tac-toe'
				},
				{
					id: 'kinesis',
					name: 'Kinesis Computer Services',
					delay: 0,
					src: require('@/assets/projects/kinesis.png'),
					stack: 'NodeJS / Handlebars'
				}
			]
		};
	}
};
</script>

<style scoped>
.v-card--reveal {
	align-items: center;
	bottom: 0;
	justify-content: space-around;
	opacity: 0.9;
	position: absolute;
	width: 100%;
	flex-flow: column;
}
</style>
