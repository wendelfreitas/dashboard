import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from 'styles/theme';
import styled from 'styled-components';
import Button from 'stories/general/Button';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const Title = styled.h1`
  margin: 10px 0 30px 0;
  font-size: 5rem;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Container>
      <img src="/assets/getin.jpeg" alt="Logotipo Get In" />
      <Title>Get In</Title>
      <Button size="medium">Open design system of Get In Dashboard</Button>
    </Container>
  </ThemeProvider>
);

export default App;
