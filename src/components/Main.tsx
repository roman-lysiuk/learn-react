import React from 'react';
import date from '../data.json';
import ProductList from './ProductList';
class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <ProductList items={date.products} />
      </main>
    );
  }
}
export default Main;
