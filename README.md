# Photo Gallery - Backend

## Project Description
The backend of the Photo Gallery application is built using Express and TypeScript. It supports CRUD (Create, Read, Update, Delete) operations for photos, which are stored in a MariaDB database.

## System Architecture
### Backend
- **Framework**: Express
- **Programming Language**: TypeScript
- **API Endpoints**:
  - Add photo (`/insert`)
  - Get all photos (`/get-all`)
  - Delete photo (`/delete-photo`)
  - Update photo (`/update-photo`)

### Database
- **MariaDB**
- **Table**: `photos`
  - **Columns**:
    - `id` (VARCHAR) - unique identifier for the photo
    - `title` (VARCHAR) - title of the photo
    - `photo` (LONGTEXT) - photo content in base64 format
    - `description` (TEXT) - description of the photo

## Environment Setup
Necessary tools to run the backend:
- [Node.js](https://nodejs.org/en/)
- [npm](https://docs.npmjs.com/)
- [MariaDB](https://mariadb.org/download/)
- [XAMPP](https://www.apachefriends.org/index.html)
- [HeidiSQL](https://www.heidisql.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Application Installation

### Backend
1. Copy the contents of the `Gallery_BE` folder to your local disk.
2. Install dependencies by running:
    ```bash
    npm install
    ```
3. Configure the `.env` file as shown below:
    ```env
    BASE_URL=http://localhost:3000
    DB_PASSWORD=your_dbpassword
    DB_USER=your_dbuser
    DB_NAME=your_dbname
    PORT=3001
    DB_HOST=localhost
    ```
4. Start the backend by running:
    ```bash
    npm start
    ```
## License
This project is licensed under the MIT License.
