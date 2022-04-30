import { makeStyles } from "@mui/styles";

const UseStylesPageLogInInfo = makeStyles({
    '@global': {
        '.logIn-main': {
            display: 'flex',
            flexDirection: 'column',
            alingItems: 'center'
        },
        '.given-data-wrapper' : {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alingItems: 'center'
        },
        '.logIn-info': {
            margin: '225px auto 25px', 
            fontFamily: 'Lato sans-serif',
            ['@media (max-width: 768px)']: {
                margin: '200px auto 20px', 
            },
            ['@media (max-width: 425px)']: {
                margin: '150px auto 15px', 
            }
        },
        '.auth-given-data': {
            margin: '0 auto',
        },
        '.data-info': {
            margin: '5px 0'
        },
        '.data': {
            fontFamily: 'Lato',
        },
        '.data-to-auth-container': {
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            ['@media (max-width: 768px)']: {
                width: '400px'
            },
            ['@media (max-width: 425px)']: {
                width: '300px'
            }
        },
        '.pass-registration' : {
            fontWeight: '400',
            fontSize: '18px',                 
            ['@media (max-width: 768px)']: {
                width: '400px',   
            },
            ['@media (max-width: 425px)']: {
                width: '300px',
            }
        },
        '.get-data-link' :{
            color: 'black',
            textDecoration: 'none'
        },
        '.get-data-link:hover': {
            color: 'darkViolet'
        },
        '.link-get-token' : {
            fontWeight: '700',
        }
    }
})

export default UseStylesPageLogInInfo