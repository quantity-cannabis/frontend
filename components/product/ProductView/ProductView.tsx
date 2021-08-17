import cn from 'classnames'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import s from './ProductView.module.css'
import { FC } from 'react'
import type { Product } from '@commerce/types/product'
import usePrice from '@framework/product/use-price'
import { WishlistButton } from '@components/wishlist'
import { ProductSlider, ProductFAQs } from '@components/product'
import { Container, Wrapper, Text, Collapse } from '@components/ui'
import ProductSidebar from '../ProductSidebar'
interface ProductViewProps {
  product: Product
  relatedProducts: Product[]
}

const ProductView: FC<ProductViewProps> = ({ product, relatedProducts }) => {
  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })

  return (
    <>
      <Container className="max-w-none w-full" clean>
        <div className={cn(s.root, 'fit')}>
          <div className={cn(s.main, 'fit')}>
            <div className={s.sliderContainer}>
              <ProductSlider key={product.id}>
                {product.images.map((image, i) => (
                  <div key={image.url} className={s.imageContainer}>
                    <Image
                      className={s.img}
                      src={image.url!}
                      alt={image.alt || 'Product Image'}
                      width={600}
                      height={600}
                      priority={i === 0}
                      quality="85"
                    />
                  </div>
                ))}
              </ProductSlider>
            </div>
            {process.env.COMMERCE_WISHLIST_ENABLED && (
              <WishlistButton
                className={s.wishlistButton}
                productId={product.id}
                variant={product.variants[0]}
              />
            )}
          </div>

          <ProductSidebar product={product} className={s.sidebar} />
        </div>

        <Wrapper>
          <ProductFAQs>
            <Text variant="sectionHeading">FAQs</Text>
            <Collapse title="Lorem ipsum dolor sit amet?">
              Consectetur adipiscing elit. Nullam tincidunt ultrices
              ullamcorper. Morbi iaculis purus et neque blandit porta. Cras id
              euismod est. Aenean at quam volutpat, euismod lorem ac, aliquet
              leo. Cras ut viverra tellus. Donec commodo velit vel tellus rutrum
              convallis. Nunc dapibus nisi quis purus condimentum mollis.
            </Collapse>
            <Collapse title="Donec commodo velit vel rutrum convalli?">
              Lorem ipsum dolor sit amet. Nullam tincidunt ultrices ullamcorper.
              Morbi iaculis purus et neque blandit porta. Cras id euismod est.
              Aenean at quam volutpat, euismod lorem ac, aliquet leo. Cras ut
              viverra tellus. Donec commodo velit vel tellus rutrum convallis.
              Nunc dapibus nisi quis purus condimentum mollis.
            </Collapse>
            <Collapse title="Consectetur adip iscing elit ultrices?">
              Lorem ipsum dolor sit amet. Nullam tincidunt ultrices ullamcorper.
              Morbi iaculis purus et neque blandit porta. Cras id euismod est.
              Aenean at quam volutpat, euismod lorem ac, aliquet leo. Cras ut
              viverra tellus. Donec commodo velit vel tellus rutrum convallis.
              Nunc dapibus nisi quis purus condimentum mollis.
            </Collapse>
            <Collapse title="Cras ut viverra tellus. Donec commodo?">
              Consectetur adipiscing elit. Nullam tincidunt ultrices
              ullamcorper. Morbi iaculis purus et neque blandit porta. Cras id
              euismod est. Aenean at quam volutpat, euismod lorem ac, aliquet
              leo. Cras ut viverra tellus. Donec commodo velit vel tellus rutrum
              convallis. Nunc dapibus nisi quis purus condimentum mollis.
            </Collapse>
          </ProductFAQs>
        </Wrapper>
      </Container>
      <NextSeo
        title={product.name}
        description={product.description}
        openGraph={{
          type: 'website',
          title: product.name,
          description: product.description,
          images: [
            {
              url: product.images[0]?.url!,
              width: 800,
              height: 600,
              alt: product.name,
            },
          ],
        }}
      />
    </>
  )
}

export default ProductView
