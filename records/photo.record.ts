import { FieldPacket } from 'mysql2';
import { PhotoType } from '../types/photo.type';
import { v4 as uuid } from 'uuid';
import { pool } from '../utils/db';

type PhotoRecordResults = [PhotoRecord[], FieldPacket[]];

export class PhotoRecord implements PhotoType {
	id?: string;
	title: string;
	photo: string;
	description: string;

	constructor(obj: PhotoType) {
		this.id = obj.id;
		this.title = obj.title;
		this.photo = obj.photo;
		this.description = obj.description;
	}

	async insert(): Promise<void> {
		if (!this.id) {
			this.id = uuid();
		}
		await pool.execute(
			'INSERT INTO `photos`(`id`, `title`, `photo`, `description`) VALUES(:id, :title, :photo, :description)',
			{
				id: this.id,
				title: this.title,
				photo: this.photo,
				description: this.description,
			}
		);
	}

	static async delete(id: string): Promise<void> {
		await pool.execute('DELETE FROM `photos` WHERE id = :id', { id });
	}

	static async getAll(): Promise<PhotoType[]> {
		const [results] = (await pool.execute('SELECT * FROM `photos`')) as PhotoRecordResults;

		return results.map(obj => new PhotoRecord(obj));
	}

	static async getById(id: string): Promise<PhotoRecord | null> {
		const [results] = (await pool.execute('SELECT * FROM `photos` WHERE id = :id', { id })) as PhotoRecordResults;
		return results.length === 0 ? null : new PhotoRecord(results[0]);
	}

	async update(): Promise<void> {
		if (!this.id) {
			throw new Error('Cannot update a record without an ID');
		}
		await pool.execute('UPDATE `photos` SET `title` = :title, `description` = :description WHERE `id` = :id', {
			id: this.id,
			title: this.title,
			description: this.description,
		});
	}
}
