var profileData = require("../profiledata.json");
/*
 * GET profile page.
 */

exports.view = function(req, res){
  res.render('profile', profileData);
}