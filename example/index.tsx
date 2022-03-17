import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductCard, ProductTitle, ProductImage } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug - Card!',
  //img: './coffee-mug.png'
}


const App = () => {
  return (
    <>
      <ProductCard
        initialValues={{ count: 4, maxCount: 10 }}
        product={product}>

        {
          ({ count, reset, increaseBy, isMaxCountReached }) => (
            <>
              <ProductCard.Image />
              <ProductCard.Title title={product.title} />
              <ProductCard.Buttons />
            </>
          )
        }

      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
