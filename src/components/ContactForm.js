import emailjs from '@emailjs/browser';

const ContactForm = () => {


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_cy7nrqw', 'template_01sx63e', e.target, 'eAZDucNjzFfG7hdWS')
          .then((result) => {
              console.log(result.text);
              alert("Message sent successfully!")
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className='contact-form'>
        <form onSubmit={sendEmail}>
        <h1>Contact Us</h1>
        <p>Have questions or want to get in touch with us?<br />Fill out the form below and we'll get back to you as soon as possible.</p>

        <div className='formInput'>
        {/* <label htmlFor="sendername"> Full Name: </label> */}
        <input type="text" id="sendername" name='sendername' required autoComplete="off" title='Please enter your full name.' placeholder='Name'/>
        </div>
            
        <div className='formInput'>
        {/* <label htmlFor="senderemail"> Email Address: </label> */}
        <input type="email" id="senderemail" name='senderemail' required autoComplete="off" title='Please enter a valid email address.' placeholder='Email Address'/>
        </div>

        <div className='formInput'>
        {/* <label htmlFor="messagesubject"> Subject: </label> */}
        <input type="text" id="messagesubject" name='messagesubject' required autoComplete="off" title='Please enter a message title.' placeholder='Subject'/>
        </div>
            
        <div className='formInput'>
        {/* <label htmlFor="messagebody"> Message: </label> */}
        <textarea cols='20' rows='5' type="text" id="messagebody" name='messagebody' required autoComplete="off" title='Please enter your message/feedback' placeholder='Message'/>
        </div>

        <div className='sendBtn_div'>
            <input className="sendBtn" type="submit" value="Send" />
        </div>
        </form>
    </div>
  )
}

export default ContactForm