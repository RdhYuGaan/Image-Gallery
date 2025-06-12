const express = require('express');
const cors = require('cors');
const imageRoutes = require('./routes/imageRoutes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api/images', imageRoutes);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
