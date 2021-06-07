import React from 'react';
import {useSelector} from 'react-redux';
import {Table} from 'react-bootstrap';

const HistoricKidney = () => {
  const history = useSelector (state => state.hypertension.data);
  const historyLength = useSelector (state => state.hypertension.data.length);
  
  return (
    <div className="mx-1 my-4">
    
      <h3 className=" text-center">Data History</h3>
    
      {historyLength
        ? <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>SysBP</th>
                <th>DiaBP</th>
                <th>Date</th>
              </tr>
            </thead>
           { history.map((data, index) => (
            <tbody key={index}>
              <tr>
                <td>{index+1}</td>
                <td>{data.SysBP}</td>
                <td>{data.DiaBP}</td>
                <td>{data.atDate}</td>
              </tr>
            </tbody>
            ))
           }
          </Table>
        : <p> Without any added data </p>}
    </div>
  );
};

export default HistoricKidney;
