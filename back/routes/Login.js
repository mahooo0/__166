const express = require('express');
const router = express.Router();
const mockUser = {
    email: '__166@gmail', // The email to login with
    password: '12345678', // Plain password
};
// Create a new item
router.post('/', async (req, res) => {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        return res
            .status(400)
            .json({ message: 'Email and password are required' });
    }

    // Check if email exists
    if (email !== mockUser.email) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Check if password matches the plain password
    if (password !== mockUser.password) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    // If login is successful, send a success message with a 200 OK status
    res.status(200).json({ message: 'Login successful' });
});

module.exports = router;
