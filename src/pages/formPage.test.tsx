import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';
import FormPage from './FormPage';
import { Wrapper } from '../tests/Global.test';

describe('Form Page  ', () => {
  it('renders FormPage component', () => {
    render(
      <Wrapper>
        <FormPage />
      </Wrapper>
    );
    expect(screen.getAllByRole('checkbox').length).toBe(2);
    expect(screen.getAllByRole('radio').length).toBe(2);
    expect(screen.getAllByRole('option').length).toBe(5);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('click checkbox', async () => {
    render(
      <Wrapper>
        <FormPage />
      </Wrapper>
    );

    const checkboxAgreeData = screen.getByRole('checkbox', {
      name: 'I consent to my personal data',
    });
    const checkboxAgreePolicy = screen.getByRole('checkbox', {
      name: 'I read the privacy policy',
    });
    expect(checkboxAgreeData).not.toBeChecked();
    expect(checkboxAgreePolicy).toBeChecked();
    await userEvent.click(checkboxAgreeData);
    expect(checkboxAgreeData).toBeChecked();
    expect(checkboxAgreePolicy).toBeChecked();
  });

  it('fill out the form and generate a one card', async () => {
    render(
      <Wrapper>
        <FormPage />
      </Wrapper>
    );

    const nameInput = screen.getByRole('textbox', {
      name: 'FirstName:',
    });
    const birthdayInput = screen.getByLabelText(/Birthday/i) as HTMLInputElement;

    const checkboxAgreeData = screen.getByRole('checkbox', {
      name: 'I consent to my personal data',
    });

    const buttonSubmit = screen.getByRole('button');
    const nameArray = ['Roma', 'Lena', 'Gena', 'Svetlana', 'Alex'];

    for await (const name of nameArray) {
      await userEvent.type(nameInput, name);
      fireEvent.change(birthdayInput, { target: { value: '1990-01-01' } });
      userEvent.click(checkboxAgreeData);
      userEvent.click(buttonSubmit);
    }

    await waitFor(() => {
      expect(screen.getAllByTestId(/card/i).length).toBe(nameArray.length);
    });
  });
});
