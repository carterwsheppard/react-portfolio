import React from 'react';
// import {validateEmail} from '../../utils/helpers';
// import {useState} from 'react';

function ContactForm() {

return( <section class="hero">
    <div class="hero-text">
      <h2>Let's Collaborate!</h2>
      <br/>
      <p>
        Today you have the opportunity to reach out with your latest software idea, web application update requirements, or data analytics initiative. I'd love to work with you and have a longstanding record of taking ownership of advanced technology projects!
      </p>
    </div>
    <div class="contact-form">
      <h3>Contact Me Today:</h3>
      <p>Fill out this form and I will contact you to schedule a meeting.</p>
      <form>
        <label for="name">Enter full name:</label>
        <input type="text" placeholder="Your Name" id="name" name="name" class="form-input" />
        <br/>
        <label for="email">Enter email address:</label>
        <input type="email" placeholder="Email Address" id="email" name="email" class="form-input" />
        <br/>
        <label for="phone">Enter a telephone number:</label>
        <input type="tel" placeholder="Phone Number" name="phone" id="phone" class="form-input" />
        <p>
          Have we met before?
          <span class="radio-wrapper">
            <input type="radio" name="trainer-confirm" id="trainer-yes" />
            <label for="trainer-yes">Yes</label>
          </span>
          <span class="radio-wrapper">
            <input type="radio" name="trainer-confirm" id="trainer-no" />
            <label for="trainer-no">No</label>
          </span>
        </p>
        <button type="submit">
          Talk Soon!
        </button>
      </form>
    </div>
  </section> );

  }

  export default ContactForm;