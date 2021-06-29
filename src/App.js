import './App.scss';
import './myStyle.scss';
import Homepage from './pages/Homepage/Homepage';
import Header  from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="app">
      	<Header />
        <Switch>
          <Route path='/' component={Homepage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
