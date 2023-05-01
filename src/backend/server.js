const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const usersRouter = require('./routes/users');
const users = require('./routes/users');
const authRouter = require('./routes/auth');
const ordersRouter = require('./routes/orders');
const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('dev'));

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/users', users);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/orders', ordersRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong');
  });
  
