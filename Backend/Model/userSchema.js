import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    fName:{type:String,required:[true,"full name is required"]},
    email:{type:String,unique:true,required:[true,"email is required"]},
    password:{type:String,required:[true,"password is required"]}
})



userSchema.methods.ispasswordMatched = async function(passwordTobeVerified){
    return await bcrypt.compare(passwordTobeVerified,this.password)
}


userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }
    const salt =  await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(this.password,salt)
    console.log(hashed)
    this.password = hashed
})




const User =mongoose.model("User",userSchema)
export default User