import React from 'react';
import logo from './logo.svg';
import './App.css';
import mercedesLogo from './mercedesLogo.png'
import menuIcon from './menuIcon.png'
import car2 from './mercedesCar1.png'
import car1 from './mercedesCar2.png'
import car3 from './mercedesCar3.png'
import fblogo from './fblogo.png'
import twitterlogo from './twitterlogo.png'
import instagramlogo from './instagramlogo.png'
import youtubelogo from './youtubelogo.png'

const data = [
  car1,
  car2,
  car3,
]
function App() {

  const wholeContainer = document.getElementById('container')
  const [activeIndex, setIndex] = React.useState(0)
  return (
    <div className="App">

      <div className="NavBar">
        <img src={mercedesLogo} className="logo" />
        <div>
          <nav>
            <ul className="navBox">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <img src={menuIcon} className="logo" />
      </div>

      {/* <button onClick={() => {
        let tempIndex = activeIndex
        tempIndex++
        if (tempIndex > data.length - 1) {
          tempIndex = 0
        }
        document.getElementById('container').style.transform = "translateX(calc(" + tempIndex + "*-1560px))"
        setIndex(tempIndex)
      }

      }>next</button>
      <button onClick={() => {
        let tempIndex = activeIndex
        tempIndex--
        if (tempIndex < 0) {
          tempIndex = data.length - 1
        }
        document.getElementById('container').style.transform = "translateX(calc(" + tempIndex + "*-1560px))"
        setIndex(tempIndex)
      }
      }
      >back</button> */}
      <div className="wholeContainer" id='container' >

        {
          data.map((item, index) => {
            return (
              <div className="carsContainer">
                <img src={item} className="cars" />
              </div>
            )
          })
        }
      </div>
      {/* <h1 className="mercedesWord">Mercedes</h1> */}
      <h4 className="buildingClass">Building class since Beginning</h4>
      <button className="button">EXPLORE</button>

      <div className="logos">
        <img src={fblogo} />
        <img src={twitterlogo} />
        <img src={instagramlogo} />
        <img src={youtubelogo} />
      </div>

      <div className="logos2">

        {
          data.map((item, index) => {

            if (index === activeIndex) {
              return (
                <div className="dotContainer">
                  <div className="dotSelected" />
                </div>
              )
            }
            else {
              return (
                <div className="dot" onClick={() => {

                  document.getElementById('container').style.transform = "translateX(calc(" + index + "*-1560px))"
                  setIndex(index)
                }
                } />
              )
            }

          })
        }
      </div>

      <div className="dataContainer">
        <div className="textContainer">
          <h4>ABOUT US</h4>
          <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit congue diam, ut semper nunc egestas vitae. Curabitur accumsan libero in iaculis sagittis. Sed feugiat rhoncus rutrum. Mauris vel ullamcorper ligula. Curabitur nisi turpis, vulputate vitae tellus eget, bibendum porta nisi.</h6>
        </div>
        <div className="textContainer">
          <h4>OUR MODELS</h4>
          <h6>FAST, NO CONTACT DELEIVERY</h6>
          <h6 className="h6text">CHOOSE TWO-HOUR COURIER<br></br>OR FREE DELIVERY</h6>
        </div>
        <div className="textContainer">
          <h4>OUR CLIENTS</h4>
          <h6>FAST, NO CONTACT DELEIVERY</h6>
          <h6 className="h6text">CHOOSE TWO-HOUR COURIER<br></br>OR FREE DELIVERY</h6>
        </div>
        <div className="textContainer">
          <h4>OUR STORIES</h4>
          <h6>FAST, NO CONTACT DELEIVERY</h6>
          <h6 className="h6text">CHOOSE TWO-HOUR COURIER<br></br>OR FREE DELIVERY</h6>
        </div>
      </div>
    </div>

  );
}

export default App;
