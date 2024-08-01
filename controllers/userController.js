var jwt = require('jsonwebtoken');
var generateToken = require('../utils/authHelper.js').generateToken;
const User = require('../models/userModel.js');

exports.signup = async function (req, res) {
    try {
        // parse username and password
        const { username, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user
        const newUser = new User({ username, password });
        await newUser.save();
        
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error creating user', error });
    }
};

// Fetch all users and show
exports.getUsers = async function (req, res) {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};

// Login route
exports.login = async function (req, res) {
    try {
        const { username, password } = req.body;

        // Find the user
        const currentUser = await User.findOne({ username, password });

        if (currentUser) {
            // Generate token and return
            const token = generateToken(currentUser.toObject());
            res.status(200).json({ token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error logging in', error });
    }
};

// Example protected route
exports.protectedRoute = function (req, res) {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Verify the token
    jwt.verify(token, 'ITS2SECret', function (err) {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
    
        // Access protected content
        res.status(200).json({ message: 'Protected content accessed' });
    });
};
// Delete route
exports.deleteUserByUsername = async function (req, res) {
    try {
        console.log('deleteUserByUsername called');
        const { username } = req.params;
        console.log('Username to delete:', username);
        
        const deletedUser = await User.findOneAndDelete({ username: username });
        if (!deletedUser) {
            console.log('User not found');
            return res.status(404).json({ message: 'User not found' });
        }
        console.log('User deleted successfully');
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Error deleting user', error });
    }
};

