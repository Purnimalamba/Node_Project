var express=require("express");
var router=express.Router();

var uController = require('../Controllers/user');

router.route('/u1/users')
.post(uController.postuser)
.get(uController.getuser);

router.route('/u1/update/:name')
.put(uController.updateuser)
.delete(uController.deleteuser)
.get(uController.searchuser);

module.exports = router;