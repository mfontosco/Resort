import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import morgan from "morgan";
import connectDB from './config/db.js'
import User from "./Model/userSchema.js";
import cors from 'cors'


const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors())

app.get("/", (req, res) => {
  res.send("welcome to backend");
});

app.post("/signup", async (req, res) => {
  const { fName, email, password } = req.body;
  const userExist = User.find({ email: email });
  if (userExist.length > 0) {
    throw Error("User exists");
    return
  }
  try {
    const user = await User.create({
      fName,
      email,
      password,
    });
    res.json({
      status: "success",
      user: { _id: user._id, email: email },
    });
  } catch (err) {
    console.log(err);
    res.json({
      status: "failed",
      error: err.message,
    });
  }
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw Error("User doesn't exist,please register");
    }
    if (user && await user.ispasswordMatched(password)) {
      res.status.json({
        status: "success",
        user: {
          _id: user._id,
          email: user.email,
        },
      });
    }else{
      throw Error("Password mismatched")
    }
  } catch (err) {
    console.log(err);
  }
});
const start = async(Port)=>{
    try{
        const conn = await connectDB()
        app.listen(Port, (err) => {
            if (err) throw err;
            console.log(`server is listening to port ${Port}`);
          });
          console.log(`Database is connected to ${conn.connection.host}`)
    }catch(err){
console.log(err)
    }
}
const Port = 5000

start(Port)