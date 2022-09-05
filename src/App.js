import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {

  return (
    <div>
      <Nav />
      <main>
          <About />  
          <ContactForm />   
          <Footer />   
      </main>
    </div>
  );
}

export default App;
