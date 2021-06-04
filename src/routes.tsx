import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Footer from './components/Footer';
import Header from './components/Header';
import Particles from './components/Particles';
import ScrollToTop from './components/ScrollToTop';
import Social from './components/Social';
import Abilities from './pages/Abilities';
import Blog from './pages/Blog';
import Error from './pages/Error';
import Home from './pages/Home';
import Ourdna from './pages/Ourdna';

import GlobalStyle from './styles/global'

const Routes: React.FC = () => {
  return (
    <Router>
      <ScrollToTop/> <GlobalStyle/>
    
      <Header/>
      <Social/>
      <Switch>
        <Route exact path='/'><Home/><Particles/></Route>
        <Route exact path='/abilities' component={Abilities}/>
        <Route path='/ourdna' component={Ourdna}/>
        <Route exact path='/blog' component={Blog}/>
        <Route path='*' component={Error}/>
      </Switch>
      <Footer/>
    </Router>
  )
}

export default Routes;