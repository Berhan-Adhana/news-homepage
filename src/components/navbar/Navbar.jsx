import {useRef} from 'react'
import Logo from '../../assets/images/logo.svg'
import MenuBar from '../../assets/images/icon-menu.svg'
import MenuClose from '../../assets/images/icon-menu-close.svg'
import './navbar.css'
const Navbar = () => {
  const navRef=useRef();
  const showNavBar=()=>{
    navRef.current.classList.toggle('responsive-navbar');
  }
  return (
    <div className='navbar'>
    <div className='logo'><img src={Logo} alt="" /></div>
    <ul ref={navRef} >
        <li >Home</li>
        <li >New</li>
        <li >Popular</li>
        <li >Trending</li>
        <li>Categories</li>
    <button className='btn menuClose' onClick={showNavBar}><img  src={MenuClose} alt="" /></button>
    </ul>
    <button className='btn'  onClick={showNavBar}><img src={MenuBar} alt="" /></button>
    </div>
   
  )
}

export default Navbar