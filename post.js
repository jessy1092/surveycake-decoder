const fetch = require('node-fetch');
const FormData = require('form-data');

const formdata = new FormData();

formdata.append('name', 'Test');
formdata.append('comment', 'asddddddas');

// fetch(
// 	'https://script.google.com/macros/s/AKfycbzw3DIImDClQnrjFmskKxT7lbxND-9lDP-HN3B1EVt0VmnTGKY/exec',
// 	{
// 		method: 'POST',
// 		body: formdata,
// 	},
// ).then(res => console.log(res));
fetch(
	'https://script.google.com/macros/s/AKfycbzw3DIImDClQnrjFmskKxT7lbxND-9lDP-HN3B1EVt0VmnTGKY/exec',
	{
		method: 'POST',
		body: 'TEST',
	},
).then(res => console.log(res));
