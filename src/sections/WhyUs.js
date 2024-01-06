import Factors from '../components/Factors'

const WhyUs = () => {

  const factors_list = [
    {
        icon: 'bi bi-wrench-adjustable',
        title: 'Expert Technicians',
        description: 'Our team of experienced and skilled technicians are fully trained to handle all your air conditioning needs.'
    },
    {
        icon: 'bi bi-clock-fill',
        title: '24/7 Availability',
        description: `We're available around the clock to provide emergency repair services and answer any questions you may have.`
    },
    {
        icon: 'bi bi-hand-thumbs-up-fill',
        title: 'Customer Satisfaction',
        description: `We're committed to providing the highest level of customer satisfaction and ensuring that you're happy with our services.`
    }
]

  return (
    <section id='whyus'>
      <h1 className='section-title'>Why Choose Us?</h1>

      <div className='whyus-box d-flex align-items-center'>
        <div className='factors-div d-flex'>
        {factors_list.map((factor, index) => (
          <Factors
            key={index}
            icon={factor.icon}
            title={factor.title}
            description={factor.description}
          />
        ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs