<template>
	<v-container class="my-8">
		<v-row class="mb-8">
			<v-col cols="12" md="6" class="mx-auto text-right">
				<v-form
					ref="submit-form"
					v-model="isValid"
					light
					@submit.prevent="send"
				>
					<v-text-field
						v-model="name"
						class="mb-4"
						outlined
						light
						label="Your name"
						:rules="[val.required]"
					></v-text-field>
					<v-text-field
						v-model="email"
						class="mb-4"
						outlined
						light
						label="Email address"
						:rules="[val.required, val.email]"
						validate-on-blur
					></v-text-field>
					<v-textarea
						v-model="message"
						light
						outlined
						label="Message"
						:rules="[val.required]"
					></v-textarea>
					<slide-up-down :active="alert.show">
						<v-alert
							:prominent="alert.type === 'error'"
							:dense="alert.type === 'success'"
							:type="alert.type"
						>
							<v-row v-if="alert.type === 'error'" align="center">
								<v-col class="grow">{{ alert.content }}</v-col>
								<v-col class="shrink">
									<v-btn @click="alert.show = false"
										>Close</v-btn
									>
								</v-col>
							</v-row>
							<template v-else>
								{{ alert.content }}
							</template>
						</v-alert>
					</slide-up-down>
					<v-btn
						type="submit"
						:loading="loading"
						:disabled="loading"
						color="secondary"
						light
					>
						Send Message
					</v-btn>
				</v-form>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			alert: {
				show: false,
				type: null,
				content: 'Message sent. Thank you.'
			},
			name: 'Craig Riley',
			email: 'hello@craigriley.uk',
			message: 'This is a test.',
			loading: false,
			isValid: false,
			val: {
				required: (v) => !!v || 'Required',
				email: (v) => {
					return /\w+@\w+\.\w+/.test(v) || 'Invalid email';
				}
			}
		};
	},
	methods: {
		send() {
			this.$refs['submit-form'].validate();
			if (this.isValid === false) return false;
			this.loading = true;

			const data = {
				name: this.name,
				email: this.email,
				message: this.message
			};

			this.$axios
				.post('/api/contact', data)
				.then((res) => {
					this.loading = false;
					console.log(res.status);
					if (res.status === 200) {
						this.$refs['submit-form'].reset();
						this.alert.type = 'success';
						this.alert.content = 'Message sent. Thank you.';
						this.alert.show = true;
						setTimeout(() => {
							this.alert.show = false;
						}, 4000);
					} else return new Error('Not sent');
				})
				.catch((err) => {
					console.log(err);
					this.loading = false;
					this.alert.type = 'error';
					this.alert.content =
						"Couldn't send message. Please try again later.";
					this.alert.show = true;
				});
		}
	}
};
</script>
