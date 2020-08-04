const router = require("express").Router();
let Customer = require("../models/customer.model");

router.route("/").get((req, res) => {
    Customer.find()
        .then(customers => res.json(customers))
        .catch(err => res.status(400).json("ERROR: " + err));
})

router.route("/login").post((req, res) => {
    console.log("res body", req.body);
    Customer.findOneAndUpdate(
        {username: req.body.username, password: req.body.password},
        {$set: {isLogin: true}}
    )
    .then(customers => {
        res.json(customers)
    })
    .catch(err => res.status(400).json("ERROR: " + err));
})

module.exports = router;