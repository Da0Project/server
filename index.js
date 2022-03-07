/** @format */

var app = require("./app");

function App(req, res) {
	if (!req.url) {
		req.url = "/";
		req.path = "/";
	}
	return app(req, res);
}

var server = App;

module.exports = {
	server,
};
