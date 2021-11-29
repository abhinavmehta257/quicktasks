const router = require('express').Router();
const Task = require('../model/Task');
const { auth } = require('../validToken');


router.post("/tasks",async (req,res)=>{
    //creatw new Task
    const task = new Task({
        name:req.body.name,
        description:req.body.description,
        payout_status:req.body.payout_status,
        created_at:req.body.created_at,
        required_quantity:req.body.required_quantity,
        completed_quantity:req.body.completed_quantity,
        prize_amount:req.body.prize_amount,
        form_link:req.body.form_link,
    });
    try {
        await task.save(); 
        res.send('task saved');
    } catch (error) {
        res.status(400).send(error); 
    }
});

module.exports = router;