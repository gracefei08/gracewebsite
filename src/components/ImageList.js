import React from 'react';
import '../App.css';
import './Imagelist.css';
import a1 from './pages/art/1.png';
import a2 from './pages/art/2.jpg';
import a3 from './pages/art/3.png';
import a4 from './pages/art/4.png';
import a5 from './pages/art/5.png';
import a6 from './pages/art/6.png';
import a7 from './pages/art/7.jpg';
import a8 from './pages/art/8.JPG';
import a9 from './pages/art/9.jpg';
import a10 from './pages/art/10.jpg';
import a11 from './pages/art/11.jpg';
import a12 from './pages/art/12.JPG';
import a13 from './pages/art/13.jpg';
import a14 from './pages/art/14.jpg';
import a15 from './pages/art/15.jpg';
import a16 from './pages/art/16.jpg';
import a17 from './pages/art/17.jpg';
import a18 from './pages/art/18.jpg';
import a19 from './pages/art/19.jpg';
import a20 from './pages/art/20.png';



function art() {
    return (
        <section className="gallery">
            <ul className="images">
            <li className="card"> <img src={a1} alt = "art1"/> </li>
            <li className="card"> <img src={a2} alt = "art1"/></li>
            <li className="card"> <img src={a3} alt = "art1" /></li>
            <li className="card"> <img src={a4} alt = "art1"/></li>
            <li className="card"> <img src={a5} alt = "art1"/></li>
            <li className="card"> <img src={a6} alt = "art1"/></li>
            <li className="card"> <img src={a7}  lt = "art1"/></li>
        
            <li className="card"> <img src={a8}/></li>
            <li className="card"> <img src={a9}/></li>
            <li className="card"> <img src={a10}/></li>
            <li className="card"> <img src={a11}/></li>
            <li className="card"> <img src={a12}/></li>
            <li className="card"> <img src={a13}/></li>
            <li className="card"> <img src={a14}/></li>
         
     
    
            <li className="card"> <img src={a15}/></li>
            <li className="card"> <img src={a16}/></li>
            <li className="card"> <img src={a17}/></li>
            <li className="card"> <img src={a18}/></li>
            <li className="card"> <img src={a19}/></li>
            <li className="card"> <img src={a20}/></li>
              
        </ul>
        </section>
        );
}

export default art;