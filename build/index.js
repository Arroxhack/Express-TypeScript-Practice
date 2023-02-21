"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // ESModules
// const express = require("express"); // CommonJS
// Usamos ESModules, pero al compilar TS utiliza CommonJS
const diaries_1 = __importDefault(require("./routes/diaries"));
const PORT = 3001;
const app = (0, express_1.default)();
app.use(express_1.default.json()); // middleware que transforma req.body a un json
app.get("/ping", (_req, res) => {
    console.log("Someone pinged here!!");
    res.send("pong");
});
app.use("/api/diaries", diaries_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
