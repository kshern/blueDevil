'use strict';

import http from 'http';
import Koa from 'koa';
import router from '../router';


const app = new Koa()


// app.use(async (ctx, next) => {
//   ctx.body = ctx.request.body || 'no body!';
//   await next();
// });




app.use(router.routes())
   .use(router.allowedMethods());

module.exports = http.createServer(app.callback());
