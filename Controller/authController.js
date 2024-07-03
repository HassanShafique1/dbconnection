const joi =require("joi");
const loginSchema = joi.object().keys({
    username: joi.string().min(6),
    password: joi.string().min(2),
})

const updateSchema = joi.object().keys({
    usernamee : joi.string ().min(4),
    oldpassword: joi.string().min(4),
    newpassword: joi. string().min(6),

})
module.exports={
    login:async(req,res)=>{
        try{
        const validate = await loginSchema.validateAsync(req.body);
       return res.send({
        
        message:"login api",
        data:validate,
       });
    }catch(error){
        return res.send({
            message:"error",
            error:error.message,
        });

    }
    },

    logout:(req,res)=>{
        return res.send({
            message:"logout apiii",
            
        });
     },
     
     update:async(req,res)=>{
        try{
        const validate = await updateSchema.validateAsync(req.body);
       return res.send({
        
        message:"update api",
        data:validate,
       });
    }catch(error){
        return res.send({
            message:"error",
            error:error.message,
        });

    }
    },
     
};