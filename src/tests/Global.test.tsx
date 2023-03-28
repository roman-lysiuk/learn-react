import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../components/App/App';
import Page404 from '../pages/Page404';
import AboutUsPage from '../pages/AboutUsPage';
import { BrowserRouter, MemoryRouter, Router } from 'react-router-dom';
import Search from '../components/Search/Search';
import Header from '../components/Header/Header';
import userEvent from '@testing-library/user-event';

describe('App ', () => {
  it('renders App component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });
});

describe('Header ', () => {
  it('renders Header title path /', () => {
    render(
      <BrowserRouter>
        <Header isSearch={true} />
      </BrowserRouter>
    );

    expect(screen.getByRole('heading', { name: 'Home' })).toBeInTheDocument();
  });

  it('renders Header title path /about', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const buttonAbout = screen.getByText(/About us/i);
    await userEvent.click(buttonAbout);

    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument();
  });

  it('renders Header title mistake path', () => {
    const badRoute = '/error';

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: 'Error' })).toBeInTheDocument();
  });
});

describe('Search ', () => {
  it('renders Search component', () => {
    render(<Search />);

    expect(screen.getByPlaceholderText('Start searching')).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.queryByText(/React/)).toBeNull();
    fireEvent.change(screen.getByRole('searchbox'), {
      target: { value: 'React' },
    });
    expect(screen.queryByDisplayValue('React')).toBeInTheDocument();
  });
});

describe('Page404  ', () => {
  it('renders Page404 component', () => {
    render(
      <BrowserRouter>
        <Page404 />
      </BrowserRouter>
    );

    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/Error/i)).toBeInTheDocument();
  });
});

describe('AboutUsPage  ', () => {
  it('renders AboutUs component', () => {
    render(
      <BrowserRouter>
        <AboutUsPage />
      </BrowserRouter>
    );

    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Go to home?')).toBeInTheDocument();
  });
});
