const express = require('express');
const Router = express.Router();
const homeSchema = require('../models/homeSchema')

Router.get('/',(err,res)=>{
    res.render('register',{title : 'Fill form',password:'',email:''})
})
//home router k through code execute ho rh
Router.post('/register',async(req,res)=>{
    try{
        const{ 
            name ,
            number,
            email,
            psw,
            cpsw
        }= req.body;

        if(password === cpsw){
          const userData = new homeSchema({
            name ,
            number,
            email,
            psw
          })
        userData.save(err=>{
            if(err){
                res.render('register',{title : 'Sorry',password:'',email:''})
            }
            else{
                res.render('register',{title : 'Done',password:'',email:''})
            }
        })
        const useremail = await homeSchema.findOne({email:email});
        if(email=== useremail.email){
            res.render('register',{title : '',password:'',email:'email is already there'})
        }else{
            console.log('errm')
        }
        }else{
            // res.render('register',{title :'' ,password:'password not matching',email:''})
            App.post(App.send("password not matching"))
        }

    }catch(error){
        res.render('register',{title : 'Error in code',password:'',email:''})
    }
})

//signin

Router.post('/login',(req,res)=>{
const {
   email,
   password
} = req.body;
    
homeSchema.findOne({email:email},(err,result)=>{
   
    if(email=== result.email && password === result.pass){
    res.render('dashboard',{name : result.name})
    }else{
        console.log(err)
    }
})
})

module.exports = Router;