import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../components/App/App';
import Page404 from '../pages/Page404';
import AboutUsPage from '../pages/AboutUsPage';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Search from '../components/Search/Search';
import Header from '../components/Header/Header';
import userEvent from '@testing-library/user-event';
import HomePage from '../pages/HomePage';
import { server } from '../mocks/server';
import { rest } from 'msw';
import characterService from '../services/theOneApiService';

describe('App ', () => {
  it('renders App component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByRole('main')).toBeInTheDocument();
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

    expect(screen.getByPlaceholderText('Enter name or race')).toBeInTheDocument();
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
describe('Card character', () => {
  it('render modal card character', async () => {
    const { container } = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    await userEvent.click(await screen.findByText(/Adanel/i));
    const modal = container.getElementsByClassName('modal active');
    const modalBody = container.getElementsByClassName('modal__body');
    const closeIcon = container.getElementsByClassName('close-icon');

    expect(modal.length).toBe(1);
    expect(modalBody.length).toBe(1);
    expect(closeIcon.length).toBe(1);
  });
  it('close modal by icon', async () => {
    const { container } = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    await userEvent.click(await screen.findByText(/Adanel/i));
    const closeIcon = screen.getByAltText(/close icon/i);
    const modal = container.getElementsByClassName('modal active');

    expect(modal.length).toBe(1);
    await userEvent.click(closeIcon);
    expect(modal.length).toBe(0);
  });

  it('Click card character and display detail popup  ', async () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    await userEvent.click(await screen.findByText(/Aegnor/i));

    expect(screen.getByText(/Hair:/i)).toBeInTheDocument();
    expect(screen.getByText(/Height:/i)).toBeInTheDocument();
    expect(screen.getByText(/Realm:/i)).toBeInTheDocument();
    expect(screen.getByText(/Spouse/i)).toBeInTheDocument();
    expect(screen.getByText(/Birth/i)).toBeInTheDocument();
    expect(screen.getByText(/Death/i)).toBeInTheDocument();
    expect(screen.getByText('http://lotr.wikia.com//wiki/Aegnor')).toBeInTheDocument();

    // expect((await findAllByAltText(/hero image/i)).length).toBe(1);
  });
});
describe('Home Page  ', () => {
  it('fetch and display card character', async () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(await screen.findByText(/Adanel/i)).toBeInTheDocument();
    expect(await screen.findByText(/Adrahil I/i)).toBeInTheDocument();
    expect(await screen.findByText(/Aegnor/i)).toBeInTheDocument();
    expect((await screen.findAllByAltText(/hero image/i)).length).toBe(3);
    expect((await screen.findAllByText(/race/i)).length).toBe(3);
    expect((await screen.findAllByText(/gender/i)).length).toBe(3);
  });
  it('search and display by hero name', async () => {
    const { findByText, findAllByAltText } = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/Enter name or race/i), {
      target: { value: 'Adanel' },
    });

    await userEvent.click(screen.getByRole('button'));

    expect(await findByText(/Adanel/i)).toBeInTheDocument();

    expect((await findAllByAltText(/hero image/i)).length).toBe(1);
  });
  //TODO
  it('render message  error api ', async () => {});
});
