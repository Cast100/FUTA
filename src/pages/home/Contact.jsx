import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2'
import icon from '../../asset/Business.png'
import Back from '../../component/Header/Back'


const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "d26e517a-41c4-46d0-99c3-b81e599c2a27");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent Successfully!",
                icon: "success"
              });
        }
      };
  return (
   <>
   <section className='contact mb'>
   <Back name='Contact Us' title='Get Help & Friendly Support' cover={icon} />
   <div className="container">
      <form onSubmit={onSubmit}>
        <h2>Get in Touch</h2>
        <div className='input-box'>
          <label>Full Name</label>
          <input type='text' className='field' placeholder='Enter your name' required/>
        </div>
        <div className='input-box'>
          <label>Email Address</label>
          <input type='email' className='field' placeholder='Enter your email' required/>
        </div>
        <div className='input-box'>
          <label>Email Address</label>
           <textarea  name='message' id='' className='field mess' placeholder='Message' required></textarea>
        </div>
      </form>
      <button type='submit'>Send Message</button>
    
  </div>
 </section>
   </>
  )
}

export default Contact
