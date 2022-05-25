console.log('Hello TypeScript');
console.log('Sonic');

import express, { Express, Request, Response } from 'express';
import { request } from 'http';



const PORT = 3000;
const app: Express = express();


// const getUserData = (name: string, website: string, email: string, address: string) => {
//         app.get('https://jsonplaceholder.typicode.com/users' + name + website + email + address, (response: string) => {
//             console.log(response);
//         })
//     }

// const getUserData2 = () => {
//         app.get('https://jsonplaceholder.typicode.com/users', (response: any) => {
//             console.log(response);
//         })
//     }


 
// console.log(getUserData2);

app.use(express.static(__dirname));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(__dirname + "/views/index.html");
});

// app.get('https://jsonplaceholder.typicode.com/users', (req: Request, res: Response) => {
//     res.sendFile(req.params);
//   });

  
app.listen(PORT, () => console.log(`Running on ${PORT} :zap:`));