const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://singhsarthak691:UbyBpDXG2RMHctPc@blog.y6tgmlk.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection.on('open', () => {
  console.log('Connected to MongoDB');
});

app.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;
    const userdoc = await User.create({ username, password });
    res.json(userdoc);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/login', (req, res) => {
  res.json('testing okk');
});

app.listen(4000, () => {
  console.log('Server started on port 4000');
});
