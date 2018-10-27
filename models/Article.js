const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  searchTerm: {
    type: String,
    required: true
  },
  numberOfRecord: {
    type: String,
    required: true
  },
 startYear : {
    type: Number,
    required: true,
    unique: true
  },
  endYear: {
    type: Number,
    required: true,
    unique: true
  }
});

const Article = mongoose.model("NYTArticle", ArticleSchema);

module.exports = Article;