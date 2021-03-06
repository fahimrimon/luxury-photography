import React from 'react';
import useServices from '../../hooks/useServices';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [services, setServices] = useServices();
    return (
        <div>
            <div className='reviews-img'>
               <img src="https://www.globitalsingapore.com/wp-content/uploads/2021/07/df453we.png" alt="" />
            </div>
            <div  className='container'>
            <div className='reviews-item' id='reviews'>
                {
                    services.map(review => <Review
                    key={review.id}
                    review={review}
                    ></Review>)
                }
            </div>
            </div>
        </div>
    );
};

export default Reviews;