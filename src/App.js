
import './App.css';
import Header from './components/Header';
import RoutesListPage from './pages/RoutesListPage';
import RoutePage from './pages/RoutePage';
import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() { //this is the function that runs the entire application. The different routes should be placed here
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Routes>
            {/* exact specifies the router to only return matches that completely match the route specified, instead of returning a partial match */}
            {/* route for one of the pages */}
            <Route path='/'  element={<Home />} />
            <Route path='/routeList' exact element={<RoutesListPage />} /> 
            {/* route for another page */}
            <Route path='/route/:id' element={<RoutePage />} /> 
          </Routes>
      </div>
    </BrowserRouter>
    // <div className='App'>
    // <RoutesListPage/> 
    // </div>
  );
}

export default App;
 