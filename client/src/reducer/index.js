import {combineReducers} from 'redux';
import hypertensionReducer from './hypertensionReducer';
import kidneyReducer from './kidneyReducer';

export default combineReducers ({
  hypertension: hypertensionReducer,
  kidney: kidneyReducer,
});
