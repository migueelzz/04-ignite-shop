import { ReactNode, createContext, useEffect, useState } from "react";

interface Item {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
  defaultPriceId: string
  quantity: number
}

interface CartContextType {
    cart: Item[]
    addItem: (item: Item) => void
    removeItem: (itemId: Item['id']) => void
    isOpenModal: boolean
    handleOpenModal: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
    children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cart, setCart] = useState<Item[]>([])

    const [isOpenModal, setIsOpenModal] = useState(false)

    function handleOpenModal() {
        setIsOpenModal(!isOpenModal)
    }

    function addItem(item: Item) {
      const itemInCart = cart.find(cartItem => cartItem.id === item.id)
      if (!itemInCart) {
        setCart([...cart, item])
      } else {
        setCart(cart.map(cartItem => 
          cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        ))
      }
    }
    
    function removeItem(itemId: Item['id']) {
      const cartItensWithoutOne = cart.filter((cartItem) => {
        return cartItem.id !== itemId
      })
      setCart(cartItensWithoutOne)
    }
    
      useEffect(() => {
        console.log(cart)
      }, [cart])
    

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            isOpenModal,
            handleOpenModal
        }}>
            {children}
        </CartContext.Provider>
    )
}