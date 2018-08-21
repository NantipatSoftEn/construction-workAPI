class ApiResponse {

    success(data) {
        return (res, meta=null, status=200) => {
            res.status(status);
            res.setHeader('Content-Type', 'application/json');
            res.json({
                data,
                status,
                meta
            })    
        }
    }

    error(error) {
        return (res, status=400) => {
            res.status(status);
            res.setHeader('Content-Type', 'application/json');

            res.json({
                error,
                status
            }) 
        }
    }
}

module.exports = new ApiResponse();