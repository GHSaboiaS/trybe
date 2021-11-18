import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers  } from 'redux';
import clickReducer from './reducers';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={ store }>{ component }</Provider>),
    store,
  }
};

describe('testing clicks', () => {
  beforeEach(cleanup);
  it('the page should have a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdd = queryByText('Clique aqui');

    expect(buttonAdd).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  })

  it('initializing state with different number', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(queryByText('5')).toBeInTheDocument();
  });

  it('clicking button adds one to counter', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});
    const buttonAdd = queryByText('Clique aqui');

    expect(queryByText('5')).toBeInTheDocument();
    expect(buttonAdd).toBeInTheDocument();

    userEvent.click(buttonAdd);
    expect(queryByText('6')).toBeInTheDocument();
  })
})
