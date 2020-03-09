<template>
	<v-app>
		<v-content>
			<nuxt />
		</v-content>
	</v-app>
</template>

<script>
export default {
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
