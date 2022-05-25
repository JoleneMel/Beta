"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Hello TypeScript');
console.log('Sonic');
const express_1 = __importDefault(require("express"));
const PORT = 3000;
const app = (0, express_1.default)();
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
app.use(express_1.default.static(__dirname));
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});
// app.get('https://jsonplaceholder.typicode.com/users', (req: Request, res: Response) => {
//     res.sendFile(req.params);
//   });
app.listen(PORT, () => console.log(`Running on ${PORT} :zap:`));
