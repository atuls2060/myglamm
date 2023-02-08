const db = require("./db.json")
module.exports = (email)=>{
    const users = db.users;

    const found_user = users.filter((elm)=> elm.email === email);

   return found_user > 0 ? found_user[0]: {};
}