const calculator = require ('../services/calculator');
const arraySort = require ('array-sort');

exports.calculateData = (req, res) => {
  try {
    const {BP} = req.body;
    // sorter the data 
    let BPOrder = arraySort (BP, 'atDate', {reverse: true});
    // send the data with the calculation of the first element most recent
    let response = {
      classification: calculator.calculatorHypertension (BPOrder[0]),
      atDate: BPOrder[0].atDate,
    };
    console.log (response);
    res.send (response);
  } catch (error) {
    console.log (error);
    res.status (500).send ('Internal server error');
  }
};

exports.getData = (req, res) => {
  try {
    console.log ('on build');
  } catch (error) {
    console.log (error);
    res.status (500).send ('Internal server error');
  }
};
