const arraySort = require ('array-sort');
const calculator = require ('../services/calculator');

exports.calculateData = (req, res) => {
  const {dataKidney} = req.body;
  // sorter the data
  let dataOrder = arraySort (dataKidney, 'atDate');
  //  we calculate the percentage of fall according to the date
  let resultPercentage = calculator.percentageDrop (dataOrder);
  let classification = calculator.calculatorKidney (
    dataOrder[dataOrder.length - 1]
  );
  // We send the response in format, the result of the classification,
  // and the result of the percentage of drop
  let response = {
    result: {
      classification: classification,
      atDate: dataOrder[dataOrder.length - 1].atDate,
    },
    percentage: resultPercentage,
  };
  console.log (response);
  res.send (response);
};

exports.getData = (req, res) => {
  console.log ('on build');
};
