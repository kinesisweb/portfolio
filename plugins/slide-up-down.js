import Vue from 'vue';
import SlideUpDown from 'vue-slide-up-down';

const ignoreWarnMessage =
	'The .native modifier for v-on is only valid on components but it was used on <div>.';
Vue.config.warnHandler = function(msg, vm, trace) {
	// `trace` is the component hierarchy trace
	if (msg === ignoreWarnMessage) {
		msg = null;
		vm = null;
		trace = null;
	}
};

Vue.component('slide-up-down', SlideUpDown);
