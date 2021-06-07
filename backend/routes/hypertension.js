const express = require ('express');
const router = express.Router ();
const hypertensionController = require ('../controllers/hypertensionController');

router.post ('/', hypertensionController.calculateData);

router.get ('/', hypertensionController.getData);

module.exports = router;
