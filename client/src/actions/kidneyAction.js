import {ADD_RESULT, ADD_DATA} from '../types';

import clientAxios from '../config/axios';

export function getClassifyResult (body) {
  return async dispatch => {
    try {
      const result = await clientAxios.post ('/kidney', body);
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
  type: ADD_RESULT,
  payload: result,
});

const addData = data => ({
  type: ADD_DATA,
  payload: data,
});
