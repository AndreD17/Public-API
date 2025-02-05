import express from 'express';
import pino from 'pino';

const app = express();
const logger = pino();


app.use(express());



app.get('/api', (req, res) => {
    logger.info('The Public-Api is successfully logged in')
    res.json({
        email: "Damilaresammy1996@gmail.com",  
        current_datetime: new Date().toISOString(),
        github_repo: "https://github.com/AndreD17/Public-Api" 
    });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
