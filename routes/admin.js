

const {Router} = require("express");

const adminRouter = Router();

const {adminModel} = require("../db");


adminRouter.post("/signup", function(req, res) {
    res.json ({
        message: "signup end points"
    })
})

adminRouter.post("/signin", function(req, res) {
    res.json ({
        message: "signin end points"
    })
})

adminRouter.post("/", function(req, res) {
    res.json ({
        message: "signup end points"
    })
})

adminRouter.put("/bulk", function(req,res) {
    res.json({
        message: "signup endpoints"
    })
})

module.exports = {
    adminRouter: adminRouter
}