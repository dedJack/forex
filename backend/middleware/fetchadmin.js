const fetchadmin = (req, res, next)=>{
    try {
        const adminRole = req.rootUser.isAdmin ;
        if(!adminRole){
            res.status(401).json({error: "Access denied! User is not an Admin "});
        } 
        //if user is admin then process to next();
        next();
    } catch (error) {
        res.status(401).json({error: "cannot fetch admin error "});
    }
}

module.exports = fetchadmin;