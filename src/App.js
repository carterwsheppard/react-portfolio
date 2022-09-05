import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Project from './components/Project';

function App() {

  return (
    <div>
      <Nav />
      <main>
          <About />  
          <Project />
          <ContactForm />   
          <Footer />   
      </main>
    </div>
  );
}

export default App;
