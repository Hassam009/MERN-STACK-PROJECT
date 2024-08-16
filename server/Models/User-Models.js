const mongoose=require("mongoose");
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
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
userSchema.pre("save", async function(next){
console.log("pre method", this)

const user=this;
if(!user.isModified("Password")){
  next();
}

try{
  const saltRound=await bcrypt.genSalt(10);
  const hash_password= await bcrypt.hash(password, saltRound);
  user.password=hash_password;
}catch(error){
  next(error);
}

})

userSchema.methods.generateToken=async function(){
  try{

  }catch(error)
  {
    console.log(error)
  }
}
//JSON WEB TOKENS
userSchema.methods.generateTokens= async function(){
try{
return jwt.sign({
  userId:this._id.toString(),
  email:this.email,
  isAdmin:this.isAdmin,
},
process.env.JWT_SECRET_KEY,
);
}catch(error){
  console.log(error)
}
};

//Define the Collection ot model name

const User=new mongoose.model("User",userSchema)

module.exports=User;