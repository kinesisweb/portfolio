<template>
	<div class="skills-bar-label mb-2" :data-label="label">
		<v-progress-linear :value="value" height="30" color="#333c58">
			<strong>{{ Math.ceil(value) }}%</strong>
		</v-progress-linear>
	</div>
</template>

<script>
export default {
	name: 'SkillsBar',
	props: {
		value: {
			type: Number,
			default: 0
		},
		label: {
			type: String,
			default: ''
		}
	}
};
</script>

<style lang="scss">
.skills-bar-label {
	position: relative;

	&::after {
		position: absolute;
		top: 0;
		left: 0;
		width: 150px;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		content: attr(data-label);
		background: rgba(255, 143, 0, 0.8);
	}
}
</style>
