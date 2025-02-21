import { loginContrller,registerService } from "../services/userService.js"

export const regUserController = async (requestAnimationFrame, res) => {
    try{
        const reVel = await registerService(req.body.username,req.body.password);
        res.status(200).json({msg:"User created successfully"});
    } catch(err) {
        res.status(400).json({error:err.message});
    }
}

export const loginController = async (req, res) => {
    try{
        const retVal = await loginService(req.body.username, req.body.password);
        res.status(200).json(retVal);
    } catch(err){
        res.status(400).json({error:err.message});
    }
}