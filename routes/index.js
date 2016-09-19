var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hellow' });
});


router.get('/about', (request, res) => {
  let db = request.db;

	db.collection('login').find().toArray(function(err, results) {
		if (err) return console.log(err)
		// render index.ejs
		res.render('about.jade', {lili: results})
	})
})

module.exports = router;
