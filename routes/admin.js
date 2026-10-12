

const {Router} = require("express");

const adminRouter = Router();

const {adminModel, courseModel} = require("../db");

const {JWT_ADMIN_PASSWORD} = require("../config");

const {adminMiddleware} = require("../middleware/admin")


// brcrypt is used to hash the password, zod is used to validate the data, jwt is used to generate the token


adminRouter.post("/signup", async function(req, res) {
    const {email, password, firstName, lastName} = req.body

      //  hash the password 
     

      // put inside a try  catch block
      await adminModel.create({
        email: email,
        password,
        firstName:firstName,
        lastName:lastName
      })


    res.json({
        message: 'signup successful'
    })
})

adminRouter.post("/signin", async function(req, res) {
   const {email, password} = req.body

    const user = await adminModel.findOne({
        email: email,
        password: password
    })

    if (user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_ADMIN_PASSWORD);

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

adminRouter.post("/course", adminMiddleware, async function(req, res) {

    const adminId = req.userId;

    const {title, description, imageUrl, price} = req.body;

    // creating a web3 sas in 6 hours

    const course = await courseModel.create({
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
        creatorId: adminId
    })
    res.json ({
        message: "course created successfully"
    })
})



adminRouter.put("/course", adminMiddleware, async function(req, res) {

    const adminId = req.userId;

    const {title, description, imageUrl, price, courseId} = req.body;

    // creating a web3 sas in 6 hours

    const course = await courseModel.updateOne({
        id: courseId, // flying beast id
        creatorId: adminId // creator id
    },{
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
        creatorId: adminId
    })
    res.json ({
        message: "course created successfully"
    })
})

adminRouter.put("/course/bulk", adminMiddleware, async function(req,res) {

    const adminId = req.userId;
   
    const course = await courseModel.find({
        creatorId: adminId
    })

    res.json({
        message: "course updated",
        courseId: course._id
    })
})

module.exports = {
    adminRouter: adminRouter
}