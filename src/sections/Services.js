import React from 'react'
import { Row, Col } from 'react-bootstrap'
import cleaning_and_repair from '../img/cleaning-and-repair.jpg'
import ducting from '../img/ducting.jpg'
import fabricating from '../img/fabricating.jpg'
import installation from '../img/installation.jpg'

const Services = () => {

  const services_list = [
    {
      name: 'Cleaning and Repair',
      img_src: cleaning_and_repair
    },
    {
      name: 'Ducting',
      img_src: ducting
    },
    {
      name: 'Fabricating',
      img_src: fabricating
    },
    {
      name: 'Installation',
      img_src: installation
    }
]



  return (
    <section id='services'>
      <h1 className='section-title'>Services</h1>

      <div className='services-box d-flex align-items-center'>
        <div className='service_div'>
        <Row className='d-flex justify-content-around'>
          {services_list.map((service, idx)=> (
              <Col key={idx}  >
                <div className='service_desc text-center '>
                  <p className='service_text'>{service.name}</p>
                  <img className='service_img' src={service.img_src} alt={service.name} />
                </div>
              </Col>              
            ))}
        </Row>
        </div>
      </div>
    </section>
  )
}

export default Services