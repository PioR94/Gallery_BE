import { Router } from 'express';
import { PhotoRecord } from '../records/photo.record';
import multer from 'multer';

export const photoRouter = Router();

photoRouter

	.get('/get-all', async (req, res) => {
		const photos = await PhotoRecord.getAll();

		res.json(photos);
	})

	.post('/insert', async (req, res) => {
		const newPhoto = new PhotoRecord(req.body);

		await newPhoto.insert();
	})

	.post('/delete-photo', async (req, res) => {
		const id = req.body.id;
		console.log(req.body);

		await PhotoRecord.delete(id);
	})

	.put('/update-photo', async (req, res) => {
		try {
			const { id, title, description } = req.body;
			const photo = await PhotoRecord.getById(id);
			console.log(title);
			if (!photo) {
				return res.status(404).json({ message: 'Photo not found' });
			}

			photo.title = title;
			photo.description = description;

			await photo.update();

			res.json({ message: 'Photo updated successfully.' });
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	});
