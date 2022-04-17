import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const [services, setServices] = useServices();
    return (
        <div className='container'>
            <h2 className='text-primary text-center mt-4 mb-4'> Our Packages</h2>
            <div className='services-container'>
                  {
                      services.map(service => <Service
                      key={service.id}
                      service={service}
                      ></Service>)
                  }
            </div>
        </div>
    );
};

export default Services;