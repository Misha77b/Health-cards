import { makeStyles } from "@mui/styles";

const UseStylesSearch = makeStyles({
    '@global': {
        '.search-wrapper': {
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'wrap',
            width: '80vw',
        },
        '.search-input': {
            width: '60%',
            margin: '0 5px 0 0 ',
            display: 'flex', 
            alignItems: 'center', 
            p: '2px 4px', 
        },
        '.dropdown-selectors-wrapper': {
            width: '40%', 
            display: 'flex', 
            justifyContent: 'space-between'
        },
        '.dropdown-filter ': {
            width: '49.5%',
            background: 'white',
            borderRadius: '4px',
        },
    }
})

export default UseStylesSearch
