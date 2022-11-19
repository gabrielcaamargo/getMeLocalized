import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/styles/defaultTheme';
import GlobalStyles from '../../assets/styles/GlobalStyles';
import Header from '../Header';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}
