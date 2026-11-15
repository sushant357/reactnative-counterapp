
import React from 'react';

import {
  render,
  screen,
  userEvent,
} from '@testing-library/react-native';

import App from '../App';

describe('Counter Application Component Tests', () => {
  test('should render the initial counter value as zero', async () => {
    await render(<App />);

    expect(screen.getByTestId('counter-value')).toHaveTextContent('0');
  });

  test('should increment the counter when increment button is pressed', async () => {
    const user = userEvent.setup();

    await render(<App />);

    await user.press(screen.getByTestId('increment-button'));

    expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
  });

  test('should decrement the counter when decrement button is pressed', async () => {
    const user = userEvent.setup();

    await render(<App />);

    await user.press(screen.getByTestId('increment-button'));
    await user.press(screen.getByTestId('increment-button'));
    await user.press(screen.getByTestId('decrement-button'));

    expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
  });

  test('should not decrement below zero', async () => {
    const user = userEvent.setup();

    await render(<App />);

    const decrementButton = screen.getByTestId('decrement-button');

    expect(decrementButton).toBeDisabled();

    await user.press(decrementButton);

    expect(screen.getByTestId('counter-value')).toHaveTextContent('0');
  });

  test('should reset the counter to zero', async () => {
    const user = userEvent.setup();

    await render(<App />);

    await user.press(screen.getByTestId('increment-button'));
    await user.press(screen.getByTestId('increment-button'));
    await user.press(screen.getByTestId('reset-button'));

    expect(screen.getByTestId('counter-value')).toHaveTextContent('0');
  });

  test('should disable reset and decrement buttons when counter is zero', async () => {
    await render(<App />);

    expect(screen.getByTestId('reset-button')).toBeDisabled();
    expect(screen.getByTestId('decrement-button')).toBeDisabled();
  });

  test('should enable reset and decrement buttons after incrementing', async () => {
    const user = userEvent.setup();

    await render(<App />);

    await user.press(screen.getByTestId('increment-button'));

    expect(screen.getByTestId('reset-button')).toBeEnabled();
    expect(screen.getByTestId('decrement-button')).toBeEnabled();
  });
});
