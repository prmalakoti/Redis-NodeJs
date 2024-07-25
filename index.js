import express from 'express';
import router from './routes/routes.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
