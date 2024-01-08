const express=require("express");
const {hashSync}=require("bcrypt")
const db=require("./db/dbConnect")
const User=require('./db/User')
const session =require("express-session");
const MongoStore=require("connect-mongo")
const passport=require("passport")
const app=express();
const PORT=9000;
const cors=require("cors")
app.use(cors())
//app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/Crypt', collectionName: "sessions" }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))
app.use(express.json())
require("./db/passport");
app.post("/register",async function(req,res){
    
    try{
        const yuzi= await User.create({
            username: req.body.username,
            password: hashSync(req.body.password,10)
        })
console.log(yuzi)
        res.status(200).json({
            status: "OK",
            message: "User created"
        });

    }catch(err){
        console.log(err)

    }
})
app.post('/login',
passport.authenticate('local'),
function(req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.status(200).json({
    status: "OK",
    message: "User created"
});
}
);











app.listen(PORT,()=>{
    console.log("Connected at ",PORT);
}) 
