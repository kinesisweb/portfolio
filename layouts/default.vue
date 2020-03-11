<template>
	<v-app light>
		<v-content class="main-content">
			<nuxt />
		</v-content>
		<comp-footer />
	</v-app>
</template>

<script>
import CompFooter from '@/components/Footer';

export default {
	components: {
		CompFooter
	},
	data() {
		return {
			drawer: false,
			items: [
				{
					icon: 'mdi-apps',
					title: 'Welcome',
					to: '/'
				},
				{
					icon: 'mdi-chart-bubble',
					title: 'Inspire',
					to: '/inspire'
				}
			]
		};
	}
};
</script>

<style scoped>
.main-content {
	background: #f9f9fa;
}
</style>
