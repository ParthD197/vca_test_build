import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Vision from './components/Vision';
import Mentor from './components/Mentor';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      {/* <h1 className="text-2xl font-bold"> HELLO </h1> */}
      {/* <h1>HELLO</h1> */}
	  <Navbar/>
	  <Home/>
	  <About/>
	  <Vision/>
	  <Mentor/>
	  <Team/>
	  <Contact/>

    </div>
  );
}

export default App;
