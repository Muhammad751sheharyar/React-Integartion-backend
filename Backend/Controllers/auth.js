const User = require("../db/User");
const bcrypt = require("bcrypt");


exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // check user exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.json({ message: "Signup successful" });
  } catch (error) {
    res.json({ message: "Signup failed" });
  }
};


exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "Invalid email" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid password" });
    }

    res.json({ success: true, message: "Login successful" });
  } catch (error) {
    res.json({ success: false, message: "Login failed" });
  }
};
