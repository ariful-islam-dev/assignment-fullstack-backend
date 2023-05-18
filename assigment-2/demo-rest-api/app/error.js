

const notFoundHandler =(_req, _res, next)=>{
    const error = new Error('Resource Not Found');
    error.status = 404;
    next(error)
};

const errorHandler = (err, _req, res, _next)=>{
    if(err.status){
        return res.status(err.status).json({message: err.message})
    };

    res.status(500).json({message:"Something went wrong"})
}

module.exports = {
    notFoundHandler, errorHandler
}