var goal = require("../goal.json");

/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', goal);
}