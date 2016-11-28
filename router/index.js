// 'use strict';

// const fs = require('fs');
// const curPath = __dirname;

// let list = new Map()

// fs.readdirSync(curPath).forEach((item) => {
//   let filePath = `${item}`.replace('.js','');
//   let modulePath = 
//   if(filePath!='index'){
//     // console.log(filePath)
//     list.set(filePath,require(item))
//   }
// //   list.set()
    
// })


import Router from 'koa-router';
import fs from 'fs';
import path from 'path';
import events from 'events'
import fetch from 'isomorphic-fetch'
const tpath = path.join(__dirname,'../static/index.tpl')

const str = fs.readFileSync(tpath,'utf8')


const router = new Router()

let status = 'ready';
let trunk = {
    str:'启动server时渲染第一次||第一个请求直接等渲染，渲染时间内的其余请求',
    time:new Date().getTime()//时间戳，用来记录该模板渲染时间
};

router.get('/',async (ctx,next)=>{
    if(new Date().getTime()-trunk.time>10000&&status=='ready'){
            status = 'pending';
            //渲染模板 str   
            //trunk = str;模板交付给trunk
            var time = new Date().getTime()
            trunk = {
                str:time - trunk.time,
                time:time
            }
             ctx.body =trunk.str;
             status = 'ready';
    }else{
         ctx.body = new Date().getTime()-trunk.time
    }
   
    await next();
})

/*
Q1：高并发状态，同时10000个请求会导致10000次模板渲染，CPU负载过高；
Q2：在模板渲染过程中，node向后端请求数据，一个请求的延迟会导致整个页面渲染的延迟；
A：服务端HTML直出，不管是利用react还是其他模板，
都在服务端生成，现在初步想法是在内存中做了一个缓存，通过status来判断是否ready，
什么时候ready的条件可以自己定，比如正在渲染时status就是pending，
渲染好后就是ready，并交个trunk，保证同一时间内无论多少请求，服务端只渲染一个HTML，
每个请求都会从trunk中取，对于请求最多延迟一个模板渲染的时间

Q3：如何解决第一次渲染时间内的请求
A： 
*/
export default router 