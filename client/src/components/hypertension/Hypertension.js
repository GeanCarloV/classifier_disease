import React from 'react';
import {Col, Row,  Container} from 'react-bootstrap';
import FormHypertension from './FormHypertension'
import ResultHypertension from './ResultHypertension';
import HistoricHypertension from './HistoricHypertension';

const Hypertension = () => {  
  return (
    <Container fluid="xxl" className="mx-3 mt-3" data-testid="Hypertension">
      <Row>
        <Col xs={12} md={7}>

          <FormHypertension />

          <div>
              <HistoricHypertension />
          </div>
        </Col>

        <Col xs={12} md={5}>
          <ResultHypertension />
        </Col>

      </Row>

    </Container>
  );
};

export default Hypertension;
