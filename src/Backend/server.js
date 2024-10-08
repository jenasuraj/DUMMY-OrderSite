const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // Import body-parser

const router = require('./routes/router.js');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json()); // Use body-parser middleware to parse JSON

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
