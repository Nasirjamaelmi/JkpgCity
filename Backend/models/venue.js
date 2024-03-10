const db = require('../config/database');

class Venue {
  static findAll(callback) {
    db.query('SELECT * FROM venues', callback);
  }

  static findById(id, callback) {
    db.query('SELECT * FROM venues WHERE id = ?', [id], callback);
  }

  static create(data, callback) {
    db.query('INSERT INTO venues SET ?', data, callback);
  }

  static update(id, data, callback) {

    if(data.created_at){
      delete data.created_at;
    }

    db.query('UPDATE venues SET ? WHERE id = ?', [data, id], callback);
  }

  static delete(id, callback) {
    db.query('DELETE FROM venues WHERE id = ?', [id], callback);
  }
}

module.exports = Venue;
