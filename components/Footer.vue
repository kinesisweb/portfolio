<template>
	<footer>
		<div class="text-center mt-n6" style="position:absolute; top: 0">
			<v-btn tile x-large dark @click="toTop">
				<v-icon x-large>mdi-arrow-up-bold-hexagon-outline</v-icon>
				Return to Top
			</v-btn>
		</div>
		<v-container class="mt-10">
			<v-row class="justify-center">
				<v-col cols="auto">
					<v-btn tile x-large>
						<v-icon x-large>mdi-github</v-icon>
					</v-btn>
				</v-col>
				<v-col cols="auto">
					<v-btn tile x-large>
						<v-icon x-large>mdi-linkedin</v-icon>
					</v-btn>
				</v-col>
				<v-col cols="auto">
					<v-btn tile x-large href="mailto:hello@craigriley.uk">
						<v-icon x-large>mdi-email</v-icon>
					</v-btn>
				</v-col>
			</v-row>
		</v-container>
	</footer>
</template>

<script>
export default {
	methods: {
		toTop() {
			window.scroll({
				top: 0,
				behavior: 'smooth'
			});
		}
	}
};
</script>

<style scoped>
footer {
	width: 100%;
	min-height: 300px;
	background-color: #333c58;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
}
</style>
