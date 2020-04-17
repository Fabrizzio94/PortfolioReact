import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Banner from './components/Banner/Banner'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
// import Footer from './components/Footer/Footer'
const Routes = () => {
    return(
        <Switch>
            <Route exact path='/contact' component={About} />
            <Route exact path='/portfolio' component={Projects} />
            <Route exact path='/about' component={About} />
            <Route exact path='/' component={Banner}/>
        </Switch>
    );
}

export default Routes;