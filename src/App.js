import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import SpecificStateDetails from './components/SpecificStateDetails'
import VaccinationDetails from './components/VaccinationDetails'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/state/:stateCode" component={SpecificStateDetails} />
    <Route exact path="/about" component={About} />
    <Route exact path="/vaccination" component={VaccinationDetails} />
    <Route component={NotFound} />
  </Switch>
)

export default App
