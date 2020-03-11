<template>
	<div class="mb-10">
		<comp-hero />
		<comp-waves />
		<comp-about />
		<comp-projects />
		<nuxt-appear name="slide-from-bottom">
			<banner-stripe background-color="#333c58">
				<h1>Get in Touch</h1>
			</banner-stripe>
		</nuxt-appear>
		<comp-contact />
	</div>
</template>

<script>
import CompWaves from '@/components/index/waves';
import CompHero from '@/components/index/hero';
import CompAbout from '@/components/index/about';
import CompContact from '@/components/index/contact';
import CompProjects from '@/components/index/projects';
import BannerStripe from '@/components/banner-stripe';

export default {
	components: {
		CompHero,
		CompWaves,
		CompAbout,
		BannerStripe,
		CompContact,
		CompProjects
	}
};
</script>
