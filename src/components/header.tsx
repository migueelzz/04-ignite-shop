import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import Logo from '../assets/logo.svg'
import { Button, HeaderContainer } from "../styles/components/header";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/cart-context";
import Link from "next/link";
import { Checkout } from "./checkout";

export function Header() {
    const { cart, isOpenModal, handleOpenModal } = useContext(CartContext)

    return (
        <HeaderContainer>
            <Link href="/">
                <Image src={Logo} alt="" />
            </Link>

            <Button onClick={handleOpenModal}>
                {cart.length > 0 && <span>{cart.length}</span>}
                <ShoppingBag />
            </Button>

            <Checkout openModal={isOpenModal} />
        </HeaderContainer>
    )
}