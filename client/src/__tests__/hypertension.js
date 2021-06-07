import React from 'react';
import Hypertension from '../components/hypertension/Hypertension';
import store from '../store';
import {render, screen, fireEvent} from '@testing-library/react';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

test ('check the form <Hypertension />', () => {
  render (
    <Provider store={store}>
      <Hypertension />
    </Provider>
  );

  userEvent.type (screen.getByTestId ('SysBP'), '190');
  userEvent.type (screen.getByTestId ('DiaBP'), '120');
  userEvent.type (screen.getByTestId ('atDateHypertension'), '2021-07-07');
  fireEvent.click (screen.getByTestId ('btn-Submit'));
  expect (
    screen.queryByTestId ('historic-hypertension').not.toBeInTheDocument ()
  );
  expect (screen.queryByTestId ('result-hypertension').toBeInTheDocument ());

  userEvent.type (screen.getByTestId ('SysBP'), '120');
  userEvent.type (screen.getByTestId ('DiaBP'), '90');
  userEvent.type (screen.getByTestId ('atDateHypertension'), '2021-07-07');
  fireEvent.click (screen.getByTestId ('btn-add'));
  expect (screen.queryByTestId ('historic-hypertension').toBeInTheDocument ());
  expect (
    screen.queryByTestId ('result-hypertension').not.toBeInTheDocument ()
  );
});
