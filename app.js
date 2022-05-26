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
app.use(express_1.default.static(__dirname));
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});
app.listen(PORT, () => console.log(`Running on ${PORT} :zap:`));
