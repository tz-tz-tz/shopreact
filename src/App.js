import NavBar from './components/NavBar'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './theme'
import ItemListcontainer from './components/ItemListcontainer'
import Container from '@material-ui/core/Container';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container>
      <ItemListcontainer titulo={"Bienvenido"} name={"Matias"}/>
      </Container>
      </ThemeProvider>
  );
}

export default App;
