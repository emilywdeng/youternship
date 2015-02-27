var profileData = require("../profiledata.json");
/*
 * GET profile page.
 */

exports.editProfile = function(req, res){
  res.render('profile', profileData);

  /*var updatedProf = {
  	"profName": req.query.profName,
    "profImg": req.query.profImg,
    "profField": req.query.profField,
    "profMOOC": req.query.profMOOC,
    "profTeach": req.query.profTeach,
    "profLearn": req.query.profLearn,
    "profAboutMe": req.query.profAboutMe 
  }

  console.log (updatedProf);
  profileData["profileData"][0] = updatedProf;*/

  var form_data = req.body;
  console.log(form_data);

  profileData["profileData"][0] = form_data;

}

exports.addProject = function(req, res) {
  var form_data = req.body;
  console.log(form_data);

  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();
  var newPost = new models.Project(form_data);

  newPost.save(afterSaving);

  function afterSaving (err) {
    if (err) {console.log(err);}
    res.redirect('/'); //redirect to home
    res.send('OK');
  }
}

exports.editProfile2 = function(req, res) {
  console.log("Request received");
  if (request.method == 'POST') {
    console.log("Request is POST");
    var body = '';
    request.on('data', function (data) {
      console.log("adding data");
      body += data;
      // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
      if (body.length > 5.5 * 1e6) {
        // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
        request.connection.destroy();
      }
    });
    request.on('end', function () {
      body = decodeURI(body);
      var POST = qs.parse(body);
      // use POST
      console.log(POST);
      var data = "POST DATA TO BE PUT INTO DATABASE";


    });
  }
};
