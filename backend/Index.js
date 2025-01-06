const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000; 


let items = [];

app.use(cors());
app.use(express.json());

app.get('/api/items', (req, res) => {
  res.json(items);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
