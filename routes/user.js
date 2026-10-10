

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



app.get('/user/purchases' , function(req,res) {


    res.json ({

        message: ""
    })
})