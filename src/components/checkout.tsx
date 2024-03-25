import { X } from "lucide-react";
import { CheckoutButton, CheckoutContainer, CheckoutDetails, CheckoutFooter, CheckoutProduct, CheckoutProductDetails, CheckoutProductImage, CheckoutSummary, CloseCheckout, RemoveItemButton } from "../styles/components/checkout";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/cart-context";
import axios from "axios";
import Image from "next/image";

interface CheckoutProps {
    openModal: boolean
}

export function Checkout({ openModal }: CheckoutProps) {
    const { cart, removeItem, handleOpenModal } = useContext(CartContext)
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    const totalPriceItems = cart.reduce((total, item) => {
        let priceItem = item.price
        const price = priceItem.replace(/[^0-9,]*/g, '').replace(',', '.');
        return (total += Number(price) * item.quantity)
    }, 0)

    async function handleCompleteCheckout() {
        try {
            setIsCreatingCheckoutSession(true)
            const response = await axios.post('/api/checkout', {
                cartItems: cart,
            })
    
            const { checkoutUrl } = response.data
    
            window.location.href = checkoutUrl
        } catch (err) {
            setIsCreatingCheckoutSession(false)
            alert('Falha ao redirecionar ao checkout!')
        }
    }

    async function handleRemoveItem(productId: string) {
        removeItem(productId)
    }

    return (
        <CheckoutContainer active={openModal}>
            {/* checkout details */}
            <CheckoutDetails>
                <CloseCheckout onClick={handleOpenModal}>
                    <X />
                </CloseCheckout>
                <h1>Sacola de compras</h1>

                {cart.map((product) => {
                    return (
                        <CheckoutProduct key={product.id}>
                            <CheckoutProductImage>
                                <Image src={product.imageUrl} alt="" width={100} height={94} />
                            </CheckoutProductImage>
                            <CheckoutProductDetails>
                                <span>
                                    {product.name}
                                </span>
                                <p>{product.price}</p>
        
                                <RemoveItemButton onClick={() => handleRemoveItem(product.id)}>
                                    Remover
                                </RemoveItemButton>
                            </CheckoutProductDetails>
                        </CheckoutProduct>
                    )
                })}
            </CheckoutDetails>

            {/* footer */}
            <CheckoutFooter>
                <CheckoutSummary>
                    <div>
                        <span>Quantidade</span>
                        <strong>Valor total</strong>
                    </div>
                    <div>
                        <span>{cart.length} itens</span>
                        <p>
                        {new Intl.NumberFormat('pt-br', {
                        currency: 'BRL',
                        style: 'currency',
                        }).format(totalPriceItems)}
                        </p>
                    </div>
                </CheckoutSummary>

                <CheckoutButton onClick={handleCompleteCheckout}>Finalizar compra</CheckoutButton>
            </CheckoutFooter>
        </CheckoutContainer>
    )
}