import express from "express";
import * as diaryServices from "../services/diaryServices";
import toNewDiaryEntry from "../utils";

const router = express.Router();

router.get("/", (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo());    
});

router.get("/:id", (req, res) => {
    const diary = diaryServices.findById2(Number(req.params.id));
    return diary 
        ? res.send(diary)
        : res.sendStatus(404)    
});

router.post("/", (req, res) => {
    try {
        // const { date, weather, visibility, comment } = req.body;

        const newDiaryEntry = toNewDiaryEntry(req.body)

        const addedDiaryEntry = diaryServices.addDiaryEntry(newDiaryEntry);

        res.json(addedDiaryEntry); 
 
    } catch (error) { 
        if(error instanceof Error){
            console.log(error);
            res.status(400).send(error.message);
        } else {
            console.log("Unexpected error", error);
            res.status(400).send("Unexpected error");
        }
    }
});


export default router;