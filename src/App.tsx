
import { GlobalStyle } from './styles/GlobalStyles';
import { Helmet } from 'react-helmet';
import Card from './Card';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Card />
    </div>
  );
}

export default App;
