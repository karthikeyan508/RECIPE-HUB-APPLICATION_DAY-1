import React  from 'react'
import "./home.css";
import Navbar from './navbar';
import Footer from './footer';
// import Sidebar from './sidebar';

export default function Home() {


  return (
    <div class="body">
        <header>
        <Navbar/>
        <Footer/>
        </header>
        <h1 className='head' style={{fontFamily:"Lucida Console",margin:"center"}}>
        Enjoy Your Recipe

        <h2 style={{fontFamily:"Lucida Console",margin:"center"}}>
        With yours Favourite 
          </h2>
        </h1>
       
    </div>
  )
}