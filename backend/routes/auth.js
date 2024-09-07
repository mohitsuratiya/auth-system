const express = require('express');
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');



router.get("/", [
    body('name', 'enter the valid name').isLength({min: 3}),
    body('email', 'enter the valid email').isEmail(),
    body('password', 'password must be atleast 5 characters').isLength({min: 5}),
], (req, res)=>{
    // const errors = validationResult(req);
    // if(!errors.isEmpty()){
    //     return res.status(400).json({errors: errors.array});
    // }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  User.create({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
  }).then(User =>  res.json(User))


})

module.exports = router