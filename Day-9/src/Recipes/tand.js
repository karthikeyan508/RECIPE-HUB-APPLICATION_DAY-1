import React from 'react'
import "../Tips.css"
import Navbar from '../navbar'
function Tandoori() {
  return (
    <div className='simp'>
    <Navbar/>
    <div className='struc'>
         <h1 className="recipe">Fryed leg Chicken</h1>
         <div><img srcset="https://us.123rf.com/450wm/mohsinmajeed7/mohsinmajeed72304/mohsinmajeed7230401494/201783934-crispy-fried-chicken-with-sauce-and-vegetables-on-a-wooden-board.jpg?ver=6" sizes="10cm" src="https://www.freecodecamp.org/news/content/images/size/w60/2023/06/ppv2-fix.jpg" class="author-profile-image" alt="Nathan Sebhastian" width="100" height="100" onerror="this.style.display='none'" loading="lazy" data-test-label="profile-image"></img></div>
         <h2>Needed Ingredients</h2>
         <ul>
            <li>Chicken</li>
            <li>Onion</li>
            <li>Masala</li>
            <li>Lemon</li>
            <li>Yoghurt</li>
         </ul>
         <h2>Cooking Tips</h2>
         <p>Heat the oil in a small pan over medium heat, then cook the coriander, cumin, turmeric, cayenne, garam masala and paprika, stirring often, until fragrant (approximately 2-3 minutes). Let cool completely.
         <br/>Whisk the cooled spice-oil mixture into the yogurt, then mix in the lemon juice, garlic, salt and ginger.<br/>
         Cut deep slashes (to the bone) in 3-4 places on the leg/thigh pieces. Just make 2-3 cuts if you are using separate drumsticks and thighs. Coat the chicken in the marinade, cover and chill for at least an hour (preferably 6 hours), no more than 8 hours.
         <br/>Prepare your grill so that one side is quite hot over direct heat, the other side cooler, not over direct heat. If using charcoal, leave one side of the grill without coals, so you have a hot side and a cooler side. If you are using a gas grill, just turn on one-half of the burners.

Use tongs to wipe the grill grates with a paper towel soaked in vegetable oil<br/>Take the chicken out of the marinade and shake off the excess. You want the chicken coated, but not gloppy.

Put the chicken pieces on the hot side of the grill and cover. Cook 2-3 minutes before checking.

Turn the chicken so it is brown (even a little bit charred) on all sides<br/>
Move chicken to the cool side of the grill. Cover and cook for at least 20 minutes, up to 40 minutes (or longer) depending on the size of the chicken and the temperature of the grill. The chicken is done when its juices run clear.</p>

        

    </div>
    </div>
  )
}

export default Tandoori