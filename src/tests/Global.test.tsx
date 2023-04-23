import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../components/RenderApp/RenderApp';
import Page404 from '../pages/Page404';
import AboutUsPage from '../pages/AboutUsPage';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Search from '../components/Search/Search';
import Header from '../components/Header/Header';
import userEvent from '@testing-library/user-event';
import HomePage from '../pages/HomePage';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';
import { server } from '../mocks/server';
import characterService from '../API/characterService';
import { rest } from 'msw';
const store = setupStore();

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

describe('Header ', () => {
  it('renders Header title path /', () => {
    render(
      <Wrapper>
        <Header isSearch={true} />
      </Wrapper>
    );

    expect(screen.getByRole('heading', { name: 'Home' })).toBeInTheDocument();
  });

  it('renders Header title path /about', async () => {
    render(
      <Wrapper>
        <App />
      </Wrapper>
    );
    const buttonAbout = screen.getByText(/About us/i);
    await userEvent.click(buttonAbout);

    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument();
  });

  it('renders Header title mistake path', () => {
    const badRoute = '/error';

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[badRoute]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByRole('heading', { name: 'Error' })).toBeInTheDocument();
  });
});

describe('Search ', () => {
  it('renders Search component', () => {
    render(
      <Wrapper>
        <Search />
      </Wrapper>
    );

    expect(screen.getByPlaceholderText('Enter name')).toBeInTheDocument();
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
      <Wrapper>
        <Page404 />
      </Wrapper>
    );

    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/Error/i)).toBeInTheDocument();
  });
});

describe('AboutUsPage  ', () => {
  it('renders AboutUs component', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <AboutUsPage />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Go to home?')).toBeInTheDocument();
  });
});
describe('Card character', () => {
  it('render modal card character', async () => {
    const { container } = render(
      <Wrapper>
        <HomePage />
      </Wrapper>
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
      <Wrapper>
        <HomePage />
      </Wrapper>
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
      <Wrapper>
        <HomePage />
      </Wrapper>
    );
    await userEvent.click(await screen.findByText(/Aegnor/i));
    const closeIcon = screen.getByAltText(/close icon/i);
    expect(screen.getByText(/Hair:/i)).toBeInTheDocument();
    expect(screen.getByText(/Height:/i)).toBeInTheDocument();
    expect(screen.getByText(/Realm:/i)).toBeInTheDocument();
    expect(screen.getByText(/Spouse/i)).toBeInTheDocument();
    expect(screen.getByText(/Birth/i)).toBeInTheDocument();
    expect(screen.getByText(/Death/i)).toBeInTheDocument();
    expect(screen.getByText('http://lotr.wikia.com//wiki/Aegnor')).toBeInTheDocument();
    await userEvent.click(closeIcon);
  });
});

describe('Home Page  ', () => {
  it('fetch and display card character', async () => {
    render(
      <Wrapper>
        <HomePage />
      </Wrapper>
    );
    expect(await screen.findByText(/Adanel/i)).toBeInTheDocument();
    expect(await screen.findByText(/Adrahil I/i)).toBeInTheDocument();
    expect(await screen.findByText(/Aegnor/i)).toBeInTheDocument();
    expect((await screen.findAllByAltText(/hero image/i)).length).toBe(3);
    expect((await screen.findAllByText(/race/i)).length).toBe(3);
    expect((await screen.findAllByText(/gender/i)).length).toBe(3);
  });
  it('search and display by hero name', async () => {
    server.use(
      rest.get(`${characterService.url}/character/`, (req, res, ctx) => {
        if (req.url.searchParams.get('name')) {
          return res(
            ctx.status(200),
            ctx.json({
              docs: [
                {
                  _id: '5cd99d4bde30eff6ebccfbbe',
                  height: '',
                  race: 'Human',
                  gender: 'Female',
                  birth: '',
                  spouse: 'Belemir',
                  death: '',
                  realm: '',
                  hair: '',
                  name: 'Adanel',
                  wikiUrl: 'http://lotr.wikia.com//wiki/Adanel',
                },
              ],
              total: 1,
              limit: 1000,
              offset: 0,
              page: 1,
              pages: 1,
            })
          );
        }
      })
    );
    render(
      <Wrapper>
        <HomePage />
      </Wrapper>
    );

    fireEvent.change(screen.getByPlaceholderText(/Enter name/i), {
      target: { value: 'Adanel' },
    });
    await userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText('Adanel')).toBeInTheDocument();
      expect(screen.getAllByAltText(/hero image/i).length).toBe(1);
    });
  });
});
