import React from 'react'
import "../Tips.css"
import Navbar from '../navbar'
function Meals() {
  return (
    <div className='simp'>
    <Navbar/>
    <div className='struc'>
         <h1 className="recipe">Meals</h1>
         <div><img srcset="https://www.hlimg.com/images/stories/738X538/cover-pic_1527239659m.jpg" sizes="10cm" src="https://www.freecodecamp.org/news/content/images/size/w60/2023/06/ppv2-fix.jpg" class="author-profile-image" alt="Nathan Sebhastian" width="100" height="100" onerror="this.style.display='none'" loading="lazy" data-test-label="profile-image"></img></div>
         <h2>Needed Ingredients</h2>
         <ul>
            <li>Rice</li>
            <li>Vegetables</li>
            <li>Masala</li>
            <li>Ghee</li>
            <li>GingerPaste</li>
         </ul>
         <h2>Cooking Tips</h2>
         <p>Get started by boiling 2 cups of water in a covered pot. When the water has reached a boil, add 1/4 teaspoon salt and 1 cup of white rice.<br/>
         Cover the pot and let it simmer for 18-20 minutes. As tempting as it may be, try not to stir or lift the lid while the rice is cooking.<br/>
         Once the rice looks as fluffy as can be, take it off the burner and let it sit for 5 minutes. This cooling process allows the rice to steam and become the soft — but not too soft — consistency that we all strive for.<br/>
         Add more texture to the rice by fluffing it with a fork. Before serving, top it off with 1/2 cup of chopped herbs (we love cilantro and parsley!).</p>

      </div>  

    </div>
  )
}

export default Meals 