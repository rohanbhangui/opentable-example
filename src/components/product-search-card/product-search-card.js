import React from 'react';
import { Link } from 'react-router-dom';

import './product-search-card.scss';

// import { VariantSelector } from '../variant-selector/variant-selector';
// import { SizeSelector } from '../size-selector/size-selector';
// import AddToCart from '../add-to-cart/add-to-cart';

// let controller;
// let signal;

export class ProductCard extends React.Component {
	constructor(props) {
    super(props);
// 
//     this.state = {
//       selectedVariantId: '00001',
//       selectedSize: '',
//       sizeRequiredError: false,
//       inventoryCounts: {
//         s: 0,
//         m: 0,
//         l: 0,
//         xl: 0,
//         xxl: 0
//       },
//       catalogObjs: []
//     }
// 
//     this.selectedVariantHandler = this.selectedVariantHandler.bind(this);
//     this.selectedSizeHandler = this.selectedSizeHandler.bind(this);
//     this.sizeRequiredHandler = this.sizeRequiredHandler.bind(this);
//     this.retrieveInventory = this.retrieveInventory.bind(this);
  }


  render() {

    return (
      <div className="ProductCard">
        {/* <Link to={{ */}
        {/*   pathname: `/product-details/${product.name.toLowerCase().replace(" ", "-")}-${product.productId}`, */}
        {/*   state: { */}
        {/*     product */}
        {/*   } */}
        {/* }}> */}
        {/*   <img src={ product.variants && selectedVariantInfo.image} alt={`${product.name}-${selectedVariantInfo.color.string}`} /> */}
        {/*   <div id="product-info"> */}
        {/*     <h5>{product.name} &mdash; { product.variants && selectedVariantInfo.color.string } { selectedSize ? `(${selectedSize})` : `` }</h5> */}
        {/*     <h5>{ selectedSize ? `$${selectedVariantInfo.price}` : ' — ' }</h5> */}
        {/*   </div> */}
        {/* </Link> */}
      </div>
    )
  }
}

