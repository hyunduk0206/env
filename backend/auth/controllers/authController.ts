import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";

/* handle errors */
const handleErrors = (err: any) => {
    console.log(err.message, err.code);
    let errors: { [index: string]: string } = { email: "", password: "" };

    /* duplicate error code */
    if (err.code === 11000) {
        errors.email = "that email is already registered";
        return errors;
    }

    /* validation errors */
    if (err.message.includes("user validation failed")) {
        Object.values(err.errors).forEach(({ properties }: any) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id: string) => {
    return jwt.sign({ id }, "HShin secret", {
        expiresIn: maxAge,
    });
};

const signup_get = (req: Request, res: Response) => {
    res.render("signup");
};

const login_get = (req: Request, res: Response) => {
    res.render("login");
};

const signup_post = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.create({ email, password });
        res.status(201).json(user);
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};

const login_post = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.send("user login");
};

export default { signup_get, login_get, signup_post, login_post };
