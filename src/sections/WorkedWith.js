import Carousel from 'react-bootstrap/Carousel';
import lloyd_labs from '../img/lloyd-laboratories.jpg'
import ad_drugstrel from '../img/ad-drugstel.jpg'
import northfields from '../img/northfields.png'


const WorkedWith = () => {

    const company_list = [
        {
            name: 'Lloyd Laboratories Inc.',
            logo: lloyd_labs
        },
        {
            name: 'Ad-Drugstel Pharma Lab Inc.',
            logo: ad_drugstrel
        },
        {   
            name: 'Northfields Laboratories Inc.',
            logo: northfields
        }
    ]

  return (
    <section>
        <h1 className='section-title'>Companies That we Have Worked With</h1>
            <div className='workedwith_box d-flex align-items-center'>
                <div className='workedwith_div'>
                    <Carousel>
                        {company_list.map((company, idx) => (
                            <Carousel.Item key={idx}>
                                <div className='company_logo'>
                                    <div>
                                        <img className='' src={company.logo} alt={company.name}/>
                                        <p>{company.name}</p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}

                    </Carousel>
                </div>
            </div>
    </section>
  )
}

export default WorkedWith