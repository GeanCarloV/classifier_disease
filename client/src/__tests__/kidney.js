import React from 'react';
import Kidney from '../components/kidney/kidney';
import store from '../store';
import {render, screen, fireEvent} from '@testing-library/react';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

test ('check the form <Kidney />', () => {
  render (
    <Provider store={store}>
      <Kidney />
    </Provider>
  );

  userEvent.type (screen.getByTestId ('eGFR'), '90');
  userEvent.type (screen.getByTestId ('atDateKidney'), '2021-07-07');
  fireEvent.click (screen.getByTestId ('btn-Submit'));
  expect (screen.queryByTestId ('historic-kidney').not.toBeInTheDocument ());
  expect (screen.queryByTestId ('result-kidney').toBeInTheDocument ());

  userEvent.type (screen.getByTestId ('eGFR'), '20');
  userEvent.type (screen.getByTestId ('atDateKidney'), '2021-07-07');
  fireEvent.click (screen.getByTestId ('btn-add'));
  expect (screen.queryByTestId ('historic-kidney').toBeInTheDocument ());
  expect (screen.queryByTestId ('result-kidney').not.toBeInTheDocument ());
});
