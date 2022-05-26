console.log('Hello TypeScript');
console.log('Sonic');

import express, { Express, Request, Response } from 'express';

const PORT = 3000;
const app: Express = express();


app.use(express.static(__dirname));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(__dirname + "/views/index.html");
});

  
app.listen(PORT, () => console.log(`Running on ${PORT} :zap:`));