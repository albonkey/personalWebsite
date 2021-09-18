import './App.scss';
import './myStyle.scss';
import Homepage from './pages/Homepage/Homepage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import ResumePage from './pages/ResumePage/ResumePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header  from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContactPage from './pages/ContactPage/ContactPage';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="app">
      	<Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/portfolio' component={PortfolioPage} />
          <Route path='/resume' component={ResumePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/contact' component={ContactPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
