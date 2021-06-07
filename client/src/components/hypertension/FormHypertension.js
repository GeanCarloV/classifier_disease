import React, {useState} from 'react';
import {Form, Col, Row, Button, InputGroup} from 'react-bootstrap';
import formatDate from '../../service/formDate';
import {useDispatch, useSelector} from 'react-redux';
import {
  getClassifyResult,
  addDataHistoric,
} from '../../actions/hypertensionAction';

const FormHypertension = () => {
  const history = useSelector (state => state.hypertension.data);
  const historyLength = useSelector (state => state.hypertension.data.length);

  const dispatch = useDispatch ();

  const [data, setData] = useState ({
    SysBP: '',
    DiaBP: '',
    atDate: '',
  });

  const [required, changeRequired] = useState (true);

  const onChangeData = e => {
    setData ({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const {SysBP, DiaBP, atDate} = data;

  const addData = () => {
    if (SysBP === '' || DiaBP === '' || atDate === '') {
      return changeRequired (true);
    }

    dispatch (addDataHistoric (data));

    setData ({
      SysBP: '',
      DiaBP: '',
      atDate: '',
    });

    changeRequired (false);
  };

  const onSubmitData = e => {
    e.preventDefault ();
    if (historyLength) {
      setData ({
        SysBP: '',
        DiaBP: '',
        atDate: '',
      });
      return dispatch (getClassifyResult ({BP: history}));
    }

    let dataFormat = formatDate ([data]);
    setData ({
      SysBP: '',
      DiaBP: '',
      atDate: '',
    });
    const body = {BP: dataFormat};
    dispatch (getClassifyResult (body));
  };

  return (
    <Form validated={true} onSubmit={onSubmitData}>
      <Row className="mb-3">

        <Form.Group as={Col}>
          <Form.Label>SysBP</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              data-testid="SysBP"
              required={required}
              pattern="[\-\+]?[0-9]*(\.[0-9]+)?"
              name="SysBP"
              value={SysBP}
              onChange={onChangeData}
            />
            <Form.Control.Feedback type="invalid">
              Only accept numbers
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>DiaBP</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              data-testid="DiaBP"
              required={required}
              pattern="[\-\+]?[0-9]*(\.[0-9]+)?"
              name="DiaBP"
              value={DiaBP}
              onChange={onChangeData}
            />
            <Form.Control.Feedback type="invalid">
              Only accept numbers
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>atDate</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="date"
              data-testid="atDateHypertension"
              required={required}
              name="atDate"
              value={atDate}
              onChange={onChangeData}
            />
            <Form.Control.Feedback type="invalid">
              Please just put numbers
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

      </Row>

      <Button
        variant="primary"
        data-testid="btn-add"
        type="button"
        onClick={addData}
      >
        {' '}Add +{' '}
      </Button>

      <Button
        className="mx-3"
        data-testid="btn-Submit"
        variant="primary"
        type="submit"
      >
        {' '}Calculate{' '}
      </Button>

    </Form>
  );
};

export default FormHypertension;
