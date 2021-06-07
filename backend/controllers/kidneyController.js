const arraySort = require('array-sort');
const calculator = require('../services/calculator');

exports.calculateData = (req, res) => {
   const { dataKidney } = req.body; 
   let dataOrder =  arraySort(dataKidney, 'atDate'); 
   let resultPercentage = calculator.percentageDrop(dataOrder)
   let classification = calculator.calculatorKidney(dataOrder[dataOrder.length-1]);
   let response = {
       "result": {
           "classification" : classification,
           "atDate": dataOrder[dataOrder.length-1].atDate
       }, 
       "percentage": resultPercentage
   }
   console.log(response); 
   res.send(response)
}

exports.getData = (req, res) => {
    console.log('on build');
}
