const express = require('express');
const router = express.Router(); 
const kidneyController = require('../controllers/kidneyController'); 

router.post('/', kidneyController.calculateData ); 

router.get('/', kidneyController.getData ); 

module.exports = router; 