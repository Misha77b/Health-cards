import styled from 'styled-components';

import TextField from '@mui/material//TextField';

export const AccordionSection = styled.div`
  margin: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  background: white;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  @media (max-width: 768px) {
    margin: 15px 20px;
    width: 275px;
  }
  @media (max-width: 425px) {
    margin: 10px 15px;
    width: 250px;
  }
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
  & label.Mui-disabled {
    color: black;
  },
  & input.Mui-disabled{
    -webkit-text-fill-color: black;
  },
`;