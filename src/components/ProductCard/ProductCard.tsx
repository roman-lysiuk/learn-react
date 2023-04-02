import React from 'react';
import { Product } from '../../interfaces';

function ProductCard(item: Product) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={item.thumbnail} alt={item.description} />
      </div>
      <div className="card__title">{item.title}</div>
      <div className="card__description">{item.description}</div>
      <div className="card__price">Price: {item.price} $</div>
      <div className="card__info">
        <div className="card__rating">Rating: {item.rating} ⭐</div>
        <div className="card__stock">In stock: {item.stock}</div>
      </div>
    </div>
  );
}

export default ProductCard;
