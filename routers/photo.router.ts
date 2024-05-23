import {Router} from "express";
import {PhotoRecord} from "../records/photo.record";


export const photoRouter = Router();

photoRouter
    .get('/get-all', async (req, res) => {
        const photos = await PhotoRecord.getAll();

        res.json(photos);
    })

    .post('/insert', async (req, res) => {
        const photo = new PhotoRecord(req.body)

        await photo.insert();
    })

    .delete('/delete', async (req, res) => {
        const id = req.body;

        await PhotoRecord.delete(id);
    })