const express=require("express")
const router =express.Router();
const {UserAdd,allUsersFetch,findUserById}=require("../controller/userController")

router.post("/",UserAdd);
router.get("/fetchuser",allUsersFetch)
router.get("/:id",findUserById)


module.exports=router