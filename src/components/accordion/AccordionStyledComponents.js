import styled from 'styled-components';

import TextField from '@mui/material//TextField';

export const AccordionSection = styled.div`
  margin: 20px 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  background: white;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  gap: 10px
  color: black;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  // .css-1x51dt5-MuiInputBase-input-MuiInput-input.Mui-disabled {
  //   -webkit-text-fill-color: black;
  // },
`;

export const Container = styled.div`
  width: 100%;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  margin: 15px 0 10px;
  span {
    position: absolute;
    top: 10px;
    right: 10px;    
    cursor: pointer;
  }
`;

export const Dropdown = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StyledTextField = styled(TextField)`
  background: white;
  & label.Mui-disabled {
    color: black;
  }
  // & .MuiInput-underline:after {
  //   border-bottom-color: white;
  // }
  // & .MuiOutlinedInput-root {
  //   & fieldset {
  //     border-color: white;
  //   }
  //   &:hover fieldset {
  //     border-color: white;
  //   }
  //   &.Mui-focused fieldset {
  //     border-color: white;
  //   }
  // }
  // & input.Mui-disabled: {
  //   -webkit-text-fill-color: green,
  // }
`;