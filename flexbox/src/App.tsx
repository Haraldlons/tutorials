import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const breakPoint = '560px';

const Container1 = styled.div`
  @media(min-width: ${breakPoint}) {
    display: flex;
  /* align-items: flex-start; */
  /* align-items: flex-end; */
  /* align-items: center; */
  /* align-items: stretch; // Default */
  /* flex-direction: column; */
  }
`;

const PaddingDiv = styled.div`
  border: 1px #ccc solid;
  padding: 10px;
`;
const Box1 = styled(PaddingDiv)`
  flex: 2;
  order: 2;
`;
const Box2 = styled(PaddingDiv)`
  flex: 1;
  order: 1;
`;
const Box3 = styled(PaddingDiv)`
  flex: 1;
  order: 3;
`;

const Container2 = styled.div`
  @media (min-width: ${breakPoint}) {
    display: flex;
    /* justify-content: flex-start; */
    /* justify-content: flex-end; */
    /* justify-content: center; */
    /* justify-content: space-around; */
    justify-content: space-between;
  }
`;
const Container2Box = styled(PaddingDiv)`
  flex-basis: 20%;
`;

const Container3 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Container3Box = styled(PaddingDiv)`
  flex-basis: 15%;
`;

const App : React.FC = () => (
  <>
    <Container1>
      <Box1>
        <h3>Box One (1)</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
      </Box1>
      <Box2>
        <h3>Box Two (2)</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
      </Box2>
      <Box3>
        <h3>Box Three (3)</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
      </Box3>
    </Container1>
    <Container2>
      <Container2Box>
        <h3>Box four (4)</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
      </Container2Box>
      <Container2Box>
        <h3>Box five (5)</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
      </Container2Box>
      <Container2Box>
        <h3>Box six (6)</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
      </Container2Box>
    </Container2>
    <Container3>
      <Container3Box>
        <h3>Box seven (7)</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
      </Container3Box>
      <Container3Box>
        <h3>Box eight (8)</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
      </Container3Box>
      <Container3Box>
        <h3>Box nine (9)</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
      </Container3Box>
    </Container3>
  </>
);

export default App;
