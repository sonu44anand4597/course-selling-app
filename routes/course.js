const {Router} = require("express");
const courseRouter = Router();
 

courseRouter.post('/purchase', function(req,res) {

    // you would expect the user to pay in the future

    res.json({
        message: ""
    })
})



courseRouter.get("/preview", function(req,res) {
    res.json({
        message: ""
    })
})