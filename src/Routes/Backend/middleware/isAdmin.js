module.exports = (req, res, next) => {
    if(req.mathod === "POST" && req.path === "/register" || req.path === "/user"){

    }else{
      console.log("some other path")
    }
    next()
  }