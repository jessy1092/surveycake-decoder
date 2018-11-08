const crypto = require('crypto');
const fetch = require('node-fetch');

const processSurvey = async ({ svid, hash, sv_iv, sv_key }) => {
	const response = await fetch(`https://www.surveycake.com/webhook/v0/${svid}/${hash}`);

	const data = await response.text();

	if (response.status !== 200) {
		return { status: response.status, body: data };
	}

	const decipher = crypto.createDecipheriv('AES-128-CBC', sv_key, sv_iv);

	let tmpData = decipher.update(data, 'base64', 'utf8');
	tmpData += decipher.final('utf8');

	return { status: 200, body: tmpData };
};

module.exports = { processSurvey };
