import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('runs all tests', () => {
  it('checks if email input exists', () => {
    render(<App />);
    const inputElement = screen.getByLabelText('Email');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveProperty('type', 'email');
  });
  
  it('checks if two buttons exists', () => {
    render(<App />);
    const btns = screen.getAllByRole('button');
    expect(btns).toHaveLength(2);
  });

  it('checks if submit button exists', () => {
    render(<App />);
    const sendBtn = screen.getByTestId('id-send');
    expect(sendBtn).toBeInTheDocument();
    expect(sendBtn).toHaveProperty('type', 'button');
    expect(sendBtn).toHaveValue('Send');
  });

  it('checks if return button exists', () => {
    render(<App />);
    const returnBtn = screen.getByTestId('id-back');
    expect(returnBtn).toBeInTheDocument();
    expect(returnBtn).toHaveProperty('type', 'button');
    expect(returnBtn).toHaveValue('Return');
  });

  it('checks if typed email is rendered', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    const sendBtn = screen.getByTestId('id-send');
    const renderedEmail = screen.getByTestId('id-email-user')

    const USER_EMAIL = 'ghss@test.com';

    userEvent.type(inputEmail, USER_EMAIL);
    userEvent.click(sendBtn);

    expect(inputEmail).toHaveValue('');
    expect(renderedEmail).toHaveTextContent(USER_EMAIL);
  })
})
