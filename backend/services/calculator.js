exports.calculatorHypertension = BP => {
  let {SysBP, DiaBP} = BP;
  SysBP = Number (SysBP);
  DiaBP = Number (DiaBP);

  console.log (typeof SysBP, typeof DiaBP);

  if (SysBP >= 180 && DiaBP >= 120) {
    return 'Stage 3';
  } else if ((SysBP >= 160 && SysBP < 180) || (DiaBP >= 100 && DiaBP < 110)) {
    return 'Stage 2';
  } else if ((SysBP >= 140 && SysBP < 160) || (DiaBP >= 90 && DiaBP < 100)) {
    return 'Stage 1';
  } else {
    return 'No Hypertension';
  }
};

exports.calculatorKidney = dataKidney => {
  const {eGFR} = dataKidney;
  Number (eGFR);
  if (eGFR >= 90) {
    return 'Normal';
  } else if (eGFR >= 60 && eGFR <= 89) {
    return 'Mildly Decreased';
  } else if (eGFR >= 45 && eGFR <= 59) {
    return 'Mild to Moderate';
  } else if (eGFR >= 30 && eGFR <= 44) {
    return 'Moderate to Severe';
  } else if (eGFR >= 15 && eGFR <= 29) {
    return 'Severely Decreased';
  } else {
    return 'Kidney Failure';
  }
};

exports.percentageDrop = dataKidney => {
  console.log (dataKidney);
  let arrayPercentage = [];
  for (let i = 0; i < dataKidney.length - 1; i++) {
    let drop =
      (dataKidney[i]['eGFR'] - dataKidney[i + 1]['eGFR']) /
      dataKidney[i]['eGFR'];
    console.log (drop);
    if (drop >= 0.20) {
      dropFormat = drop.toFixed (4) * 100;
      arrayPercentage.push ({
        drop: Number (dropFormat.toFixed (2)),
        atDate: dataKidney[i + 1]['atDate'],
      });
    }
  }
  return arrayPercentage;
};
