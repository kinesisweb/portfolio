<template>
	<section id="projects">
		<v-container>
			<v-card light flat color="transparent">
				<v-card-title
					class="justify-center font-weight-thin display-2 my-8 text-uppercase"
					><span class="recent-text">Recent </span
					>Projects</v-card-title
				>
				<v-card-text>
					<v-row>
						<v-col cols="12">
							<v-card flat color="transparent">
								<v-container fluid>
									<comp-project-gallery
										@loadModal="loadModal"
									/>
									<comp-project-modal
										:show="modal.show"
										:active="modal.id"
										@close="modal.show = false"
									/>
								</v-container>
							</v-card>
						</v-col>
					</v-row>
				</v-card-text>
			</v-card>
		</v-container>
	</section>
</template>

<script>
import CompProjectGallery from '@/components/index/gallery';
import CompProjectModal from '@/components/index/modal';

export default {
	components: {
		CompProjectGallery,
		CompProjectModal
	},
	data() {
		return {
			modal: {
				show: false,
				id: null
			}
		};
	},
	methods: {
		loadModal(payload) {
			this.modal.id = payload;
			this.modal.show = true;
		}
	}
};
</script>

<style>
section#projects {
	background-color: #eee;
	min-height: 50vh;
}

@media only screen and (max-width: 767px) {
	.recent-text {
		display: none;
	}
}
</style>
