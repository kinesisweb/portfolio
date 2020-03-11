<template>
	<v-container
		fluid
		class="stripe"
		:style="{
			backgroundPosition,
			backgroundImage: `url('${backgroundImage}')` || null,
			backgroundColor: backgroundColor || null,
			backgroundSize,
			backgroundRepeat,
			color
		}"
	>
		<v-row class="pa-8">
			<v-col class="text-center">
				<slot></slot>
			</v-col>
		</v-row>
		<v-row class="stripe-spacer"> </v-row>
	</v-container>
</template>

<script>
export default {
	name: 'BannerStripe',
	props: {
		backgroundImage: {
			type: String,
			default: null
		},
		backgroundColor: {
			type: String,
			default: '#000000'
		},
		backgroundSize: {
			type: String,
			default: 'cover'
		},
		backgroundRepeat: {
			type: String,
			default: 'no-repeat'
		},
		backgroundPosition: {
			type: String,
			default: 'center'
		},
		color: {
			type: String,
			default: '#FFFFFF'
		}
	},
	data() {
		return {};
	}
};
</script>

<style scoped>
.stripe {
	-webkit-clip-path: polygon(
		0% 0%,
		100% 0%,
		100% 80%,
		65% 80%,
		50% 100%,
		35% 80%,
		0% 80%
	);
	clip-path: polygon(
		0% 0%,
		100% 0%,
		100% 80%,
		65% 80%,
		50% 100%,
		35% 80%,
		0% 80%
	);
}

@media screen and (min-width: 600px) {
	.stripe {
		-webkit-clip-path: polygon(
			0% 0%,
			100% 0%,
			100% 75%,
			55% 75%,
			50% 100%,
			45% 75%,
			0% 75%
		);
		clip-path: polygon(
			0% 0%,
			100% 0%,
			100% 75%,
			55% 75%,
			50% 100%,
			45% 75%,
			0% 75%
		);
	}
}

.stripe-spacer {
	height: 50px;
}
</style>
