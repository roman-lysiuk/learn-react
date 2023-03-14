import { Product } from 'interfaces';
import React from 'react';
import ProductCard from './ProductCard';
class ProductList extends React.Component<{ items: Product[] }, {}> {
  listProducts: JSX.Element[];
  constructor(props: { items: Product[] }) {
    super(props);
    this.listProducts = this.props.items.map((product: Product) => {
      return (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          discountPercentage={product.discountPercentage}
          rating={product.rating}
          stock={product.stock}
          brand={product.brand}
          category={product.category}
          thumbnail={product.thumbnail}
          images={product.images}
        />
      );
    });
  }

  render() {
    return <div className="product-list">{this.listProducts}</div>;
  }
}
export default ProductList;
