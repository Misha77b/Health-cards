import { makeStyles } from "@mui/styles";

const UseStylesSearch = makeStyles({
    '@global': {
        '.search-wrapper': {
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'wrap',
            width: '80vw',
            ['@media (max-width: 768px)']: {
                marginTop: '10px',
                width: '90vw',
            },
            ['@media (max-width: 425px)']: {
                flexWrap: 'wrap'
            }
        },
        '.search-input': {
            width: '60%',
            margin: '0 5px 0 0 ',
            display: 'flex', 
            alignItems: 'center', 
            p: '2px 4px',
            ['@media (max-width: 425px)']: {
                margin: '0 0 5px 0',
                width: '100%',
            }
        },
        '.dropdown-selectors-wrapper': {
            width: '40%', 
            display: 'flex', 
            justifyContent: 'space-between',            
            ['@media (max-width: 768px)']: {
            },
            ['@media (max-width: 425px)']: {
                width: '100%',
            }
        },
        '.dropdown-filter ': {
            width: '49.5%',
            background: 'white',
            borderRadius: '4px',
        },
    }
})

export default UseStylesSearch
