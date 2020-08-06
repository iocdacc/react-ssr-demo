const Koa = require('Koa')
const cors = require('koa2-cors')

const app = new Koa();

app.use(cors())

app.use(async (ctx, next) => { 
  ctx.cookies.set(
    'cid', 
    '111111111111',
  )
  ctx.body = 123
});

app.listen(3001);