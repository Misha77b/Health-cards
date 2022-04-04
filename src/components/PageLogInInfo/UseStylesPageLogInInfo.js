import { makeStyles } from "@mui/styles";

const UseStylesPageLogInInfo = makeStyles({
    '@global': {
        '.logIn-main': {
            display: 'flex',
            flexDirection: 'column',
            alingItems: 'center'
        },
        '.logIn-info': {
            margin: '275px auto 25px',
        },
        '.auth-given-data': {
            margin: '0 auto'
        },
        '.data-to-auth-container': {
            display: 'flex',
            flexDirection: 'column'
        }
    }
})

export default UseStylesPageLogInInfo