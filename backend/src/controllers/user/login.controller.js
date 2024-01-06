const Joi = require("joi");
const argon2 = require("argon2");
const bcrypt = require("bcrypt");
const User = require("../../models/user.model");
const JwtService = require("../../services/jwtService");
const CustomErrorHandler = require("../../services/customErrorHandler");

const authController = {
  async login(req, res, next) {
    // Validate the email
    try {
      let userExits = await User.findOne({ email: req.body.email });
      if (userExits) {
        // Validate for password

        if (await argon2.verify(userExits.password, req.body.password)) {
          const accessToken = JwtService.sign({ email: userExits.email }, "1m");
          return res.status(200).send({ accessToken, user: "old" });
        } else {
          return next(CustomErrorHandler.wrongCredentials("Wrong Credentials"));
        }
      } else {
        // Create new User in the databased
        // validate user
        const registerSchema = Joi.object({
          email: Joi.string().email().required(),
          password: Joi.string()
            .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
            .required(),
        });
        const { error } = registerSchema.validate(req.body);
        if (error) {
          
          return next(error);
        }

        // hash password
        const hash = await argon2.hash(req.body.password);

        // create new user in the database
        console.log("working");
        let newUser = new User({ email: req.body.email, password: hash });

        // save user
        await newUser.save();
        // Generating token
        const accessToken = JwtService.sign({ email: newUser.email }, "1m");
        return res.status(201).send({ accessToken, user: "new" });
      }
    } catch (err) {
      console.log(err.message,"Error")
      return next(err);
    }
  },
};

module.exports = authController;
