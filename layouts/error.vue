<template>
	<div>
		<v-app-bar app color="#333c58">
			<v-toolbar-title>Craig Riley</v-toolbar-title>
		</v-app-bar>
		<v-content light style="color: black" class="text-center mt-10">
			<div v-if="error.statusCode === 404" class="my-10">
				<h1>
					{{ pageNotFound }}
				</h1>
				<v-subheader light class="justify-center"
					>Congratulations! You got lost on a single-page
					website.</v-subheader
				>
			</div>
			<h1 v-else>
				{{ otherError }}
			</h1>
			<v-btn x-large nuxt to="/" color="secondary">
				<v-icon x-large class="mr-4">mdi-home</v-icon> Head Back
			</v-btn>
		</v-content>
	</div>
</template>

<script>
export default {
	layout: 'empty',
	props: {
		error: {
			type: Object,
			default: null
		}
	},
	data() {
		return {
			pageNotFound: '404 Not Found',
			otherError: 'An error occurred'
		};
	},
	head() {
		const title =
			this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
		return {
			title
		};
	}
};
</script>

<style scoped>
h1 {
	font-size: 20px;
}
</style>
