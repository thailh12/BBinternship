const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArticlesSchema = new Schema(
  {
    title: String,
    body: String,
    author: String
  },
  { timestamps: true }
);

module.exports = mongoose.model('Articles', ArticlesSchema);
