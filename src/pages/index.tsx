import Image from "next/image"

import Head from "next/head"

import { useKeenSlider } from 'keen-slider/react'

import { HomeContainer, Product, ProductFooter } from "../styles/pages/home"

import 'keen-slider/keen-slider.min.css'
import { stripe } from "../lib/stripe"
import { GetStaticProps } from "next"
import Stripe from "stripe"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { useContext } from "react"
import { CartContext } from "../contexts/cart-context"

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}


export default function Home({ products }: HomeProps) {
  const { addItem } = useContext(CartContext)

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

  async function handleAddItemToCart(product: any) {
    addItem({ 
      ...product, 
      quantity: 1 
    })
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head> 
      
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <>
              <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
                <Product
                  className="keen-slider__slide"
                >
                  <Image src={product.imageUrl} alt="" width={520} height={480} />
          
                  <ProductFooter>
                    <div>
                      <strong>{product.name}</strong>
                      <span>{product.price}</span>
                    </div>

                    <button onClick={() => handleAddItemToCart(product)}>
                      <ShoppingBag />
                    </button>
                  </ProductFooter>
                </Product>
              </Link>
            </>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      description: product.description,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    }, 
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
