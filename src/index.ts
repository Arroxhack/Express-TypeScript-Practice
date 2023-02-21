import express from "express"; // ESModules
// const express = require("express"); // CommonJS
// Usamos ESModules, pero al compilar TS utiliza CommonJS
import diaryRouter from "./routes/diaries";

const PORT = 3001;

const app = express();

app.use(express.json()); // middleware que transforma req.body a un json


app.get("/ping", (_req, res) => { // _req para que TS no moleste
    console.log("Someone pinged here!!");
    res.send("pong");
}); 

app.use("/api/diaries", diaryRouter) 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})