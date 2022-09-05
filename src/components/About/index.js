import React from 'react'
import coverImage from "../../assets/images/headshot.JPG";

function About() {

  return (
    <section className="my-5" >
      <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
      <div style={{ width: "5%" }}></div>
      <div className="my-2" style={{ width: "50%" }}>
      <p>
      <h3 id="about" className="center">Professional Mission Statement:</h3>
      <br></br>
      Long term, my hopes are to connect with other innovative thinkers throughout my career and collaborate to develop technologies and organizations that improve lives. 
      </p>
      <br/>
      <p>
      <h3 id="about" className="center">Current Role Description:</h3>
      <br></br>
      As a consultant at Graphable, I champion technical project delivery and customer relationship building with my clients of varying size.
<br></br>
<br></br>
During my tenure, I have led 17+ clients across over 20+ SOWs ranging from initial Domo implementations to custom technical solutions, strategy leadership, and data operations such as training, development of standard operating procedures, and Database to CRM integrations. 
<br></br>
<br></br>
Other solutions that I deliver range from executive dashboards, to full-stack custom solutions for scheduling of operational teams, embedded analytics on public and private websites / platforms, and more. 
<br></br>
<br></br>
My clients range from Fortune 500 enterprise consumer goods companies to industry leading SaaS logistics platforms, eCommerce Technology Series A startups, and privately held clean energy industry leaders. 
<br></br>
<br></br>
Having leveraged data to deliver value to C-suite decision making, ground level operational efficiency, compliance tracking and enforcement, and customer facing platform experience - I am a seasoned veteran when it comes to identifying and leveraging the value captured in your team’s data. 
      </p>
      </div>
    </section>
  )
}

export default About