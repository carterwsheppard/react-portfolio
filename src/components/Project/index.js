import React from 'react';
import RunBuddy from '../../assets/images/runbuddy.png';
import Horiseon from '../../assets/images/horiseon.png';
import SpaceNews from '../../assets/images/spaceapp.png';
import RGI from '../../assets/images/RGI.png';

function Project() {

    return(
        <section class="worksamples" id="work-samples">
    <div class="flexrow center">
        <h2 class="sectiontitle border center">
            Coding Portfolio:
        </h2>
    </div>
    <br/>
    <div class="sample">
        <div class="workimage">
            <a href="https://carterwsheppard.github.io/run_buddy/">
            <img src={RunBuddy} alt="screenshot of a website created by Carter named Run Buddy"/>
            </a>
        </div>
        <br/>
        <div class="worktext">
            <h2 class="sectionsubtitle border">
                Run Buddy:
            </h2>
            <br/>
            <p class="descriptions">
                Run Buddy is a project I worked on at Vanderbilt University's full-stack web development program. This website uses HTML5 and CSS3 and is optimized across desktop, tablet, and mobile devices.
            </p>
        </div>
    </div>
    <br/>
    <div class="sample">
        <div class="workimage">
            <a href="https://carterwsheppard.github.io/challenge_1/">
            <img src={Horiseon} alt="screenshot of a website edited by Carter named Horiseon"/>
            </a>
        </div>
        <br/>
        <div class="worktext">
            <h2 class="sectionsubtitle border">
                Horiseon:
            </h2>
            <br/>
            <p class="descriptions">
                Horiseon is a HW assignment I worked on at Vanderbilt University's full-stack web development program. When I began this assignment, the code was outdated and did not include assistive features, such as alt text for screen readers on images. Upon completion of this assignment the layout is improved and now includes assistive features.
            </p>
        </div>
    </div>
    <br/>
    <div class="sample">
        <div class="workimage">
            <a href="https://carterwsheppard.github.io/space-app/">
            <img src={SpaceNews} alt="screenshot of a space news website"/>
            </a>
        </div>
        <br/>
        <div class="worktext">
            <h2 class="sectionsubtitle border">
                Space News:
            </h2>
            <br/>
            <p class="descriptions">
                The Space News & Events Application is a group project I worked on at Vanderbilt University's full-stack web development program. My group and I developed this application to fetch the most up to date news from space related APIs on launches and International Space Station reports.
            </p>
        </div>
    </div>
    <br/>
    <div class="sample">
      <div class="workimage">
          <a href="https://carterwsheppard.github.io/space-app/">
          <img src={RGI} alt="screenshot of a space news website"/>
          </a>
      </div>
      <br/>
      <div class="worktext">
          <h2 class="sectionsubtitle border">
              Requirements Gathering Interface:
          </h2>
          <br/>
          <p class="descriptions">
              The Requirements Gathering Interface is a full stack application I worked on at Vanderbilt University's program. My group and I developed this application to be used for requirements gathering for data analytics and custom app dev.
          </p>
      </div>
  </div>
</section>
    )

}

export default Project