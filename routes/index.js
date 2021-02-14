var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'Music Converter incorporated by Noodley and Ghey',
    appleMusicSignIn: "Sign in to Apple Music",
    spotifySignIn: 'Sign in to Spotify' });
});

router.post('/AMSignIn',  function(req, res) {
  res.render('index', 
  { title: 'Music Converter incorporated by Noodley and Ghey',
    appleMusicSignIn: 'signed in!',
    spotifySignIn: 'Sign in to Spotify' });
});

module.exports = router;