import React, {useState} from 'react';
import './ContactForm.css';
import { API } from 'aws-amplify';


const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

 const submitHandler = async (e) => {
      e.preventDefault();

      setLoading(true);
      try {

        const parameters = {
          body: {
            name,
            email,
            subject,
            message
          }
        }

        await API.post('personalWebsiteAPI', '/sendEmail', parameters);
        setStatusMessage(`Thanks for contacting me! I'll get back to you as soon as possible.`);

      } catch(error){
        setStatusMessage(`Something went wrong! Please try again later.`)
      }

      setLoading(false);
}

  return(
    <div className='contact-form-container'>
      {loading ?
        <div className='loader'></div>
        :
        statusMessage
        ? <div className='confirmation-container'>
            <h1>Thanks for reaching out!</h1>
            <p>{statusMessage}</p>
          </div>
        :
        <div className='contact-form'>
          <h1>Message me </h1>
          <form onSubmit={submitHandler}>
            <div className='input-box'>
              <label htmlFor='name'>Name</label>
              <input type='text' name='name' id='name' required={true} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className='input-box'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' id='email' required={true} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className='input-box'>
              <label htmlFor='subject'>Subject</label>
              <input type='text' name='subject' id='subject' required={true} onChange={(e) => setSubject(e.target.value)}></input>
            </div>
            <div className='input-box'>
              <label htmlFor='message'>Message</label>
              <textarea name='message' id='message' required={true} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <button type='submit' className='button-form'>Send Message</button>
          </form>
        </div>
      }

    </div>
  )
}

export default ContactForm;
