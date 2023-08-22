import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './css/email.css'

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_id88kky', 'template_morogrr', form.current, 'NhJgGal9IKlvEhXE3')
      .then((result) => {
        alert("Your Quotes send sucessfully")
      }, (error) => {
        console.log(error)
      });
    e.target.reset()
  };

  return (<>
          
          <h3 className='heading'>Quote Form</h3>
          <form ref={form} onSubmit={sendEmail} className='contact-form'>
         
            <div class="mb-3 p-2">
              <label for="exampleInputEmail1" class="form-label">Name</label>
              <input type="text" name='user_name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
            </div>
            <div class="mb-3 p-2">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input type="text" name='user_email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
            </div>
            <div class="mb-3 p-2">
              <label for="exampleInputMobile" class="form-label">Mobile</label>
              <input type="tel" name='user_mobile' class="form-control" id="exampleInputMobile" required/>
            </div>
            <div class="mb-3 p-2">
              <label for="exampleInputPassword1" class="form-label">Message</label>
              <textarea type="text" name='user_msg' class="form-control" id="exampleInputPassword1" required></textarea>
            </div>
            <div class="mb-3 form-check p-2">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary p-2">Submit</button>
          </form>
        
  </>);
};

export default Email;
