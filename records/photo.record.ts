import {FieldPacket} from 'mysql2';

import {PhotoType} from "../types/photo.type";
import {v4 as uuid} from 'uuid';
import {pool} from "../utils/db";


type AdRecordResults = [PhotoRecord[], FieldPacket[]];


export class PhotoRecord implements PhotoType {
    id: string;
    name: string;
    photo: string;
    description: string;

    constructor(obj: PhotoType) {
        this.id = obj.id;
        this.name = obj.name;
        this.photo = obj.photo;
        this.description = obj.description;
    }

    async insert(): Promise<void> {
        if (!this.id) {
            this.id = uuid();
        }
        await pool.execute('INSERT INTO `photos`(`id`, `name`, `photo`, `description`) VALUES(:id, :name, :photo, :description)', {
            id: this.id,
            name: this.name,
            photo: this.photo,
            description: this.description,
        } )

    }

    static async delete(id: string): Promise<void> {
        await pool.execute('DELETE FROM `photos` WHERE id = :id', {id})
    }

    static async getAll(): Promise<PhotoType[]> {
        const [results] = (await pool.execute('SELECT * FROM `photos`')) as AdRecordResults;

        return results.map((obj) => new PhotoRecord(obj));
    }

}