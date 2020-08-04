const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isLogin: {
        type: Boolean,
        required: false
    }
},{
    timestamps: true
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;