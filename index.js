/////1 import json-server

const jsonServer =require('json-server')

////2)create an instance

const server=jsonServer.create()


///3) middleware
const middleware =jsonServer.defaults()


///4)create router

const router=jsonServer.router('db.json')



////
server.use(middleware)
server.use(router)

////define port

const PORT= 3000 ||process.env.PORT


///7)
server.listen(PORT,()=>{
    console.log(`json-server running in the port ${PORT}`);
    
})