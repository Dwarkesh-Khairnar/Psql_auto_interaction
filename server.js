import express from 'express';
import { connectDatabase, client } from './db/dbConnection.js';
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.BACK_PORT;

// Establish the database connection

connectDatabase();


    setTimeout(One, 2000); // Delay in milliseconds

app.get('/', async (req, res) => {
res.send('It start working')
})

async function One() {
    try {
        const result = await client.query(`UPDATE active SET active = 'Evenig' WHERE id=1;`);
        console.log('Evenig:', result);
    } catch (error) {
        console.error('Database query error:', error); // Log detailed error
    }
    setTimeout(Two, 43200000); // Delay in milliseconds
}

async function Two() {
    try {
        const result = await client.query(`UPDATE active SET active = 'mornig' WHERE id=1;`);
        console.log('Mornig:', result); // Log the results 
    } catch (error) {
        console.error('Database query error:', error); // Log detailed error
    }
    setTimeout(One, 43200000); // Delay in milliseconds
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Delay in milliseconds
});