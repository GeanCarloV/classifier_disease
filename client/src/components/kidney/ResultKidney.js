import React, {useState, useEffect, Fragment} from 'react';
import {useSelector} from 'react-redux';
import {Bar} from 'react-chartjs-2';

const options = {
  responsive: true,
  scales: {
    y: {
      suggestedMax: 100,
    },
  },
};

/**
 * The component Result Kidney show us the result of a calculate
 * @returns render parts
 */
const ResultKidney = () => {
  const result = useSelector (state => state.kidney.result);
  
  const [dataDrop, setDataDrop] = useState([])
  const [labels, setLabels] = useState([])


  useEffect(() => {
    if(result){
      setDataDrop(result.percentage.map(item => item.atDate));
      setLabels(result.percentage.map(item => item.drop));
    }
    
  }, [result])

  const data = {
    labels: dataDrop,
    datasets: [
      {
        label: '% Drop',
        data: labels,

        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Fragment>
      <div className="d-flex justify-content-center">
        <h3>Result</h3>
      </div>
      <div>
        {result
          ? <div>
              <p> {result.result.classification} on {result.result.atDate}  </p>
              { result.percentage.length > 0
               ? <div>
                <Bar data={data} options={options} />
              </div> : null}
            </div>
          : null}

      </div>

    </Fragment>
  );
};

export default ResultKidney;
