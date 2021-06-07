import {ADD_RESULT_HYPER, ADD_DATA_HYPER} from '../types';

import clientAxios from '../config/axios';

export function getClassifyResult (BP) {
  return async dispatch => {
    try {
      const result = await clientAxios.post ('/hypertension', BP);
      dispatch (addResult (result.data));
    } catch (error) {
      console.log (error.response);
    }
  };
}

export function addDataHistoric (data) {
  return dispatch => {
    dispatch (addData (data));
  };
}

const addResult = result => ({
  type: ADD_RESULT_HYPER,
  payload: result,
});

const addData = data => ({
  type: ADD_DATA_HYPER,
  payload: data,
});
