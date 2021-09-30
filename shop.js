const express = require('express');
const config = require('config');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const authRouter = require('./router/authRouter')
const itemRouter = require('./router/itemsRouter.js')
const errorHandler = require('./middlewares/errorHandling-middleware')

const PORT = config.get('PORT') || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: config.get('CLIENT_URL')
}));
app.use('/auth', authRouter);
app.use('/api', itemRouter);

//ErrorHandler - last point
app.use(errorHandler)

const start = async (uri, callback) => {
    try {
        await mongoose.connect(config.get('DB_URL'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
};
start();