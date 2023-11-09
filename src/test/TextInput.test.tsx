import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for better assertion messages
import TextInput from '../components/TextInput'; // assuming your component is in the same directory

describe('TextInput Component', () => {
  test('renders without errors', () => {
    const handleOnChange = jest.fn();
    const { getByLabelText, getByPlaceholderText } = render(
      <TextInput
        type="text"
        label="Username"
        value=""
        name="username"
        placeholder="Enter your username"
        error={false}
        onChange={handleOnChange}
        icon={<div>Icon</div>}
        iconRight={<div>Icon Right</div>}
      />
    );

    const inputElement = getByLabelText('Username') as HTMLInputElement;
    const placeholderElement = getByPlaceholderText('Enter your username');
    expect(inputElement).toBeInTheDocument();
    expect(placeholderElement).toBeInTheDocument();
  });

  test('handles onChange event', () => {
    const handleOnChange = jest.fn();
    const { getByLabelText } = render(
      <TextInput
        type="text"
        label="Username"
        value=""
        name="username"
        placeholder="Enter your username"
        error={false}
        onChange={handleOnChange}
        icon={<div>Icon</div>}
        iconRight={<div>Icon Right</div>}
      />
    );

    const inputElement = getByLabelText('Username') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'newUsername' } });

    expect(handleOnChange).toHaveBeenCalledTimes(1);
    expect(handleOnChange).toHaveBeenCalledWith(expect.objectContaining({ target: { value: 'newUsername' } }));
  });

});