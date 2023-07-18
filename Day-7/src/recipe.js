import React from 'react';
import './recipe.css'
import recipe1 from './Briyani.jpg'
import book2 from "./pizza.jpg"
import book3 from "./burger.jpg"
import book4 from "./butterchicken.jpg"
import book5 from "./chickentikka.jpg"
import book6 from "./tandoori.jpg"
import book7 from "./meals.jpg"
import book8 from "./vegrice.webp"
import book9 from "./gobi.jpg"
import Navbar from './navbar';




export default function Std()
{
    function search_books() {
		let input = document.getElementById('searchbar').value
		input=input.toLowerCase();
		let x = document.getElementsByClassName('gallery');
		  
		for (var i = 0; i < x.length; i++) { 
			if (!x[i].innerHTML.toLowerCase().includes(input)) {
				x[i].style.display="none";
			}
			else {
				x[i].style.display="list-item";                 
			}
		}
	}
    return (
      <>
      <Navbar/>
        <div className='body1'>
        <div className='budy'>
                        
                        <h3>RECIPES</h3>
                        <div className='searchbar1'>
                        <input id="searchbar" onkeyup="search_animal()" type="text"
        name="search" placeholder="Search Recipe" onChange={search_books}/>
                        </div>
                    <div class="gallery">
                <a className='aa' href='/briyani'>
                    <img src={recipe1} alt="Briyani" width="600vh" height="500vh" align-item="left"/>
                </a>
                <div class="desc">Mutten Briyani</div>
                </div>
                    
                 <div class="gallery">
                <a className='aa' href='/Pizza'>
                    <img src={book2} alt="pizza" width="600vh" height="500vh"/>
                </a>
                <div class="desc">Pizza</div>
                </div>
                 <div class="gallery">
                <a className='aa' href='/Burger'>
                    <img src={book3} alt="Burger" width="600" height="500vh"/>
                </a>
                <div class="desc">Burger</div>
                </div>
                 <div class="gallery">
                <a className='aa' href='/Butter'>
                    <img src={book4} alt="Butter Chicken" width="600vh" height="500vh"/>
                </a>
                <div class="desc">Chicken grevy</div>
                </div>
                 <div class="gallery">
                <a className='aa' href='/Tikka'>
                    <img src={book5} alt="Chicken Tikka" width="600" height="500"/>
                </a>
                <div class="desc">Kabab</div>
                </div>
                 <div class="gallery">
                <a className='aa' href='/Tandoori'>
                    <img src={book6} alt="Tandoori Chicken" width="600" height="500"/>
                </a>
                <div class="desc">Fryed Leg Piece</div>
                </div>
                 <div class="gallery">
                <a className='aa' href='/Meals'>
                    <img src={book7} alt="Meals" width="600" height="500"/>
                </a>
                <div class="desc">Meals</div>
                </div>
                 <div class="gallery">
                <a className='aa' href='/Veg'>
                    <img src={book8} alt="Veg FriedRice" width="600" height="500"/>
                </a>
                <div class="desc">Fried Rice</div>
                </div>
                 <div class="gallery">
                <a className='aa' href='/Gobi'>
                    <img src={book9} alt="Gobi Manchurian" width="600" height="500"/>
                </a>
                <div class="desc">Dry Chicken Manchurian</div>
                </div>
                    
        </div>
        </div>
        </>
    )
}