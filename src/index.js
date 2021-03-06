const fastify = require('fastify')({logger: true});
const routes = require('../routes/index')
//db 
const mongoose =require('mongoose');

//db connection
mongoose.connect('mongodb://localhost/lcofasti')
.then(()=>{
    console.log("DB is connected");
}).catch(err=>{
    console.log(err);
})



//routes
fastify.get('/',async(request,reply)=>{
    return {hello:"world"};
})

routes.forEach((route,index)=>{
    fastify.route(route)
})

//starting the server
const start = async ()=>{
    try {
        await fastify.listen(3000);
        fastify.log.info(`Server is running at ${address}`);
    } catch (error) {
        fastify.log.error(error)
    }
}

start();