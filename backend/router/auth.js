import express from "express"
import User from "../model/user.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password) {
            return res.status(400).json({ message: "input all credentials" });

        }
        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({ message: "user already exist" })
        }

        const user = await User.create({ email, password })
        return res.status(200).json({ message: "user created" }, {
            id: user._id,
            email: user.email,
            password: user.password
        })



    } catch (error) {
        return res.status(500).json({ message: "internal server error" })

    }
})

export default router;