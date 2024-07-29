import usermodel from "../Models/usermodel.js"
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name) {
            return res.status(400).send({ success: false, messege: "please provide name" })
        }
        if (!email) {
            return res.status(400).send({ success: false, messege: "please provide email" })
        }
        if (!password) {
            return res.status(400).send({ success: false, messege: "please provide password" })
        }
        const existingusermodel = await usermodel.findOne({ email })
        if (existinguser) {
            return res.status(200).send({
                success: false,
                message: "email already register"
            })
        }
        const user = await usermodel.create({ name, email, password })
        res.status(201).send({
            success: true,
            message: "user created successfully",
            user,
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            message: "error in resgister",
            success: false,
            error
        })
    }
}

export default register;