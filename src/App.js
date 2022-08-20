
import './App.css';

import Lottie from 'react-lottie';
import * as animationData from './data/google-loading.json'

import Logo from './images/logo.png';
import LeadImage from './images/lead.png';

import BlueTick from './images/blue-tick.png';
import RedTick from './images/red-tick.png';
import GreenTick from './images/green-tick.png';
import YellowTick from './images/yellow-tick.png';
import EmptyTick from './images/empty-tick.png';
import { useEffect, useState } from 'react';

function App() {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  useEffect(() => {
    if (window.screen.width < 769) {
      setWidth(150);
      setHeight(150)
    } else {
      setWidth(200);
      setHeight(200)
    }
  }, [])

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="App">
      <div className="split">
        <div className="container">

          <div className="heading">
            <img src={Logo} alt="GDSC" className="logo" />
            <div className="inner-heading">
              <div className="title">Google Developer Student Clubs</div>
              <div className="college-title">St Joseph Engineering College, Mangaluru</div>
            </div>
          </div>

          <div className="row">
            <div className="task-heading">GDSC Task List</div>
            <div className="tasks">
              <div className="task-list">
                <div className="left">
                  <img src={RedTick} alt="red" className="tick" />
                  <div className="bar"></div>
                  <span className='task-container'>
                    <div className="task-item">GDSC Lead Selection</div>
                    <div className="mobile-completed">Completed 12/12</div>
                  </span>
                </div>
                <div className="right">
                  <div className="completed">Completed 12/12</div>
                </div>
              </div>
              <div className="task-list">
                <div className="left">
                  <img src={BlueTick} alt="blue" className="tick" />
                  <div className="bar"></div>
                  <span className='task-container'>
                    <div className="task-item">Finding domains</div>
                    <div className="mobile-completed">Completed 12/12</div>
                  </span>
                </div>
                <div className="right">
                  <div className="completed">Completed 12/12</div>
                </div>
              </div>
              <div className="task-list">
                <div className="left">
                  <img src={YellowTick} alt="yellow" className="tick" />
                  <div className="bar"></div>
                  <span className='task-container'>
                    <div className="task-item">Selection of core team and leads</div>
                    <div className="mobile-completed">Completed 12/12</div>
                  </span>
                </div>
                <div className="right">
                  <div className="completed">Completed 12/12</div>
                </div>
              </div>
              <div className="task-list">
                <div className="left">
                  <img src={GreenTick} alt="greeb" className="tick" />
                  <div className="bar"></div>
                  <span className='task-container'>
                    <div className="task-item task-in-progress">Website development</div>
                    <div className="mobile-in-progress">Completed 12/12</div>
                  </span>
                </div>
                <div className="right">
                  <div className="in-progress">In progress</div>
                </div>
              </div>
              <div className="task-list">
                <div className="left">
                  <img src={EmptyTick} alt="empty" className="tick" />
                  <div className="bar"></div>
                  <span className='task-container'>
                    <div className="task-item task-coming-soon">GDSC Launch</div>
                    <div className="mobile-coming-soon">Completed 12/12</div>
                  </span>
                </div>
                <div className="right">
                  <div className="coming-soon">Coming soon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lead-image-container container">
          <img src={LeadImage} alt="Lead" className="lead-image" />
        </div>
      </div>

      <div className="footer">
        <div className="inner-footer">
          <div className="footer-text">We're almost here!</div>
          <Lottie options={defaultOptions}
            className="lottie-animation"
            height={width}
            width={height}
            isStopped={false}
            isPaused={false} />
        </div>
      </div>
    </div>
  );
}

export default App;
