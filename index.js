const express = require('express');


const app = express();



app.use(express.json());
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/api/whoami', (req, res) => {
  const ipaddress = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({
    ipaddress: ipaddress.split(':').pop(), 
    language,
    software,
  });
});


const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
