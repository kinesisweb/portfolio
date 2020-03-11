import Vue from 'vue';
import nuxtAppear from '@/components/nuxt-appear';
import skillsBar from '@/components/skills-bar';

const components = {
	nuxtAppear,
	skillsBar
};

Object.entries(components).forEach(([name, component]) => {
	Vue.component(name, component);
});
