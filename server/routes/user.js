const router = require('express').Router();
const { User } = require('../db');

function check(req, res) {
  res.send('It works!!');
}

router.get('/', check);

module.exports = router;