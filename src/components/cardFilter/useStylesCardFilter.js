import { makeStyles } from "@mui/styles";

const UseStylesCardFilter = makeStyles({
    '@global': {
        '.search-wrapper': {
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'wrap',
            width: '80vw'
        },
        '.search': {
            display: 'flex',
        },
        '.search-input': {
            width: '60%',
            margin: '0 5px 0 0 ',
            display: 'flex', 
            alignItems: 'center', 
            p: '2px 4px', 
        },
        '.dropdown-filter ': {
            width: '20%',
            margin: '0 5px',
            background: 'white',
            borderRadius: '4px'
        },
        '.search-input:hover': {
            border: '1px solid black'
        },
    }
})

export default UseStylesCardFilter