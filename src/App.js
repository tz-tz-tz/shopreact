import NavBar from './components/NavBar'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './theme'
import ItemListcontainer from './components/ItemListcontainer'



function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <ItemListcontainer titulo={"Bienvenido"} name={"Matias"}/>
      </ThemeProvider>
  );
}

export default App;
