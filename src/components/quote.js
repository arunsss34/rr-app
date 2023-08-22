import React from 'react'
import Email from './email'
import Header from './Header'
function Quote() {
  return (<>

    <div><Header /></div>
    {/* <div style={{marginTop:100,marginLeft:10, marginRight:10}}><h1 style={{textAlign:'center'}}>Get A Quote!</h1>
      <div><p style={{backgroundColor:'#F3F2F2', padding:10}}>Find a service below and get in contact with our agents for a quote today. We will need some information in regards to your shipping needs before generating an accurate quote.</p></div>
      <div><p style={{backgroundColor:'#F3F2F2', padding:10}}>Complete the form at the bottom of the page to submit an instant quote form to one of our agents, or email us at cirpelogistics@gmail.com We won't let you wait long for a response.</p></div>
    </div> */}
 <br/>
<div class="container">
  <div class="row">
    <div class="col">
    <Email />
    </div>
    <div class="col">
    <Email />
    </div>
  </div>
</div>
  </>)
}

export default Quote;
