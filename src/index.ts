import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT: string = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Olá Mundo!');
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});