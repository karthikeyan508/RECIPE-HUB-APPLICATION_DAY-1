import React from 'react'
import "../Tips.css"
import Navbar from '../navbar'
function Gobi() {
  return (
    <div className='simp'>
    <Navbar/>
    <div className='struc'>
         <h1 className="recipe">Dry Chicken Manchurian</h1>
         <div><img srcset="https://t4.ftcdn.net/jpg/05/92/83/67/360_F_592836725_pl9I8yjadj0YazCQ8UwhEYJ8cNxvodcm.jpg" sizes="10cm" src="https://www.freecodecamp.org/news/content/images/size/w60/2023/06/ppv2-fix.jpg" class="author-profile-image" alt="Nathan Sebhastian" width="100" height="100" onerror="this.style.display='none'" loading="lazy" data-test-label="profile-image"></img></div>
         <h2>Needed Ingredients</h2>
         <ul>
            <li>cauliflower</li>
            <li>Tomato</li>
            <li>Masala</li>
            <li>onion</li>
            <li>Ginger</li>
         </ul>
         <h2>Cooking Tips</h2>
         <p>Boil cauliflower florets in salted water over medium flame for 3-4 minutes. After boiling, drain excess water and pat dry florets on tissue paper.
<br/>Mix maida, corn flour, 1/2 teaspoon ginger paste, 1/2 teaspoon garlic paste and salt in a bowl. Add water (approx. 1/2 cup) little by little and stir to make a batter. Make sure that batter is not too thick or not too thin. Its thickness should be similar to thickness of dosa batter. Add all florets in batter and mix well. For perfect manchurian, batter should coat florets evenly.<br/>
Heat oil in kadai (frying pan) over medium flame. Carefully drop or slide 6 to 8 florets in oil and deep fry over medium flame until they turn golden brown. Drain and transfer deep fried florets over paper napkin to a plate. Deep fry remaining florets.</p>

        
    </div>
    </div>
  )
}

export default Gobi 