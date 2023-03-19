import React from 'react';
import { Product } from '../interfaces';

class ProductCard extends React.Component<Product> {
  constructor(props: Product) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <div className="card__image">
          <img src={this.props.thumbnail} alt={this.props.description} />
        </div>
        <div className="card__title">{this.props.title}</div>
        <div className="card__description">{this.props.description}</div>
        <div className="card__price">Price: {this.props.price} $</div>
        <div className="card__info">
          <div className="card__rating">Rating: {this.props.rating} ⭐</div>
          <div className="card__stock">In stock: {this.props.stock}</div>
        </div>
      </div>
    );
  }
}
export default ProductCard;
