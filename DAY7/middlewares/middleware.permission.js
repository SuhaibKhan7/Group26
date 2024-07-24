const permission = (req, res, next) => {
    if (req.url === '/data') {
        next();
    }
    else {
        res.send('You are not allowed')
    }
}

module.exports={
    permission
}