const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

(async () => {
  const user = new User({ username: 'Dev', password: 'Devendra@1' });
  await user.save();
  console.log('Admin user created');
  process.exit();
})();
