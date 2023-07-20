import React from 'react'
import "../Tips.css"
import Navbar from '../navbar'
function Veg() {
  return (
    <div className='simp'>
    <Navbar/>
    <div className='struc'>
         <h1 className="recipe">Fried Rice</h1>
         <div><img srcset="https://nishkitchen.com/wp-content/uploads/2020/01/Chinese-Veg-Fried-Rice-1B-480x270.jpg" sizes="10cm" src="https://www.freecodecamp.org/news/content/images/size/w60/2023/06/ppv2-fix.jpg" class="author-profile-image" alt="Nathan Sebhastian" width="100" height="100" onerror="this.style.display='none'" loading="lazy" data-test-label="profile-image"></img></div>
         <h2>Needed Ingredients</h2>
         <ul>
            <li>Rice</li>
            <li>Vegetables</li>
            <li>Masala</li>
            <li>Cooking Oil</li>
            <li>Tomato Sauce</li>
         </ul>
         <h2>Cooking Tips</h2>
         <p>firstly, in a large kadai heat 2 tbsp oil and stir-fry 2 clove garlic.
also, saute ½ onion and 2 tbsp spring onion until they sweat.<br/>furthermore add vegetables of your choice like ¼ carrot, 2 tbsp cabbage, 2 tbsp peas, 5 beans, ¼ capsicum and ½ tsp salt.
stir fry on high flame without overcooking vegetables.<br/>now add 2 tbsp soy sauce and 1 tbsp vinegar. stir-fry until the sauce is combined well.
keeping the flame on high, add cooked rice.<br/>also, add 1 tsp pepper and ¼ tsp salt. adjust the salt as soy sauce has salt.
stir-fry by mixing well making sure rice grains won't break.<br/>further, add 2 tbsp spring onions and mix well.
finally, enjoy veg fried rice</p>

        
    </div>
    </div>
  )
}

export default Veg 