import express from 'express';
import pino from 'pino';
import validator from 'validator';

const app = express();
const logger = pino();


app.use(express());



const email = "Damilaresammy1996@gmail.com"; // Replace with dynamic input

app.get('/api', (req, res) => {
    if (!validator.isEmail(email)) {
        return res.status(400).json({ error: "Invalid email format" });
    } 

    logger.info('The Public-Api is successfully logged in');

    res.json({
        email: email,
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/AndreD16/Public-Api"
    });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
