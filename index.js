const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const { processSurvey } = require('./lib/decode');

const app = new Koa();
app.use(bodyParser());

app.use(async ctx => {
	const { status, body } = await processSurvey(ctx.request.body);

	if (status !== 200) {
		ctx.throw(status, 'API Error', body);
		return;
	}

	ctx.body = body;
});

app.listen(80);
