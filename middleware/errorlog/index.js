

module.exports = function(){
    return async function(ctx,next){
        try{
            await next()
        }catch(e){
            console.log(e)
        }
    }
}
