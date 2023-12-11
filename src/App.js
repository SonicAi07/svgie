import React from 'react'
import "./App.css"

import Home from './Screens/Home'
import Courses from './Screens/Courses';
import AboutUs from './Screens/AboutUs';
import Footer from './Screens/Footer';
import { Route, Routes } from 'react-router-dom';
import Trainers from './Screens/Trainers';
import { Header } from './Screens/Home'

function App() {

  return (
    <div className='app--container'>
      <Routes>
        <Route path='/' element={<>
          <Home />
          <Courses />
          <AboutUs />
          <Footer />
        </>} />
        <Route path='/trainers' element={<>
          <Header />
          <Trainers />
          <Footer />
        </>} />
      </Routes>
    </div>
  );
}

export default App;

// isActive will going to active after 10 secs and it will have a small thing which will say follow us on Youtube 


// it should be a circle on right side and a sqare on left side for the "follow us on Youtube"

// in the circle we will show the Youtube icon and from there only they can navigate the svgie channel