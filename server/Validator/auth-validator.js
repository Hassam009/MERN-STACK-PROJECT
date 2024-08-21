const {z}=require("zod");

const signupSchema=z.object({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be at least 3 chars"})
    .max(255,{message:"Name must not be more than 355 characters"}),
    email:z
    .string({required_error:"email is required"})
    .trim()
    .min(3,{message:" email must be at least 3 chars"})
    .max(255,{message:"email must not be more than 355 characters"}),
    phone:z
    .string({required_error:"phone is required"})
    .trim()
    .min(3,{message:"phone must be at least 3 chars"})
    .max(255,{message:"phone must not be more than 355 characters"}),
    password:z
    .string({required_error:"password is required"})
    .trim()
    .min(3,{message:"password must be at least 3 chars"})
    .max(255,{message:"password must not be more than 355 characters"}),

})

module.exports =signupSchema;