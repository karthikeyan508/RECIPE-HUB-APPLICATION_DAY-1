import React, { useState } from 'react';
import './Rating.css';
import './navbar'

const ImageRating = ({imageurl}) => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div className="image-rating">
      <div><span style={{ fontWeight: 'bold' }}height='30cm'width='30cm' background-color='black'
  color= 'white'>Seasonal Special</span></div>
    <div><img srcset="https://t4.ftcdn.net/jpg/04/36/36/57/360_F_436365754_z3i5Es0sFmZuLY6GZIzdiU01v9HqpGZe.jpg" sizes="10cm" src="https://www.freecodecamp.org/news/content/images/size/w60/2023/06/ppv2-fix.jpg" class="author-profile-image"  alt="Nathan Sebhastian" width="300" height="300"style={{ float: 'left', marginRight: '20cm' }} onerror="this.style.display='none'" loading="lazy" data-test-label="profile-image"></img></div>
    <div><span style={{ fontWeight: 'bold' }}height='20cm'width='20cm'>Summer Special</span></div>
    <div><img srcset="https://mir-s3-cdn-cf.behance.net/projects/404/afad1b159857899.Y3JvcCwxNzA2LDEzMzUsMTQ3LDA.jpg" sizes="100cm" src="https://www.freecodecamp.org/news/content/images/size/w60/2023/06/ppv2-fix.jpg" class="author-profile-image" alt="Nathan Sebhastian" width="300" height="300"style={{alignItems:'center'}}margintop='20cm' onerror="this.style.display='none'" loading="lazy" data-test-label="profile-image"></img></div>
    <div><img srcset="https://swatisani.net/kitchen/wp-content/uploads/2015/10/IMG_9350.jpg" sizes="10cm" src="https://www.freecodecamp.org/news/content/images/size/w60/2023/06/ppv2-fix.jpg" class="author-profile-image" alt="Nathan Sebhastian" width="300" height="300" style={{ float: 'right', marginLeft: '20cm' }}marginTop= '30cm'onerror="this.style.display='none'" loading="lazy" data-test-label="profile-image"></img></div>
    <div><span style={{ fontWeight: 'bold' }}height='20cm'width='20cm'>ramjan Special</span></div>
    <div><img srcset="https://t4.ftcdn.net/jpg/05/92/83/67/360_F_592836725_pl9I8yjadj0YazCQ8UwhEYJ8cNxvodcm.jpg" sizes="10cm" src="https://www.freecodecamp.org/news/content/images/size/w60/2023/06/ppv2-fix.jpg" class="author-profile-image" alt="Nathan Sebhastian" width="300" height="300" style={{ float: 'left', marginRight: '20cm' }} onerror="this.style.display='none'" loading="lazy" data-test-label="profile-image"></img></div>
    <div><img srcset="https://www.hlimg.com/images/stories/738X538/cover-pic_1527239659m.jpg" sizes="10cm" src="https://www.freecodecamp.org/news/content/images/size/w60/2023/06/ppv2-fix.jpg" class="author-profile-image" alt="Nathan Sebhastian" width="300" height="300" style={{alignItems:'center'}}margintop='20cm' onerror="this.style.display='none'" loading="lazy" data-test-label="profile-image"></img></div>
    <div><img srcset="https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_640.jpg" sizes="10cm" src="https://www.freecodecamp.org/news/content/images/size/w60/2023/06/ppv2-fix.jpg" class="author-profile-image" alt="Nathan Sebhastian" width="300" height="300" style={{ float: 'right', marginLeft: '20cm' }}marginTop= '30cm'onerror="this.style.display='none'" loading="lazy" data-test-label="profile-image"></img></div>
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? 'star filled' : 'star'}
            onClick={() => handleRatingClick(star)}
          >
            ★
          </span>
        ))}
      </div>
      {rating > 0 && <p>Your rating: {rating} out of 5</p>}
    </div>
  );
};

export default ImageRating;
