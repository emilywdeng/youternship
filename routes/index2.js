var goal = require("../goal.json");

/*
 * GET home page #2.
 */

exports.addGoal = function(req, res){
  res.render ('index', goal);

  var newGoal = {
    "goal": req.query.goal,
    "deadline": req.query.deadline,
    "image": req.query.image,
    "goalStatus": "Pending"
  }
  console.log (newGoal);
  goal["goal"].push(newGoal);
}

exports.addGoal2 = function(req, res) {
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
