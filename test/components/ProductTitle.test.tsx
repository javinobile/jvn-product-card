import React from "react";
import renderer from 'react-test-renderer'
import { ProductCard } from "../../src/components/ProductCard";
import { ProductTitle } from '../../src/components/ProductTitle';
import { product2 } from '../data/products';

describe('ProductTitle', () => {
    test('Debe de mostrar el componente con titulo personalizado', () => {

        const wrapper = renderer.create(
            <ProductTitle title='Custom Product' />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

    test('Debe de mostrar el componente con titulo del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductTitle title={product2.title} />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});