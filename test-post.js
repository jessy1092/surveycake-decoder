const fetch = require('node-fetch');

const data = {
	svid: 'Qdng7',
	hash: '964b2e757d0aff10906ef0b0dbd8beb9',
	sv_iv: '5172402ab9756358',
	sv_key: '9f3930e1aa8f19cd',
};

fetch('http://104.248.153.110', {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
	},
	body: JSON.stringify(data),
})
	.then(res => res.json())
	.then(res => console.log(JSON.stringify(res)));
