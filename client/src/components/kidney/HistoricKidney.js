import React from 'react';
import {useSelector} from 'react-redux';
import {Table} from 'react-bootstrap';

const HistoricKidney = () => {
  const history = useSelector (state => state.kidney.data);
  const historyLength = useSelector (state => state.kidney.data.length);

  return (
    <div className="mx-1 my-4">

      <h3 className=" text-center">Data History</h3>

      {historyLength
        ? <Table striped bordered hover data-testid="historic-kidney">
            <thead>
              <tr>
                <th>#</th>
                <th>eGFR</th>
                <th>Date</th>
              </tr>
            </thead>
            {history.map ((data, index) => (
              <tbody key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.eGFR}</td>
                  <td>{data.atDate}</td>
                </tr>
              </tbody>
            ))}
          </Table>
        : <p> Without any added data </p>}
    </div>
  );
};

export default HistoricKidney;
