

const express = require ('express')

const app = express();


app.post('/user/signup', function(req, res) {
    res.json({
        message: 'signup successful'
    })

})

app.post('/user/signin', function(res, res) {

    res.json ({
        message: 'signin endpoints'
    })
})

app.post('/course/purchase', function(req,res) {

    // you would expect the user to pay in the future

    res.json({
        message: ""
    })
})

app.get('/user/purchases' , function(req,res) {


    res.json ({

        message: ""
    })
})


app.get("/courses", function(req,res) {
    res.json({
        message: ""
    })
})

app.listen(3000);