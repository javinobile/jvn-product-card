```          
<ProductCard className='bg-dark text-white'
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

```