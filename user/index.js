/** @format */

const router = require("express").Router();
const request = require("request");

router.get("/user", (req, res) => {
	const options = {
		uri: "https://public-api.solscan.io/account/tokens?account=",
		qs: { account: req.query.wallet_address },
	};

	// const address = "2znw8JBTW1w2HBNiRwsTpbunjZVZ3uiGdHUt9M72i2oN";
	request(options, function (err, response, body) {
		for (i = 0; i < result.length; i++) {
			if (result[i].tokenAddress === req.query.token) {
				return res.status(200).send([{ isMember: true }]);
			}
		}
		return res.status(200).send([{ isMember: false }]);
	});
});

module.exports = router;
