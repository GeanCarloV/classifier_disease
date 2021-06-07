// import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {Provider} from 'react-redux'
import userEvent from '@testing-library/user-event'
import Hypertension from '../components/hypertension/Hypertension'
import store from '../store';

test('redux component functionality on <Hypertension />', () => {
    render(
    <Provider store={store}>
              <Hypertension />
         </Provider>
     );
   
    
});