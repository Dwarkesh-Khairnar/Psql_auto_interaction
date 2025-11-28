import express from 'express';
import { connectDatabase, client } from './db/dbConnection.js';
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.BACK_PORT;

// Establish the database connection

connectDatabase();



let alert;
app.get('/', async (req, res) => {
res.send('Cron jobs are set for updates.' ,alert)
})

// Set up cron jobs
cron.schedule('0 */12 * * *', async () => {
    await One();
});

cron.schedule('0 */12 * * *', async () => {
    await Two();
});

async function One() {
    try {
        const result = await client.query(`UPDATE active SET active = 'Evenig' WHERE id=1;`);
        console.log('Evenig:', result);
        alert='Update to Evenig'
    } catch (error) {
        console.error('Database query error:', error); // Log detailed error
    }

}

async function Two() {
    try {
        const result = await client.query(`UPDATE active SET active = 'mornig' WHERE id=1;`);
        console.log('Mornig:', result); // Log the results
        alert='Update to Mornig' 
    } catch (error) {
        console.error('Database query error:', error); // Log detailed error
    }

}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Delay in milliseconds
});