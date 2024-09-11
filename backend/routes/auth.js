const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')


const JWT_SECRET = 'mohitisagoodB$oy';

// route 1: user using a post api/auth/createuser

router.post("/createuser", [
    body('name', 'enter the valid name').isLength({min: 3}),
    body('email', 'enter the valid email').isEmail(),
    body('password', 'password must be atleast 5 characters').isLength({min: 5}),
], async (req, res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{

    let user = await User.findOne({email: req.body.email});
    if(user){
      return res.status(400).json({error: "sorry a user with this email already exists"})
    }
const salt = await bcrypt.genSalt(10);
 const secPass = await bcrypt.hash(req.body.password, salt);
    //create a user
 user = await User.create({
    name: req.body.name,
    password: secPass,
    email: req.body.email,
  })

  const data = {
    user:{
      id: user.id
    }
  };
   
 const authtoken =   jwt.sign(data, JWT_SECRET);
    res.json({authtoken});


}catch(error){
  console.log(error.message);
  res.status(500).send("internal server error")
}


})

//route 2: user login

router.post("/login", [
  body('email', 'enter the valid email').isEmail(),
  body('password', 'password cannot be blank').exists(),
], async (req, res)=>{

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

const {email, password} = req.body
try {
  let user = await User.findOne({email});
  if (!user) {
    return res.status(400).json({errors: "please try to login with correct credentials"})
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    return res.status(400).json({errors: "please try to login with correct credentials"})
  }

  const data = {
    user:{
      id: user.id
    }
  }
   
 const authtoken =   jwt.sign(data, JWT_SECRET)
    res.json({authtoken})

} catch(error){
  console.error(error.message);
  res.status(500).send(" internal server error")
}


})



//route 3: get login user detalis api/auth/getuser

router.post('/getuser', fetchuser, async (req, res) =>{
  try {
   userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
  }
   catch(error){
    console.error(error.message);
  res.status(500).send(" internal server error")
  }


} )

module.exports = router