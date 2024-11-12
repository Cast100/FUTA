import React from 'react'
import Header from '../Header/Header'
import { BrowserRouter as Router, Switch,Route } from "react-router-dom"
import Home from '../../pages/home/Home'
import Footer from '../../pages/home/Footer'
import About from '../../pages/home/About'
import Membership from '../../pages/home/Membership'
import Contact from '../../pages/home/Contact'

const page = () => {
  return (
    <>
      <Router>
      <Header/>
        <Switch>
         <Route  path='/' exact component={Home}/>
         <Route exact path='/about' component={About} />
         <Route exact path='/membership' component={Membership} />
         <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default page
