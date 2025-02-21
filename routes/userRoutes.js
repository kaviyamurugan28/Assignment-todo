import exp from "express"
import {loginContrller, regUserController} from "../controller/userController.js";

const router = exp.Router();

router.post("/register", resUserController)
router.post("/login",loginContrller)

