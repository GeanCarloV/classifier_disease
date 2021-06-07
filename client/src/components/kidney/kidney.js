import React from 'react';
import {Col, Row,  Container} from 'react-bootstrap';
import FormKidney from './FormKidney'
import ResultKidney from './ResultKidney';
import HistoricKidney from './HistoricKidney'

const kidney = () => {
    return ( 
        <Container fluid="xxl" className="mx-3 mt-3">
        <Row>
          <Col xs={12} md={7}>
  
            <FormKidney />
  
            <div>
              <HistoricKidney />
            </div>
  
          </Col>
  
          <Col xs={12} md={5}>
            <ResultKidney />
          </Col>
  
        </Row>
  
      </Container>
     );
}
 
export default kidney;