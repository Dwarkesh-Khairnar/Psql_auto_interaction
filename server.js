import express from 'express';
import { connectDatabase, client } from './db/dbConnection.js';
import dotenv from "dotenv";
import cron from 'node-cron';
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

let isEvening = true; // Start with the Evening function

// Set up cron jobs
cron.schedule('* * * * *', async () => {
 if (isEvening) {
        await One(); // Update to 'Evenig'
    } else {
        await Two(); // Update to 'mornig'
    }
    isEvening = !isEvening; // Toggle the flag
});

async function One() {
    try {
        const result =await client.query('UPDATE active SET active=$1 WHERE id=$2', ['Evening', 1]);
        console.log('Evenig:', result);
        alert='Update to Evenig'+result
    } catch (error) {
        console.error('Database query error:', error); // Log detailed error
    }

}

async function Two() {
    try {
        const result = await client.query('UPDATE active SET active=$1 WHERE id=$2', ['mornig', 1]);
        console.log('Mornig:', result); // Log the results
        alert='Update to Mornig'+result
    } catch (error) {
        console.error('Database query error:', error); // Log detailed error
    }

}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Delay in milliseconds
});