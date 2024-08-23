const RegisterModel = require("../models/user.registerModel");
const bcrypt = require('bcrypt');
const multer = require('multer');
const createUser = async (req, res) => {
    const { name, pass, cpass, email } = req.body;

    console.log(req.body);  // To verify the incoming request body
    console.log('Processing registration...');

    // Check for password mismatch
    if (pass !== cpass) {
        return res.status(400).send('Password mismatch');
    }

    // Hash the password
    try {
        const hash = await bcrypt.hash(pass, 10);

        // Create a new user with the hashed password
        const user = new RegisterModel({
            name,
            pass: hash,
            email,
            profileImage: {
                filename: req.file.filename,
                path: req.file.path,
                size: req.file.size,
                mimetype: req.file.size
            }

        });

        // Save the user to the database
        await user.save();

        // Respond to the client after successful registration
        res.send('Register Successful');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error during registration');
    }
};

module.exports = { createUser };
