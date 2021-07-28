import NavBar from './components/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './theme'
import ItemListcontainer from './components/ItemListcontainer'
import Container from '@material-ui/core/Container';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
     <NavBar />
      <Switch>
        <ThemeProvider theme={theme}>         
          <Container>
              <Route exact path='/'>
                <ItemListcontainer titulo={"Bienvenido"} name={"Matias"}/>
              </Route>
              <Route exact path='/category'>
                <ItemDetailContainer />
              </Route>
              <Route exact path='/category/:categoryId'>
                <ItemDetailContainer />
              </Route>
              <Route exact path='/item/:itemId'>
                <ItemDetailContainer />
              </Route>
          </Container>
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
