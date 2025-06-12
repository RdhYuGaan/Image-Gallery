const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const imageController = require('../controllers/imageController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({ storage });

router.get('/', imageController.getImages);
router.get('/:id', imageController.getImageById);
router.post('/', upload.single('image'), imageController.uploadImage);
router.delete('/:id', imageController.deleteImage);

module.exports = router;
