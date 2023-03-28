import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import FormPage from './FormPage';

describe('Form Page  ', () => {
  it('renders FormPage component', () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
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
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );

    const checkboxAgreeData = screen.getByRole('checkbox', {
      name: 'I consent to my personal data',
    });
    const checkboxAgreePolicy = screen.getByRole('checkbox', {
      name: 'I have read the privacy policy',
    });
    expect(checkboxAgreeData).not.toBeChecked();
    expect(checkboxAgreePolicy).not.toBeChecked();
    await userEvent.click(checkboxAgreeData);
    expect(checkboxAgreeData).toBeChecked();
    expect(checkboxAgreePolicy).not.toBeChecked();
    await userEvent.click(checkboxAgreePolicy);
    expect(checkboxAgreePolicy).toBeChecked();
    expect(checkboxAgreeData).toBeChecked();
  });

  it('fill out the form and generate a five card', async () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );

    const nameInput = screen.getByRole('textbox', {
      name: 'Name',
    });
    const birthdayInput = screen.getByLabelText('Birthday') as HTMLInputElement;
    const checkboxAgreeData = screen.getByRole('checkbox', {
      name: 'I consent to my personal data',
    });
    const checkboxAgreePolicy = screen.getByRole('checkbox', {
      name: 'I have read the privacy policy',
    });
    const buttonSubmit = screen.getByRole('button');
    const nameArray = ['Roma', 'Lena', 'Gena', 'Svetlana', 'Alex'];

    for (const name of nameArray) {
      await userEvent.type(nameInput, name);
      await userEvent.type(birthdayInput, '2022-01-01');
      await userEvent.click(checkboxAgreeData);
      await userEvent.click(checkboxAgreePolicy);
      await userEvent.click(buttonSubmit);
      await userEvent.click(buttonSubmit);
    }
    await waitFor(() => {
      expect(screen.getAllByTestId(/card/i).length).toBe(nameArray.length);
    });
  });
});
