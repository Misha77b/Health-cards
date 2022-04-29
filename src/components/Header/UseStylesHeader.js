import { makeStyles } from '@mui/styles';

const UseStylesHeader = makeStyles({
    '@global': {
        '.header': {
            width: '100%',
            height: '80px',
            background: 'rgba(10, 10, 10, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',    
            ['@media (max-width: 425px)']: {
                height: '60px',
            }
        },
        '.logo-img' : {
            width: '50px',
            height: '50px',
            margin: '0 50px',
            cursor: 'pointer' ,
            ['@media (max-width: 425px)']: {
                width: '35px',
                height: '35px',
                margin: '0 25px',
            }
        },
        '.header-logo-title' : {
            margin: '10px 15px',                   
            fontFamily: 'Roboto sans-serif',
            fontSize: '24px',
            fontWeight: '700',
            color: 'gold',
            cursor: 'pointer',
            ['@media (max-width: 425px)']: {
                display: 'none',
            }
        },
    }
})

export default UseStylesHeader;