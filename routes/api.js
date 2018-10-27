const router = require("express").Router();
const Article = require("../models/modelUse.js");

router.post("/api/article", function(req, res) {
  Article.create(req.body)
  .then(() => {
    res.json(true);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.get("/api/article", function(req, res) {

  Article.find({
    searchTerm
  })
  .then((docs) => {
    res.json(docs);
  });
});

router.get("/api/article/:searchTerm", function(req, res) {
  
  Article.findOne({
    searchTerm: req.params.searchTerm
  })
  .then((docs) => {
    res.json(docs);
  });
});



module.exports = router;