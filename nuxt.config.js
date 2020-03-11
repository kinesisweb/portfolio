import colors from 'vuetify/es5/util/colors';

export default {
	mode: 'universal',
	head: {
		title: 'Craig Riley: Developer',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || ''
			}
		],
		link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
	},
	loading: { color: '#fff' },
	css: ['@/scss/transitions.scss'],
	plugins: ['@/plugins/global-components', '@/plugins/slide-up-down'],
	buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],
	modules: ['@nuxtjs/axios'],
	axios: {
		proxy: true
	},
	proxy: {
		'/api': {
			target:
				process.env.NODE_ENV === 'development'
					? 'http://localhost:8080'
					: 'https://craigriley.uk'
		}
	},
	vuetify: {
		customVariables: ['~/assets/variables.scss'],
		theme: {
			dark: true,
			themes: {
				dark: {
					primary: colors.blue.darken2,
					accent: colors.grey.darken3,
					secondary: colors.amber.darken3,
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green
				}
			}
		}
	},
	build: {
		extend(config, ctx) {}
	}
};
