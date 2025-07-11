import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { recommendationRouter } from './routes/recommendation';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/recommendation', recommendationRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
