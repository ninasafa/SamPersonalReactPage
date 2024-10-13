//import logo from './logo.svg';
import './App.css';
import mine from './SamAnimo.gif';
import welcome from './welcome.png';
import name from './samvirtualspace.png';
import sampad from "./sampadorange.png";
import drum from "./drum.png";
import minecraft_back from "./mine-back-gray.png";
import swim from "./swim.png";
import { useEffect, useState } from "react";



/*import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

*/
function App() {
    
     /* const [loading, setLoading] = useState(true);
    //const [animo, setAnimo] = useState("https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif");
    //const [background, setBackground] = useState(true);

       
    useEffect(() => {
        setLoading (false);
        var grid = 100, //anything over a couple hundred will probably kill it
            windowWidth = window.innerWidth * 0.3,
            windowHeight = window.innerHeight,

            pW = windowWidth / grid,
            pH = pW,
            rows = parseInt(windowHeight / pH);

        console.log(windowHeight);
        console.log(windowWidth);

        if (window.innerWidth > 800) {

            var r = 0;

            while (r < rows) {
                var p = 0;
                while (p < grid) {
                    var tenth = p / grid;
                    if (p < grid / 10) {
                        var randomNumber = (Math.random() * tenth);
                    } else {
                        var randomNumber = (Math.random() * tenth) + (tenth - .1);
                    }

                    var opacity = randomNumber.toFixed(2);
                    const nodeElements = document.querySelectorAll(".pixels");
                    console.log(nodeElements);
                    var leftPixel = document.createElement('div');
                    leftPixel.className = 'pixelLeft';
                    leftPixel.style.cssText = "opacity: " + opacity + "; height: " + pH + "px; width: " + pW + "px;";
                    nodeElements[0].appendChild(leftPixel);

                    var rightPixel = document.createElement('div');
                    rightPixel.className = 'pixelRight';
                    rightPixel.style.cssText = "opacity: " + opacity + "; height: " + pH + "px; width: " + pW + "px;";
                    nodeElements[1].appendChild(rightPixel);

                    p++;
                }
                r++;
            }
        }

    }, [setLoading]);
                /*setTimeout(() => {
                    if (loading) {
                        setLoading(false);
                        setAnimo(
                            mine
                        );

                    }
                }, 3000);
            }
        }, [loading, setLoading, setAnimo]);
        }

    
      window.addEventListener('mousemove', function(e) {
      var arr = [1, 0.9, 0.8, 0.5, 0.2];

      arr.forEach(function(i) {
        var x = (1 - i) * 75;
        var star = document.createElement('div');

        star.className = 'star';
        star.style.top = e.pageY + Math.round(Math.random() * x - x / 2) + 'px';
        star.style.left = e.pageX + Math.round(Math.random() * x - x / 2) + 'px';

        document.body.appendChild(star);

        window.setTimeout(function() {
            document.body.removeChild(star);
        }, Math.round(Math.random() * i * 600));
      });
    }, false);

   */


  return (
   <div className="App">
         
          <img id='minecraft' src={mine} alt='Animo' />
          <div className='div-main'>
              
              <div className='pixels pixelLeft'></div>
              <div className='contents'>
                 
                <img className='img-welcome' src={welcome} />
                <img className='img-name' src={name} /> 
                 
                 <div className='container'>
                      {/*<img id='minecraft' src={animo} alt='Animo' />*/}
                 <div className='cube sampad'>
                  <div className='face top'><img id='mine-back' src={minecraft_back} /></div>
                  <div className='face bottom'></div>                  
                  <div className='face left'></div>
                      <div className='face right'><img id='mine-back' className='imgWithText' src={minecraft_back} /></div>
                  <div className='face front'><img id='sampad' src={sampad} alt='sampad'/></div>
                  <div className='face back'></div>
                      <div className='textFace rightText'>I am proudly year 7 of academic Sampad: National Organization for Development of Exceptional Talents <p className='special'>(NODET)</p> school year of 2024-2025</div>

                  </div>
                  <div className='mobileBreak'></div>

                <div className='cube drum'>
                  <div className='face top'><img id='mine-back' src={minecraft_back} /></div>
                  <div className='face bottom'></div>
                  <div className='face left'><img id='mine-back' src={minecraft_back} /></div>
                  <div className='face right'></div>
                  <div className='face front'><img id='drum' src={drum} alt='drum' /></div>
                  <div className='face back'></div>
                  <div className='textFace leftText'>I am a proud drumer for 6 years. My last pefromance in a concert was the song of <p className='special'>(Dele Man)</p> as a drummer.</div>
                  </div>
                  <div className='break mobileBreak'></div>
                     
                 
                  <div className='cube swim'>
                      <div className='face top'></div>
                      <div className='face bottom'><img id='mine-back' src={minecraft_back} /></div>
                      <div className='face left'><img id='mine-back' src={minecraft_back} /></div>
                      <div className='face right'></div>
                      <div className='face front'><img id='swim' src={swim} alt='swim' /></div>
                      <div className='face back'></div>
                      <div className='textFace bottomText'> I am a proud swimmer of 6 years. I swim crawl, breaststroke and butterfly stroke. I am working on my speed and would like to go pro </div>
                  </div>


                  </div>
              </div>
                  <div className='pixels pixelRight'></div>

          </div>

          
    </div>
  );
}

export default App;
