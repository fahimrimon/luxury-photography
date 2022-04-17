import React from 'react';
import useServices from '../../hooks/useServices';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [services, setServices] = useServices();
    return (
        <div className='container'>
            <div className='reviews-item'>
                {
                    services.map(review => <Review
                    key={review.id}
                    review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;