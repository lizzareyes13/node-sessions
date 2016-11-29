var express = require('express');
var app = express();
var PORT = 3007;
var session = require('express-session');

app.use(function(req,res,next){
  console.log("got a request");
  return next();
});


//creates SERVER SUPPORT SESSIONS
app.use(session({
  secret: 'this is a super secret password',
  saveUninitialized: true,
  resave: true
}));

app.get('/', function(req, res){
  req.session.numVisited++;
  res.send("Fidel - Mannequin Challenge champion" + req.session.numVisited);
});

app.get('/whatsgoingoninhell', function(req, res){
  if(!req.session) return res.sendStatus(500);
  if(!req.session.numVisited)
  // if (req.session && !req.session.numVisited)
  req.session.numVisited = 0;
  req.session.numVisited++;
  res.send("number of kissies between Fidel and Chavez " +req.session.numVisited);
});
app.listen(PORT, function(req,res){
  console.log("listening on " + PORT);
});
