const jwt = require('jsonwebtoken');

auth = function (req,res,next) {
    const token = req.cookies['authentication'];
    if(!token) return res.status(401).redirect('/login');

    try{
        const verified  = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }catch(err){
        res.status(403).render('page-error', {title:'403',error_code:'403', error_message:'Forbidden Error.'});
    }
}

module.exports.auth = auth;
