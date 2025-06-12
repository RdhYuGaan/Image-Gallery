const db = require('../config/db');

const Image = {
  getAll: cb => db.query('SELECT * FROM images ORDER BY id DESC', cb),
  getById: (id, cb) => db.query('SELECT * FROM images WHERE id = ?', [id], cb),
  create: (filename, originalname, cb) =>
    db.query('INSERT INTO images (filename, originalname) VALUES (?, ?)', [filename, originalname], cb),
  delete: (id, cb) => db.query('DELETE FROM images WHERE id = ?', [id], cb)
};

module.exports = Image;
