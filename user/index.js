/** @format */

const router = require("express").Router();
const request = require("request");

router.get("/user", (req, res) => {
	const options = {
		uri: "http://public-api.solscan.io/account/",
		qs: {
			wallet: "99djPBRRFpXCorTCJYLfExe6qupCBkp11aUgajrd5nDg",
		},
	};
	request(options, function (err, response, body) {
		// response = result;
		return res.status(200).send([{ response: response }]);
	});
});

module.exports = router;
