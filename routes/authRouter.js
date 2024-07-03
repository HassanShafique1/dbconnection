const routes =require ("express").Router();
const {login,logout,update} =require("../Controller/authController")

routes.post("/login",login);


routes.get("/logout",logout);
routes.put("/update",update);



module.exports=routes; 