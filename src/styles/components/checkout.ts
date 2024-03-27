import { styled } from ".."

export const CheckoutContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '24px 48px 48px',
    position: 'fixed',
    top: 0,
    right: 0,
    width: 480,
    height: '100vh',
    zIndex: 100,
    backgroundColor: '$gray800',
    transform: 'translateX(100%)',
    transition: 'transform 0.3s ease-in-out',

    variants: {
        active: {
            true: {
                transform: 'translateX(0%)',
            }
        }
    }
})

export const CheckoutDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '$lg',
        color: '$white',
        padding: '24px 0 32px',
    }
})

const Button = styled('button', {
    border: 0,
    backgroundColor: 'transparent',
})

export const CloseCheckout = styled(Button, {
    border: 0,
    backgroundColor: 'transparent',
    color: '$gray600',
    marginLeft: 'auto',
    cursor: 'pointer',

    '&:hover': {
        color: '$gray300',
    }
})

export const CheckoutProduct = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 20,
    height: 94,
    marginBottom: 24,
})

export const CheckoutProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',

    span: {
        color: '$gray300',
    },

    p: {
        color: '$white',
        fontSize: '$md',
        fontWeight: 'bold',
        marginTop: 8,
    },
})

export const RemoveItemButton = styled(Button, {
    width: 65,
    color: '$green500',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 'auto',
    cursor: 'pointer',

    '&:hover': {
        color: '$green300',
    }
})

export const CheckoutProductImage = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 94,
    maxWidth: 100,
    borderRadius: 8,
    overflow: 'hidden',

    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
})

export const CheckoutFooter = styled('footer', {
    display: 'flex',
    flexDirection: 'column',
})

export const CheckoutSummary = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,

    div: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,

        span: {
            color: '$gray600',
            textAlign: 'right',
        },

        p: {
            fontSize: '$xl',
            fontWeight: 'bold',
        }
    }
})

export const CheckoutButton = styled('button', {
    marginTop: 55,
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
    },
    
    '&:not(:disabled):hover': {
        backgroundColor: '$green300',
        transition: 'background-color 0.3s',
    }
})

export const CheckoutEmpty = styled('div', {
    textAlign: 'center',
    color: '$gray600',
    margin: '32px 0',

    h2: {
        fontSize: '$lg',
        fontWeight: 'bold',
        color: '$gray300',
        margin: '4px',
    },
})

export const CheckoutLink = styled('a', {
    marginTop: 55,
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    textAlign: 'center',
    textDecoration: 'none',

    '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
    },
    
    '&:not(:disabled):hover': {
        backgroundColor: '$green300',
        transition: 'background-color 0.3s',
    }
})

