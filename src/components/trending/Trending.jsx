import React from 'react'
import RetroPc from '../../assets/images/image-retro-pcs.jpg'
import TopLabtop from '../../assets/images/image-top-laptops.jpg'
import GamingGrowth from '../../assets/images/image-gaming-growth.jpg'
import './trending.css'
const Trending = () => {
    
  return (
    <div className='trending'>
        <div className="trendingContainer">
            <img src={RetroPc} alt="" />
            <div className="trendingInfo">
                <h4 className="rank">01</h4>
                <h5 className="title">Reviving Retri PCs</h5>
                <p>What happens when old PCs are given modern upgrades?</p>
            </div>
        </div>

        <div className="trendingContainer">
            <img src={TopLabtop} alt="" />
            <div className="trendingInfo">
                <h4 className="rank">02</h4>
                <h5 className="title">Top 10 Laptops of 2022</h5>
                <p>Our best picks for various needs and budgets.</p>
            </div>
        </div>

        <div className="trendingContainer">
            <img src={GamingGrowth} alt="" />
            <div className="trendingInfo">
                <h4 className="rank">03</h4>
                <h5 className="title">The Growth of Gaming</h5>
                <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Trending