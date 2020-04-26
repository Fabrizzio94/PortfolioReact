import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Banner from './components/Banner/Banner'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
// import Footer from './components/Footer/Footer'
const Routes = ({stickyRef}) => {
    return(
        <Switch>
            <Route exact path='/contact' 
            render={(props) => (
                <Contact {...props} stickyRef={stickyRef} />
            )} />
            <Route exact path='/portfolio' 
            render={(props) => (
                <Projects {...props} stickyRef={stickyRef} />
            )}/>
            <Route exact path='/about' 
            render={(props)=> (
                <About {...props} stickyRef={stickyRef} />
            )}/>
            <Route exact path='/' 
            render={(props) => (
                <Banner {...props} stickyRef={stickyRef} />
            )} />
            {/* <Route exact path='/about' component={About} /> */}
        </Switch>
    );
}

export default Routes;