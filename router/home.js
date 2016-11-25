
import Router from 'koa-router';


import fs from 'fs';

import path from 'path'
// import ejs from 'ejs';

const tpath = path.join(__dirname,'../views/index.tpl')
const str = `${fs.readFileSync(tpath,'utf8')}`


const router = new Router()

let count = 1

router.get('/',async (ctx,next)=>{
    ctx.body = str;
    console.log(count++);
    await next();
})

export default router