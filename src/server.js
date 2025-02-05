import express from 'express';

const app = express();

app.use(express());


app.get('/api', (req, res) => {
    res.json({
        email: "Damilaresammy1996@gmail.com",  
        current_datetime: new Date().toISOString(),
        github_repo: "https://github.com/AndreD17/Public-Api" 
    });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
