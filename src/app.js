'use strict';

import http from 'http';
import Koa from 'koa';
import router from '../router';
import  compress from 'koa-compress';
import  Middles from '../middleware/'

const app = new Koa()


app
.use(Middles.errorlog())
.use(compress({
    filter: function (content_type) {
        return /text/i.test(content_type)
    },
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH
    }))
    .use(router.routes())
    .use(router.allowedMethods())

module.exports = http.createServer(app.callback());
