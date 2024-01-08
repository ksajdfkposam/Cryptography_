const { compareSync } = require('bcrypt');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('./User')
//const db=require("./dbConnect")

passport.use(new LocalStrategy(
  async  function (username, password, done) {
try{
    const user= await UserModel.findOne({username: username});
console.log(user);
if (!user) {  //When username is invalid
    return done(null, false, { message: 'Incorrect username.' });
    }

    if (!compareSync(password, user.password)) { //When password is invalid 
        return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, user);

}
catch(err){
    console.log(err)
};




         
    }
));

//Persists user data inside session
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

//Fetches session details using session id
passport.deserializeUser(async function (id, done) {
   try{
   const k= await UserModel.findById(id)
  // console.log(k)
  done(null,k)
   }
   catch(err){
    console.log(err)
   }
  
}); 