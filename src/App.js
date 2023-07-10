
import './App.css';
import Header from './components/Header';
import RoutesListPage from './pages/RoutesListPage';
import RoutePage from './pages/RoutePage';
import Home from './pages/Home';
import ShopPage from './pages/ShopPage';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const theme = createTheme({
  palette: {
      primary: {
          main: '#7FA085',
      },
      secondary: {
          main: '#144329'
      }
  },
  typography: {

  }
}
)

function App() { //this is the function that runs the entire application. The different routes should be placed here
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Header />
            <Routes>
              {/* exact specifies the router to only return matches that completely match the route specified, instead of returning a partial match */}
              {/* route for one of the pages */}
              <Route path='/'  element={<Home />} />
              <Route path='/routeList' exact element={<RoutesListPage />} />
              <Route path='/shopPage/:id' element={<ShopPage />} />
            </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
    // <div className='App'>
    // <RoutesListPage/> 
    // </div>
  );
}

export default App;
 