export default {
	git: `
git init .
git config --global user.name "Craig Riley"
git config --global user.email "hello@craigriley.uk"
git add .
git remote add origin https://github.com/kinesisweb/example.git
git commit -m "Initial Commit"
git push -u origin master
git checkout -b newfeature
git add newfeature/*
git commit -m "New Feature"
git push origin newfeature
git checkout master
git pull
git merge newfeature
git branch -d newfeature
	`,
	php: `
function calculateScore($arr) {
	if (count($arr) == 0) {return 50;}
	$pending = 0;
	$score = 0;
	$weightCount = 0;
	$weight1 = 3; $weight2 = 2; $weight3 = 1;

	for ($i = 0; $i < count($arr); $i++) {
		if ($arr[$i] == 18) {
			if ($i == 0) {$score += 100 * $weight1; $weightCount += $weight1;}
			else if ($i < 5) {$score += 100 * $weight2; $weightCount += $weight2;}
			else {$score += 100 * $weight3; $weightCount += $weight3;}
		}
		else if ($arr[$i] == 19) {
			if ($i == 0) {$score += 0 * $weight1; $weightCount += $weight1;}
			else if ($i < 5) {$score += 0 * $weight2; $weightCount += $weight2;}
			else {$score += 0 * $weight3; $weightCount += $weight3;}
		}
		else if ($arr[$i] == 20) {
			if ($i == 0) {$score += 50 * $weight1; $weightCount += $weight1;}
			else if ($i < 5) {$score += 50 * $weight2; $weightCount += $weight2;}
			else {$score += 50 * $weight3; $weightCount += $weight3;}
		}
	}

	$weighted = $score / $weightCount;
	$weighted = is_nan($weighted) ? 101 : $weighted;
	return $weighted;
}`,
	css: `
.underlink {
	position: relative;
	cursor: pointer;

	&::after {
		border-bottom: 1px solid var(--underlink-color);
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 100%;
		transform: scale(0);
		transform-origin: bottom;
		transition: transform var(--underlink-duration) ease-in-out;
		will-change: transform;
		content: "";
	}

	&:hover::after {
		transform: scale(1);
	}
}`,
	node: `
function updateCache(req, res, cb) { // abridged
	let search_hits = 0;
	nightmare
		.useragent(settings.userAgent)
		.goto(settings.searchUrl)
		.wait("input.button.primary")
		.click("input.button.primary")
		.wait("#searchresults")
		.evaluate(function() {
			var hits = initial_hits.length;

			if (hits == 10 && multiple === false) return 10;
			else if (hits == 10 && multiple === true) return 11;
			else return hits;
		})
		.then(function(result) {
			Promise.all(promises)
				.then(function() {
					writeCache(req, res, cb);
				})
				.catch(function(e) {
					returnFeed(req, res);
				});
			return nightmare.end();
		})
}
`,
	nuxt: `
const express = require("express");
const { Nuxt, Builder } = require("nuxt");

const config = require("../nuxt.config.js");
config.dev = process.env.NODE_ENV !== "production";

async function start() {
	const nuxt = new Nuxt(config);

	// Build only in dev mode
	const builder = new Builder(nuxt);
	await builder.build();

	await nuxt.ready();

	// Give nuxt middleware to express
	baybeach.use(nuxt.render);
}
start();

module.exports = baybeach;`,
	vue: `
export default { // abridged
	props: ['email'],
	mounted() {
		this.getPublicKey()
		.then(() => this.getSetupIntent())
		.then(() => this.stripeElements())
		.then(() => {
			// Do stuff
		})
	},
	methods: {
		getPublicKey() {
			return fetch('/api/user/payment/public-key', {
				method: 'get',
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then(response => response.json())
				.then(response => {
					this.publicKey = response.body.publicStripeKey;
				})		
		}
	}
`,
	js: `
const generalMove = () => {
	let potentials = new Set();
	this.win.forEach(x => {
		x.forEach(y => {
			if (this.player.includes(y)) return true;
		});

		this.ai.forEach(y => {
			if (x.includes(y)) {
				x.filter(f => !this.ai.includes(f) && !this.player.includes(f)).forEach(h => potentials.add(h));
			}
		});
	});
	moves = [...potentials];
};

if (this.ai.length === 0) initialMove();
else {
	checkWin("ai");
	if (!selection) checkWin("player");
	if (!selection) generalMove();
}

let error = 0;
while (
	error < 20 &&
	(!selection || this.player.includes(selection) || this.ai.includes(selection))) {
		selection = moves[Math.floor(Math.random() * moves.length)];
		error++;
}
`
};
