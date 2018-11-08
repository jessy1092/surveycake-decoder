const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const { processSurvey } = require('./lib/decode');

const startServer = async () => {
	const app = new Koa();
	app.use(bodyParser());

	app.use(ctx => {
		const { status, body } = processSurvey(ctx.request.body);

		if (status !== 200) {
			ctx.throw(status, 'API Error', body);
			return;
		}

		ctx.respond.body = body;
	});

	app.listen(80);
};

startServer();
