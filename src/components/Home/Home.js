import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Service from '../Service/Service';
import './Home.css';
const Home = () => {
    const [services, setServices] = useServices();
    return (
        <>
            <Banner></Banner>
            <div className='container'>
            <h2 className='text-primary text-center mt-4 mb-4'> Our Packages</h2>
            <div className='services-container'>
                  {
                      services.slice(0,3).map(service => <Service
                      key={service.id}
                      service={service}
                      ></Service>)
                  }
            </div>
            <div className='more-package text-center mt-3'>
                <Link to="/services">See more packages</Link>
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
            </div>
            <Reviews></Reviews>
        </>
    );
};

export default Home;