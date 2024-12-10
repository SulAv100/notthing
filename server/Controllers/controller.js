const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userModel = require("../Model/userModel");

exports.postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "User Not Found",
      });
    }
    const doMatch = await bcrypt.compare(password, user.password);

    if (!doMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const userToken = jwt.sign(
      { email: user.email },
      process.env.JWTSECRETKEY,
      {
        expiresIn: "1h",
      }
    );

    res.cookie("userToken", userToken, {
      httpOnly: true,
    });

    return res.status(200).json({
      message: "Login Successfull",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.postSignup = async (req, res) => {
  try {
    const { email, name, password, rePassword } = req.body;

    if (password !== rePassword) {
      return res.status(401).json({
        message: "Passwords do not match",
      });
    }
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(401).json({
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    if (await user.save()) {
      const userToken = jwt.sign(
        { email: user.email },
        process.env.JWTSECRETKEY,
        {
          expiresIn: "1h",
        }
      );
      res.cookie("userToken", userToken, {
        httpOnly: true,
      });
      res.status(201).json({
        message: "User created successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.getVerify = async (req, res) => {
  const userToken = res.cookie.userToken;

  const decoded = jwt.verify(userToken, process.env.JWTSECRETKEY);

  if (!decoded) {
    return res.status(422).json({
      message: "Token not valid",
    });
  }
  const email = decoded.email;

  const user = await userModel.findOne({ email: email });

  return res.status(200).json({
    message: "User verified successfully",
    user: user,
  });
};
