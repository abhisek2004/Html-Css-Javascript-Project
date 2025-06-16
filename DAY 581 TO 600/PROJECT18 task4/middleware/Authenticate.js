function isAuthenticated(req, res, next) {
    const auth = req.cookies.auth
    if (!auth)
        res.status(500).json({
            "success": false,
            "message": "Access Denied"
        })
    next()
}

module.exports=isAuthenticated