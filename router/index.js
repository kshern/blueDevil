
import Router from 'koa-router';

const router = new Router()

router.get('/',async (ctx,next)=>{
    ctx.body = ctx.request.body || 'no body!';
    await next();
})

export default router