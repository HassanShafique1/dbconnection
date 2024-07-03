
const routes =require ("express").Router();

routes.get("/getuser",(req,res)=>{
   return res.send({
    message:"my first api",
    data: 10,
    value: 5,
   });
});

module.exports= routes;