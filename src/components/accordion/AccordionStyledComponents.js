import styled from 'styled-components';

export const AccordionSection = styled.div`
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