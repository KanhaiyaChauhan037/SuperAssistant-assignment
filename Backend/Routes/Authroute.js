
const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require("../Schema/Loginschema");


// Signup route
router.post('/signup', async (req, res) => {
     try {
          const { username,email, password } = req.body;

          const hashedPassword = await bcrypt.hash(password, 10);


          const user = new User({ username,email, password: hashedPassword });
          await user.save();

          res.status(201).json({ message: 'User created successfully.' });
     } catch (error) {
          res.status(500).json({ error: error.message });
     }
});

// Login route
router.post('/login', async (req, res) => {
     try {
          const { email, password } = req.body;


          const user = await User.findOne({ email });

          if (!user) {
               res.status(404).json({ error: 'User not found.' });
          } else {

               const passwordMatch = await bcrypt.compare(password, user.password);

               if (passwordMatch) {
                    res.json({ message: 'Login successful.' });
               } else {
                    res.status(401).json({ error: 'Invalid credentials.' });
               }
          }
     } catch (error) {
          res.status(500).json({ error: error.message });
     }
});

module.exports = router;