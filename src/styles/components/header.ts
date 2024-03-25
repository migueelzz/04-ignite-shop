import { styled } from ".."

export const HeaderContainer = styled('header', {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-between',
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',
})

export const Button = styled('button', {
    position: 'relative',
    width: 48,
    height: 48,
    cursor: 'pointer',
    padding: '12px',
    marginLeft: 'auto',
    border: 0,
    borderRadius: 6,
    backgroundColor: '$gray800',
    color: '$gray600',

    '&:hover': {
        opacity: 0.9,
    },

    span: {
        position: 'absolute',
        top: -10,
        right: -10,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        width: 24,
        height: 24,
        padding: '12px',
        border: '3px solid $gray900',
        borderRadius: '100%',

        color: '$white',
        backgroundColor: '$green500',
    }
})