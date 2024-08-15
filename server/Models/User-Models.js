const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
 email:{
      type:String,
      require:true,
    }, 
 Phone:{
      type:String,
      require:true,
    }, 
 Password:{
      type:String,
      require:true,
    }, 

    isAdmin:{
        type:Boolean,
        default:false
    }
})

//METHOD TO SECURE PASSWORD 
userSchema.pre("save", async function(){
console.log("pre method", this)
})

//Define the Collection ot model name

const User=new mongoose.model("User",userSchema)

module.exports=User;