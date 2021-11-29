const mongoose = require('mongoose');

const TasksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    payout_status: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now,
    },
    required_quantity: {
        type: Number,
        required: true,
    },
    completed_quantity: {
        type: Number,
        required: true,
    },
    prize_amount: {
        type: Number,
        required: true,
    },
    form_link: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
});

module.exports = mongoose.model('Tasks', TasksSchema);