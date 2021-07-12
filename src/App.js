import NavBar from './components/NavBar'
import Button from '@material-ui/core/Button'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <h2>hola</h2>
      <Button 
      color="primary"
      variant="contained" 
      >
        Prueba Boton
      </Button>
    </ThemeProvider>
  );
}

export default App;
