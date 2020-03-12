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
				content:
					'Portfolio website for junior web/software developer Craig Riley, based in the UK. Programmer of Javascript, NodeJS, CSS, SCSS, Vue, Nuxt, Vuetify and Wordpress / PHP. Currently learning C#.'
			}
		],
		link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
	},
	loading: { color: '#fff' },
	css: [],
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
	router: {
		extendRoutes(routes, resolve) {
			routes.push({
				name: '404',
				path: '*',
				component: resolve(__dirname, 'layouts/error.vue'),
				params: { status: 404 }
			});
		}
	},
	generate: {
		routes: ['404']
	},
	vuetify: {
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
