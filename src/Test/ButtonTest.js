import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ButtonComponent from '../Components/ButtonComponent'

describe('ButtonComponent', () => {
  it('renders children and calls onClick when clicked', () => {
    const onClickMock = jest.fn()
    const buttonText = 'Login'

    const { getByText } = render(
      <ButtonComponent onClick={onClickMock}>
        {buttonText}
      </ButtonComponent>
    )

    const buttonElement = getByText(buttonText)
    expect(buttonElement).toBeInTheDocument()

    fireEvent.click(buttonElement)

    expect(onClickMock).toHaveBeenCalled()
  })
})
