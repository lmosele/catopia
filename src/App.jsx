import { ThemeProvider } from 'styled-components';

import Headliner from './components/Headliner';
import Hero from './components/Hero';
import Results from './components/Results';

const theme = {
  colors: {
    blueBg: "#E9F8FF",
    blue1: "#273333",
    blue2: "#002138",
    green: "#006B40",
    yellow: "#FFBC00",
    accent: "#DEE1E1",
    text: "#364141",
  },
  break: {
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1200px'
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Headliner />
        <Hero />
        <Results />
    </ThemeProvider>
  );
}

export default App;
