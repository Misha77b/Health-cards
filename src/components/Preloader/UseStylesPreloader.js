import { makeStyles } from "@mui/styles";

const useStylesPreloader = makeStyles({
    '@global': {
        '.preloader-wrapper': {
            'position': 'absolute',
            'display' : 'flex',
            'justifyContent' : 'center',
            'alingItem' : 'center',
            'background' : 'rgba(0, 0, 0, .5)',
            'width' : '100%',
            'height' : '100%'
        },
        '@keyframes heartBeat': {
            '0%': {
              'transform': 'scale(1)'
            },
          
            '50%': {
              'transform': 'scale(1.25)'
            },
          
            '100%': {
              'transform': 'scale(1)'
            },
        },
        '.preloader-img' : {
            'margin' : 'auto',
            'width' : '250px',
            'height' : '250px',
            'animation' : 'heartBeat 1s infinite'
        },
    }
});

export default useStylesPreloader;