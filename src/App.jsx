import { ThemeProvider } from 'styled-components';

import Headliner from './components/Headliner';
import Hero from './components/Hero';

const theme = {
  blueBg: "#E9F8FF",
  blue1: "#273333",
  blue2: "#002138",
  green: "#006B40",
  yellow: "#FFBC00",
  accent: "#DEE1E1",
  text: "#364141"
};

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
     <Headliner />
     <Hero />
     {/* <Hero />
     <Content /> */}
    </div>
    </ThemeProvider>
  );
}

export default App;
