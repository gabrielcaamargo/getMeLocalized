import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/styles/defaultTheme';
import GlobalStyles from '../../assets/styles/GlobalStyles';
import Header from '../Header';
import Main from '../Main';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <Main />
    </ThemeProvider>
  );
}
