import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Cover from './components/Cover/Cover'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar />
      <Cover />
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer' />
        <Programs />
        <About/>
        <Title subTitle='Gallery' title='Campus photos' />
        <Campus />
        <Title subTitle='TESTIMONIALS' title='What Student Says' />
        <Testimonials />
      </div>
    </div>
  )
}

export default App
