<template>
	<section id="about">
		<v-container>
			<v-row>
				<v-col>
					<v-card light flat color="transparent">
						<v-card-title
							class="justify-center font-weight-thin display-2 my-8"
							>ABOUT</v-card-title
						>
						<v-card-text>
							<v-row>
								<v-col>
									<nuxt-appear
										name="slide-from-bottom"
										:delay="600"
									>
										<hex-icon>
											mdi-school
											<template v-slot:title
												>Fast Learner</template
											>
											<template v-slot:description>
												Quick to pick up new languages,
												frameworks and skills
											</template>
										</hex-icon>
									</nuxt-appear>
								</v-col>
								<v-col>
									<nuxt-appear
										name="slide-from-bottom"
										:delay="400"
									>
										<hex-icon>
											mdi-handshake
											<template v-slot:title
												>Professional</template
											>
											<template v-slot:description>
												Respectful, punctual and
												well-presented at all times
											</template>
										</hex-icon>
									</nuxt-appear>
								</v-col>
								<v-col>
									<nuxt-appear
										name="slide-from-bottom"
										:delay="200"
									>
										<hex-icon>
											mdi-account-switch
											<template v-slot:title
												>Good Communicator</template
											>
											<template v-slot:description
												>Clear, effective communication
												with clients and
												colleagues</template
											>
										</hex-icon>
									</nuxt-appear>
								</v-col>
								<v-col>
									<nuxt-appear name="slide-from-bottom">
										<hex-icon>
											mdi-square-root
											<template v-slot:title
												>Problem Solver</template
											>
											<template v-slot:description
												>Able to independently and
												collectively work towards a
												solution</template
											>
										</hex-icon>
									</nuxt-appear>
								</v-col>
							</v-row>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
			<v-row class="justify-space-between">
				<v-col
					cols="12"
					md="6"
					style="max-width: 300px"
					class="profile-photo mb-8"
				>
					<v-card flat>
						<v-img
							:src="require('@/assets/me.jpg')"
							class="white--text align-end"
							gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
							height="250px"
						>
						</v-img>

						<v-card-actions>
							Craig Riley<br />
							Junior Developer
						</v-card-actions>
					</v-card>
					<v-subheader light class="mt-8 px-0">
						I'm a Junior Developer with an endless passion for
						learning new languages and frameworks. Right now, C#
						.NET is taking up most of my free time.
					</v-subheader>
				</v-col>
				<v-col cols="12" md="6">
					<nuxt-appear name="slide-from-right" :delay="800">
						<skills-bar :value="92" label="Javascript" />
					</nuxt-appear>
					<nuxt-appear name="slide-from-right" :delay="700">
						<skills-bar :value="90" label="(S)CSS" />
					</nuxt-appear>
					<nuxt-appear name="slide-from-right" :delay="600">
						<skills-bar :value="85" label="HTML" />
					</nuxt-appear>
					<nuxt-appear name="slide-from-right" :delay="500">
						<skills-bar :value="85" label="Node JS" />
					</nuxt-appear>
					<nuxt-appear name="slide-from-right" :delay="400">
						<skills-bar :value="80" label="Vue / Nuxt" />
					</nuxt-appear>
					<nuxt-appear name="slide-from-right" :delay="300">
						<skills-bar :value="75" label="Vuetify" />
					</nuxt-appear>
					<nuxt-appear name="slide-from-right" :delay="200">
						<skills-bar :value="70" label="MySQL" />
					</nuxt-appear>
					<nuxt-appear name="slide-from-right" :delay="100">
						<skills-bar :value="50" label="Wordpress / PHP" />
					</nuxt-appear>
					<nuxt-appear name="slide-from-right" :delay="0">
						<skills-bar :value="40" label="C# .NET" />
					</nuxt-appear>
				</v-col>
			</v-row>
		</v-container>
	</section>
</template>

<script>
import HexIcon from '@/components/hex';

export default {
	components: {
		HexIcon
	},
	data() {
		return {
			knowledge: {
				js: 90
			}
		};
	}
};
</script>

<style scoped>
@media only screen and (max-width: 1023px) {
	.profile-photo {
		margin: 0 auto;
	}
}
</style>
