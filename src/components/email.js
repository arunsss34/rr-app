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
    <form ref={form} onSubmit={sendEmail} className='contact-form'>
    <h3 className='heading'>Quote Form</h3><br/>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="mb-3 p-2">
              <label for="exampleInputEmail1" class="form-label">Name</label>
              <input type="text" name='user_name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
          </div>
          <div class="col">
            <div class="mb-3 p-2">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input type="text" name='user_email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="mb-3 p-2">
              <label for="exampleInputEmail1" class="form-label">Service Type</label>
              <input type="text" name='user_name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
          </div>
          <div class="col">
            <div class="mb-3 p-2">
              <label for="exampleInputEmail1" class="form-label">Packaging</label>
              <input type="text" name='user_email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="mb-3 p-2">
              <label for="exampleInputEmail1" class="form-label">Origin</label>
              <input type="text" name='user_name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
          </div>
          <div class="col">
            <div class="mb-3 p-2">
              <label for="exampleInputEmail1" class="form-label">Destination</label>
              <input type="text" name='user_email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
          </div>
        </div>


        <div class="row">
          <div class="col">
            <div class="mb-3 p-2">
              <label for="exampleInputEmail1" class="form-label">Mobile</label>
              <input type="text" name='user_name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
          </div>
          <div class="col">
            <div class="mb-3 p-2">
              <label for="exampleInputEmail1" class="form-label">Shipment Date</label>
              <input type="text" name='user_email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="mb-5 p-2">
              <label for="exampleInputPassword1" class="form-label">Remarks</label>
              <textarea type="text" name='user_msg' placeholder='Enter full shipment details No of Pcs/Gross Weight (KG/LB)/ Chargable Weight (KG/LB) / Dimensions/Other Service if required / also mention incoterms' class="form-control p-3" id="exampleInputPassword1" required></textarea>
            </div>
          </div></div>
          <div class="mb-3 form-check p-2">
          <button type="submit" class="btn btn-primary p-1 submit_button">Submit</button>
      </div>
      </div>
    </form>

  </>);
};

export default Email;
