const express = require('express');
const router = express.Router();
const logic = require('../Controllers/logic');


router.get('/show',logic.GetData);

router.post('/show',logic.PostData);


module.exports = router;
