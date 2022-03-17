import React from 'react';
import renderer from 'react-test-renderer'
import { ProductCard } from "../../src/components/ProductCard";
import { product, product2 } from "../data/products";
import { ProductImage } from '../../src/components/ProductImage';

describe('ProductImage', () => {
    test('Debe de mostrar el componente sin imagen', () => {

        const wrapper = renderer.create(
            <ProductImage img='http://hola.jpg'  />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

    test('Debe de mostrar el componente con imagen', () => {
        const wrapper = renderer.create(
            <ProductCard product={product}>
                {
                    () => (
                        <ProductImage img={product2.img}  />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});