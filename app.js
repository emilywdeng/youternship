
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var index = require('./routes/index');
var index2 = require('./routes/index2');
var meetings = require('./routes/meetings');
var search = require('./routes/search');
var profile = require('./routes/profile');
var profile2 = require('./routes/profile2');

var app = express();


// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Room Mates Secret Key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//add routes here
app.get('/', index.view);
app.get('/index2', index2.addGoal);
app.get('/meetings', meetings.view);
app.get('/search', search.view);
app.get('/profile', profile.view);
app.post('/profile2', profile2.editProfile);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
