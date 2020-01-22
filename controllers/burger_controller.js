var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

//get all the info on the burgers table
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log("hello",hbsObject);
    res.render("index", hbsObject);
  });
});
// this is where the burger is put on the page
router.post("/api/burgers", function (req, res) {
  burger.create([
    "name"
  ], [
    req.body.name
  ], function (result) {
    res.json({ id: result.insertId });
  });
});
//this is where the burger gets updated from one side to the other on the website 
router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoure: req.body.devoure
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
// this is where the burger gets deleted from the left side of the website
router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;