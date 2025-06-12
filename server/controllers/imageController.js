const Image = require('../models/Image');
const path = require('path');
const fs = require('fs');

exports.getImages = (req, res) => {
  Image.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getImageById = (req, res) => {
  const id = req.params.id;
  Image.getById(id, (err, results) => {
    if (err || results.length === 0) return res.status(404).json({ error: 'Image not found' });
    res.json(results[0]);
  });
};

exports.uploadImage = (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).json({ error: 'No file uploaded' });
  Image.create(file.filename, file.originalname, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Image uploaded successfully', id: result.insertId });
  });
};

exports.deleteImage = (req, res) => {
  const id = req.params.id;
  Image.getById(id, (err, results) => {
    if (err || results.length === 0) return res.status(404).json({ error: 'Image not found' });
    const image = results[0];
    fs.unlink(path.join(__dirname, '../../uploads', image.filename), err => {
      if (err) console.log('File delete error:', err);
      Image.delete(id, err => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Image deleted' });
      });
    });
  });
};
