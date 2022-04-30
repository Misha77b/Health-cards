import { makeStyles } from "@mui/styles"

const useStylesVisitList = makeStyles({
    '@global': {
        '.no-items-title': {
            margin: '325px auto',
            ['@media (max-width: 768px)']: {            
                margin: '300px auto',
                fontSize: '26px'
            },
            ['@media (max-width: 425px)']: {             
                margin: '250px auto',      
                fontSize: '22px'
            }
        }
    }
})

export default useStylesVisitList