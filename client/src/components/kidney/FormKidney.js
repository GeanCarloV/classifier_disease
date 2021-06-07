import React, { useState } from 'react';
import {Form, Col, Row, Button, InputGroup} from 'react-bootstrap';
import formatDate from '../../service/formDate'
import { useDispatch, useSelector } from 'react-redux';

import { getClassifyResult, addDataHistoric } from '../../actions/kidneyAction'

const FormHypertension = () => {
    
    const history = useSelector (state => state.kidney.data);
    const historyLength = useSelector (state => state.kidney.data.length);
    
    const dispatch = useDispatch();

    const [ data, setData ] = useState({
        eGFR:  '', 
        atDate: ''
    })

    const [required, changeRequired] = useState(true)
    
    const onChangeData = e => { 
        setData({ 
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const {eGFR, atDate} = data;
    
    const addData = () => {
      if(eGFR === '' || atDate === '') {
        return changeRequired(true)
      }
      
      dispatch(addDataHistoric(data))
      
      setData({
          eGFR:  '',
          atDate: ''
      }); 
      
      changeRequired(false)

    }

    const onSubmitData = (e) => {
        e.preventDefault()        
        
        if(historyLength){
          setData({
            eGFR:  '', 
            atDate: ''
          })
          return dispatch(getClassifyResult({"dataKidney": history}))
        }

        let dataFormat =  formatDate([data])

        setData({
            eGFR:  '', 
            atDate: ''
        })

        const body= {"dataKidney": dataFormat};
        
        dispatch(getClassifyResult(body))
    }
    
    return ( 
        <Form 
            validated={true}
            onSubmit={onSubmitData} 
            >
           
            <Row className="mb-3">
                    
              <Form.Group as={Col} >
                <Form.Label>eGFR</Form.Label>
                <InputGroup hasValidation>
                    <Form.Control
                        type="text"
                        required={required}
                        pattern="[\-\+]?[0-9]*(\.[0-9]+)?"
                        name="eGFR"
                        value = {eGFR}
                        onChange={onChangeData}
                    />
                    
                    <Form.Control.Feedback type="invalid" >
                        Only accept numbers
                    </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} >
                <Form.Label>atDate</Form.Label>
                <InputGroup hasValidation>
                    <Form.Control
                        type="date"
                        required={required}
                        name="atDate"
                        value = {atDate}
                        onChange={onChangeData}
                    />
                    <Form.Control.Feedback type="invalid" >
                        Please just put numbers
                    </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
           
            </Row>
            
            <Button 
              variant="primary" 
              type="button"
              onClick={addData}
            > Add + </Button>
            
            <Button  
              className="mx-3" 
              variant="primary" 
              type="submit"
            > Calculate </Button>
          
          </Form>
     );
}
 
export default FormHypertension;
