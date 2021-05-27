import {BrowserRouter, Route} from 'react-router-dom';
import './styles/global.css';

import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';
import Petshop from './pages/petshop';
import Sidebar from './components/sidebar';
import Home from './pages/home';

function Routes() {
  return (
    <>
      <Sidebar />
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/petshop/:id" exact component={Petshop} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/cadastro" exact component={Cadastro} />
      </BrowserRouter>
    </>
  );
}

export default Routes;