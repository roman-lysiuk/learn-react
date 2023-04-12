import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Menu from '../Menu/Menu';
import Search from '../Search/Search';
import { Character } from 'interfaces';
type HeaderProps = {
  isSearch: boolean;
};

function Header(props: HeaderProps) {
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const title = pageTitleFromPath(location.pathname);

    setTitle(title);
  }, [location]);

  function pageTitleFromPath(path: string): string {
    const title = path.replace('/', '');

    if (title === '') return 'Home';

    if (title.match(/page404/i)) return 'Page not found';

    return title[0].toUpperCase() + title.slice(1);
  }

  return (
    <header className="header">
      <h1 className="page-title">{title}</h1>
      <Menu />
      {props.isSearch && <Search />}
    </header>
  );
}

export default Header;
