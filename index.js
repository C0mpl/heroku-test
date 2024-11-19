const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve test data as a JSON response
app.get('/test-data', (req, res) => {
    res.json([
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }
    ]);
});

// Default route
app.get('/', (req, res) => {
    res.send('Node.js App is Running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});