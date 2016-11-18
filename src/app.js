'use strict';

import http from 'http'
import Koa from 'koa'

const app = new Koa()


app.use(async (ctx, next) => {
  ctx.body = ctx.request.body || 'no body!';
  await next();
});

module.exports = http.createServer(app.callback());
