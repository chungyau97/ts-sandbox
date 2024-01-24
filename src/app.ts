import express from 'express';
import { Chicken } from './utils/chicken';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
    const chicken = new Chicken();
    chicken.cluck();
  return console.log(`Express is listening at http://localhost:${port}`);
});