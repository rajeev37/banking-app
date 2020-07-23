const router = require("express").Router();
let Customer = require("../models/customer.model");

router.route("/").get((req, res) => {
    Customer.find()
        .then(customers => res.json(customers))
        .catch(err => res.status(400).json("ERROR: " + err));
})

module.exports = router;