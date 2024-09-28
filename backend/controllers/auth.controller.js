import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const { username, email, password } = req.body;


    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        // Respond with the new user (or a success message)
        res.status(201).json({ message: "User created successfully", user: newUser });
        console.log(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create user!", error: error.message });
    }
};




export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Checking if the user exists
        const user = await prisma.user.findUnique({
            where: { username: username }
        });

        if (!user) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }

        // Check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }

        // Generate a cookie token and send to the user
        const age = 1000 * 60 * 60 * 24 * 7;


        const payload = { userId: user.id };
        const secret = process.env.SECRET_KEY;
        const options = { expiresIn: age };
        const {password : userPassword, ...userInfo} = user;

        const token = jwt.sign(payload, secret, options);
        // res.setHeader("Set-Cookie", "test=myValue; HttpOnly; Path=/").json({ message: "Login Success" });
        res.cookie("token", token, {
            httpOnly: true,
            //secure:true,
            maxAge: age,
        }).status(200).json({ userInfo })
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to login" });
    }
};



export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({ message: "LogOut Success" });
};