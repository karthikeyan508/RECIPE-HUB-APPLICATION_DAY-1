import React from 'react'
import "../Tips.css"
import Navbar from '../navbar'
import { Rating } from '@mui/material'
import { Favorite } from '@mui/icons-material'
function Briyani() {
  return (
    <div className='simp'>
    <Navbar/>
    <div className='struc'>
         <h1 className="recipe">Mutten Briyani</h1>
         {/* <div><img src="briyani"></img></div> */}
         <div><img srcset="https://t4.ftcdn.net/jpg/04/36/36/57/360_F_436365754_z3i5Es0sFmZuLY6GZIzdiU01v9HqpGZe.jpg" sizes="10cm" src="https://www.freecodecamp.org/news/content/images/size/w60/2023/06/ppv2-fix.jpg" class="author-profile-image" alt="Nathan Sebhastian" width="100" height="100" onerror="this.style.display='none'" loading="lazy" data-test-label="profile-image"></img></div>
         
    
         <h2> Needed Ingredients</h2>
         <ul>
            <li>Rice</li>
            <li>Mutten</li>
            <li>Garam Masala</li>
            <li>Ghee</li>
            <li>GingerPaste</li>
            <li>Onion</li>

         </ul>
         <h2>Cooking Tips</h2>
         <p>To make a delightful chicken biryani dish, firstly soak saffron in water to prepare saffron water (one tsp saffron can be soaked in 1/4 cup water). Next, mix kewra drops in water and mix well to make kewra water. Set them aside for later usage. Now, chop the onion and coriander leaves and keep them aside.
         <br/>Meanwhile, heat refined oil in a deep bottomed pan. Once the oil is hot enough, add cumin seeds, bay leaf, green cardamom, black cardamom, cloves in it, and saute for about a minute. Then, add chopped onion to it and saute until pink. Now, add chicken into it with slit green chillies, turmeric, salt to taste, ginger-garlic paste, red chilli powder and green chilli paste. Mix well all the spices and cook for 2-3 minutes. Then, add hung curd into it and give a mix. 
         <br/>Turn the flame to medium again and add garam masala in it along with ginger julienned, coriander and mint leaves. Add kewra water, rose water and 1 tsp saffron water in it. Cook till the chicken is tender. Then add 1 cup cooked rice and spread evenly. Then add the remaining saffron water and pour ghee over it. You can now cook the dish without the lid or cover it with a lid to give a dum-effect due to the steam formation.
         <br/>Cook for 15-20 minutes with a closed lid and garnish with 1 tbsp fried onions and coriander leaves. Serve hot chicken biryani with raita of your choice. Enjoy!</p>
         
        
    </div>
    </div>
    
  )
}

export default Briyani 