import { Product } from 'interfaces';
import React, { useEffect, useMemo, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { products } from '../../Data/data.json';
function ProductList() {
  const listProducts = products.map((product: Product) => {
    return <ProductCard {...product} key={product.id} />;
  });

  return <div className="product-list">{listProducts}</div>;
}
export default ProductList;
