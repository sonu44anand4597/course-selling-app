
const {Router} = require("express");

const userRouter = Router();

const {userModel, purchaseModel} = require("../db");
const jwt = require("jsonwebtoken")
const {JWT_USER_PASSWORD} = require("../config")


userRouter.post('/user/signup', async function(req, res) {
    const {email, password, firstName, lastName} = req.body

      //  hash the password 
     

      // put inside a try  catch block
      await userModel.create({
        email: email,
        password,
        firstName:firstName,
        lastName:lastName
      })


    res.json({
        message: 'signup successful'
    })

})

userRouter.post('/user/signin', async function(res, res) {

    const {email, password} = req.body

    const user = await userModel.findOne({
        email: email,
        password: password
    })

    if (user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD);

        // do cookie based logic

        res.json({
            token: token
        })
    } else {
        res.statusCode(403).json({
            message: "INcorrect credintials"
        })
    }

    res.json ({
        message: 'signin endpoints'
    })
})



userRouter.get('/purchases' , async function(req,res) {

    const userId = req.userId;

    const courseData = await courseModel.find({
        _id: {$in: purchaseModel.find({userId}).map(purchase => purchase.courseId)}
    })

     const purchase =  await purchaseModel.create({
        userId,
        
    })




    res.json ({

        purchases
    })
})

module.exports = {
    userRouter: userRouter
}