var express = require('express');
var router = express.Router();

module.exports = router;

router.get('/', function(req, res) {
  res.status(200).json({data: {message: 'Hello, world!'}});
});
