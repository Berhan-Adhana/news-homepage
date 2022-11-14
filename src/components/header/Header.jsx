import React from 'react'
import './header.css'
import headerImg from '../../assets/images/image-web-3-desktop.jpg'
const 
 Header= () => {
  return (
    <div className='header'>
        <div className="right">
            <img src={headerImg} alt="" />
            <div className="headerTitle">

                <h1>The Bright Future of web 3.0?</h1>

                 <div className="headerInfo">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, impedit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, impedit.</p>
                      <button>Read More</button>
                </div>
            </div>

        </div>
        <div className="left">
            <h1>New</h1>
            <div className="latestNews">
                <h4>Hydorgen Vs Electric caras</h4>
                <p> will hydrogen-fuled cars ever catch up to EVs?</p>
            </div>
            <hr />

            <div className="latestNews">
                <h4>Hydorgen Vs Electric caras</h4>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, perferendis quidem. Odio enim expedita, voluptas eveniet repudiandae consequuntur adipisci ut?</p>
            </div>
            <hr />
            <div className="latestNews">
                <h4>Hydorgen Vs Electric caras</h4>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. A possimus totam quod iste! Numquam ab aut odio beatae minus corporis aperiam officia autem tempora ipsa! Aperiam nemo sit esse reiciendis.</p>
            </div>
          

        </div>
        
    </div>
  )
}

export default Header
