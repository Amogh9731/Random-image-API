const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Route to get random image
app.get('/api/image/random', (req, res) => {
  const width = 400;
  const height = 300;
  const randomNum = Math.floor(Math.random() * 1000);
  const imageUrl = `https://picsum.photos/${width}/${height}?random=${randomNum}`;
  
  res.json({ imageUrl });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
