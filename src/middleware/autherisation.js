

req.user = decoded.user;

const autherisation = function(permittedrole){

    return (req,res,next)=>{
        const user = req.user
        let ispermitted = false

        permittedrole.map((role)=>{
            if(user.role.includes(role) ){
                ispermitted = true;
                
return next()
            }

            else{
                return res.status(401).send("You are not autherized")
            }
        })
    }
    
}
module.exports = autherisation;