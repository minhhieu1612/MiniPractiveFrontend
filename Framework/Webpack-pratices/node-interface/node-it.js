const webpack = require("webpack");
const config = require('./webpack.config')();

// console.log(config);

const compiler = webpack({}, (err, stats) => {
	console.log(`error: ${err}`);
	console.log(stats.toJson());
})

const watcher = compiler.watch({}, (err, stats) => console.log(stats));

// watcher.invalidate();

