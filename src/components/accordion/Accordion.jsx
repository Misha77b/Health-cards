import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  margin: 50px'
`;

const Container = styled.div`
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 2rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #1c1c1c;
  color: gold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = () => {
    if (clicked) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }
    setClicked(true);
  };

  return (
    <AccordionSection>
      <Container>
        {/* {Data.map((item, index) => {
          return (
            <> */}
              <Wrap onClick={() => toggle()}>
                <h1>Accordion</h1>
                <span>{clicked ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}</span>
              </Wrap>
              {clicked ? (
                <Dropdown>
                  <p>Hidden Text</p>
                </Dropdown>
              ) : null}
            {/* </>
          );
        })} */}
      </Container>
    </AccordionSection>
  );
}

export default Accordion