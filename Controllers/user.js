var Users = require('../Models/uschema');

exports.postuser=function(request,response){

    var user=new Users({
        name:request.body.name,
        name:request.body.name,
        email:request.body.email,
        gender:request.body.gender,
        phone_no:request.body.phone_no,
        designation:request.body.designation,
        created_at:new Date(),
        updated_at:""

    });

    user.save(function(error,res){
        if (error){
        return response.json(error);
    }
    response.json({
        sucess:true,
        body:res
    })

    });

};

exports.getuser=function(request,response){
Users.find({},function(error,res)

{
        if (error){
        return response.json(error);
    }

    response.json(res);
});
};

exports.updateuser=function(request,response){
    var name=request.params.name;
    Users.findOne({name:name},function(error,user){
        
         if(error){
            res.json(error);
        }
        var name = request.body.name;
        user.name = name;
        user.updated_at = new Date();

        user.save(function(err, res){
            if(err){
                response.json(err);
            }

            response.json(res);
        })
});
};

exports.deleteuser=function(request,response){

 var name=request.params.name;

    Users.findOne({name:name},function(error,res){
       
         if(error){
            response.json(error);
        }

       if(res){
           res.remove({name:name},function(error)
             {
               if(error){
               response.json(error);
            }
                response.json("sucessfully deleted");
           })
       }else{
           response.json("User does not exist");
       }


});
};


exports.searchuser=function(request,response){
    var name=request.params.name;
    Users.findOne({"name":new RegExp(name,"i")},function(error,res){
        if(error){
            response.json(error);
                }
                response.json(res);
    })

}
