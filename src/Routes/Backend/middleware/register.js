const findUser = require("../findUser");

module.exports = (req, res, next) => {
    if (req.method === "POST" && req.path === "/users") {
        res.send({
            "error": "post request on users not allowed"
        })
    } else if (req.method === "POST" && req.path === "/register") {
        let body = req.body;
        let email = body.email;

        if (body.isAdmin != null && body.isAdmin || body.isTeam != null && body.isTeam) {
            //if this request is from admin or Team
            let user = findUser(email);
            if (user.isAdmin || user.isTeam) {
                //if he is actually admin or Team
                if(body.isAdmin && !user.isAdmin){
                   res.send("Only admin can make admin account")
                }
            } else {
                //faking to be admin or Team
                req.body = {
                    ...req.body,
                    isAdmin: false,
                    isTeam: false
                }
            }
        } else {
            req.body = {
                ...req.body,
                isAdmin: false,
                isTeam: false
            }
        }
        next();
    }
}