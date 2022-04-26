import { makeStyles } from '@mui/styles';

const UseStylesHeader = makeStyles({
    '@global': {
        '.header': {
            width: '100%',
            height: '80px',
            background: 'rgba(10, 10, 10, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        '.logo-img' : {
            width: '50px',
            height: '50px',
            margin: '0 50px',
            cursor: 'pointer'
        },
        '.header-logo-title' : {
            margin: '10px 15px',                   
            fontFamily: 'Roboto sans-serif',
            fontSize: '24px',
            fontWeight: '700',
            color: 'gold',
            cursor: 'pointer'
        },
        '.header-btn' : {
            margin: '10px 50px',
            fontSize: '18px',
        }
    }
})

export default UseStylesHeader;