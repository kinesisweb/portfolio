<template>
	<div class="canvas-wrap">
		<canvas id="wave-canvas"></canvas>
	</div>
</template>

<script>
export default {
	props: {
		nodes: {
			type: Number,
			default: 6
		},
		waveHeight: {
			type: Number,
			default: 60
		},
		colours: {
			type: Array,
			default: () => {
				return ['#ff8f00', '#bdc0c9', '#f9f9fa'];
			}
		}
	},
	data() {
		return {
			cvs: null,
			ctx: null,
			waves: []
		};
	},
	mounted() {
		this.init();
	},
	methods: {
		init() {
			this.cvs = document.getElementById('wave-canvas');
			this.ctx = this.cvs.getContext('2d');
			this.resizeCanvas(this.cvs);

			for (let i = 0; i < this.colours.length; i++) {
				this.waves.push(
					new this.Wave(this.colours[i], 1, this.nodes, this.cvs)
				);
			}

			this.update();
		},
		update() {
			const fill = '#333C58';
			this.ctx.fillStyle = fill;
			this.ctx.globalCompositeOperation = 'source-over';
			this.ctx.fillRect(0, 0, this.cvs.width, this.cvs.height);
			this.ctx.globalCompositeOperation = 'screen';
			for (let i = 0; i < this.waves.length; i++) {
				for (let j = 0; j < this.waves[i].nodes.length; j++) {
					this.bounce(this.waves[i].nodes[j]);
				}
				this.drawWave(this.waves[i]);
			}
			this.ctx.fillStyle = fill;

			requestAnimationFrame(this.update);
		},
		Wave(colour, lambda, nodes, cvs) {
			this.colour = colour;
			this.lambda = lambda;
			this.nodes = [];

			for (let i = 0; i <= nodes + 2; i++) {
				const temp = [
					((i - 1) * cvs.width) / nodes,
					0,
					Math.random() * 200,
					0.3
				];
				this.nodes.push(temp);
			}
		},
		bounce(nodeArr) {
			nodeArr[1] =
				(this.waveHeight / 2) * Math.sin(nodeArr[2] / 20) +
				this.cvs.height / 2;
			nodeArr[2] = nodeArr[2] + nodeArr[3];
		},
		drawWave(obj) {
			const diff = function(a, b) {
				return (b - a) / 2 + a;
			};

			this.ctx.fillStyle = obj.colour;
			this.ctx.beginPath();
			this.ctx.moveTo(0, this.cvs.height);
			this.ctx.lineTo(obj.nodes[0][0], obj.nodes[0][1]);

			for (let i = 0; i < obj.nodes.length; i++) {
				if (obj.nodes[i + 1]) {
					this.ctx.quadraticCurveTo(
						obj.nodes[i][0],
						obj.nodes[i][1],
						diff(obj.nodes[i][0], obj.nodes[i + 1][0]),
						diff(obj.nodes[i][1], obj.nodes[i + 1][1])
					);
				} else {
					this.ctx.lineTo(obj.nodes[i][0], obj.nodes[i][1]);
					this.ctx.lineTo(this.cvs.width, this.cvs.height);
				}
			}
			this.ctx.closePath();
			this.ctx.fill();
		},
		drawNodes(array) {
			this.ctx.strokeStyle = '#888';

			for (let i = 0; i < array.length; i++) {
				this.ctx.beginPath();
				this.ctx.arc(array[i][0], array[i][1], 4, 0, 2 * Math.PI);
				this.ctx.closePath();
				this.ctx.stroke();
			}
		},
		drawLine(array) {
			this.ctx.strokeStyle = '#888';

			for (let i = 0; i < array.length; i++) {
				if (array[i + 1]) {
					this.ctx.lineTo(array[i + 1][0], array[i + 1][1]);
				}
			}

			this.ctx.stroke();
		},
		resizeCanvas(canvas, width, height) {
			if (width && height) {
				canvas.width = width;
				canvas.height = height;
			} else {
				if (window.innerWidth > 1920) {
					canvas.width = window.innerWidth;
				} else {
					canvas.width = 1920;
				}

				canvas.height = this.waveHeight;
			}
		}
	}
};
</script>

<style scoped>
.canvas-wrap {
	max-width: 100%;
	overflow: hidden;
	position: absolute;
	transform: translateY(-50%);
}
</style>
