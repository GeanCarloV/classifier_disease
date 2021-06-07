import React, {Fragment} from 'react';
import { useSelector } from 'react-redux'


const ResultHypertension = () => {
  const result = useSelector (state => state.hypertension.result);
  return (
    <Fragment>
      <div className="d-flex justify-content-center">
        <h3>Result</h3>
      </div>
      <div>
        {result ? <p> {result.classification} on {result.atDate}  </p> : null}

      </div>
    </Fragment>
  );
};

export default ResultHypertension;
