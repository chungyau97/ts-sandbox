import express from 'express';
import { Chicken } from './utils/chicken';
import { WebCrawl } from './utils/webcrawl';
import { config } from 'dotenv';
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
config()

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/webcrawl', async (req, res) => {
  const pages: string[] = await WebCrawl(req.body.url, parseInt(req.body.limit))
  res.send(pages)
});

app.listen(port, () => {
  const chicken = new Chicken();
  chicken.cluck();
  return console.log(`Express is listening at http://localhost:${port}`);
});