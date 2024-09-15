const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Default to port 3000 if not set in environment variables

app.get('/', (req, res) => {
    res.send('Archi000 CMS!')
  })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
