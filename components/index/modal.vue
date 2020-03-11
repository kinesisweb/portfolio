<template>
	<aside id="modal">
		<v-dialog
			v-if="active"
			:value="show"
			width="700"
			content-class="modal-dialog"
			persistent
			@change="$emit('close')"
			@click:outside="$emit('close')"
		>
			<v-card>
				<v-card-title class="headline" primary-title>
					{{ modals[active].title }}
				</v-card-title>

				<v-card-text>
					<v-carousel hide-delimiters>
						<v-carousel-item
							v-for="(item, i) in modals[active].carousel"
							:key="i"
							:src="item"
						></v-carousel-item>
					</v-carousel>
					<v-divider />
					<v-subheader>Challenges</v-subheader>
					<v-list class="project-challenges mt-n4">
						<v-list-item
							v-for="(item, i) in modals[active].challenges"
							:key="i"
							><span :class="{ 'alt-text': i % 2 === 0 }">{{
								item
							}}</span></v-list-item
						>
					</v-list>
				</v-card-text>

				<v-divider></v-divider>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="secondary" text @click="$emit('close')">
						Close
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</aside>
</template>

<script>
export default {
	props: {
		show: {
			type: Boolean,
			default: false
		},
		active: {
			type: String,
			default: null
		}
	},
	data() {
		return {
			modals: {
				vuantecca: {
					title: 'Vu an Tecca',
					carousel: [
						require('@/assets/projects/vuantecca.png'),
						require('@/assets/projects/vuantecca2.png'),
						require('@/assets/projects/vuantecca3.png')
					],
					challenges: [
						"Making website responsive to user's dark/light settings.",
						'Giving the business operator a mechanism for updating vacancy data and pricing on a live calendar by means of an authorised CRUD API',
						'Not getting distracted by the adorable corgi photo'
					]
				},
				kinesis: {
					title: 'Kinesis Computer Services',
					carousel: [
						require('@/assets/projects/kinesis.png'),
						require('@/assets/projects/kinesis2.png'),
						require('@/assets/projects/kinesis3.png')
					],
					challenges: [
						'Not satisfied with any "off the shelf" multi-dimensional image galleries, there was a need to create a new one from scratch which would allow previews of adjacent galleries/images and which would respond to the viewport of the browser.'
					]
				},
				lazyjourno: {
					title: 'Lazy Journo',
					carousel: [
						require('@/assets/projects/lazyjourno.png'),
						require('@/assets/projects/lazyjourno2.png'),
						require('@/assets/projects/lazyjourno3.png')
					],
					challenges: [
						'Learning PHP in the space of a few days to enable the necessary modifications and additions to the site.',
						'Building a mechanism from scratch that allowed the site operator to tally an average of both journalists and publications prediction accuracy based solely on the tags present on site posts.',
						'Adding a method for the operator to easily edit site sponsorship details without developer involvement.',
						'Rewriting significant amounts of Wordpress code to enable the chosen design to function properly.'
					]
				},
				renandrain: {
					title: 'Ren and Rain Marketing',
					carousel: [
						require('@/assets/projects/renandrain.png'),
						require('@/assets/projects/renandrain2.png'),
						require('@/assets/projects/renandrain3.png'),
						require('@/assets/projects/renandrain4.png')
					],
					challenges: [
						'Creating a Vue component that could take a provided image, chop it in a designated number of tiles across both axes and then overlay HTML on those tiles, all while remaining responsive to viewport resizing.',
						'Implementing a light CMS to enable the site operator to add new galleries at their own inclination without developer intervention.',
						'Integrating the Stripe payment API (to be rolled out at a future date).',
						'Use of a custom email verification system which functions purely via link.'
					]
				},
				tictactoe: {
					title: 'Noughts & Crosses Game',
					carousel: [require('@/assets/projects/noughtscrosses.png')],
					challenges: [
						'Written entirely in Javascript, with no frameworks or libraries and using ES6 classes.',
						'Programming reactive AI that responds to the state of play before deciding upon a move, resulting in an opponent that is quite challenging',
						'Creating a realistic prospect of AI mistakes, allowing the player to win as well.'
					]
				},
				proelectric: {
					title: 'Pro-Electric Ltd',
					carousel: [
						require('@/assets/projects/proelectric.png'),
						require('@/assets/projects/proelectric2.png'),
						require('@/assets/projects/proelectric3.png')
					],
					challenges: [
						'Creating SVG territory maps in Illustrator and using paths to make individual counties and regions clickable.',
						'Using CSS to craft interesting shapes which mirrored existing brand design.',
						'Note: this website is still awaiting copy writing from the business owner. All text is currently placeholder text.'
					]
				}
			}
		};
	}
};
</script>

<style lang="scss">
@media only screen and (max-width: 700px) {
	.modal-dialog {
		margin: 0;
	}
}

.modal-dialog {
	max-width: 100vw;
}

.project-challenges span.alt-text {
	color: #2fbbff !important;
}
</style>
