import React, { useState } from 'react';
import { navigate } from 'gatsby';
import Layout from '../components/layout';
import Biz from "../images/Biz-1.jpg"
import Logo from "../images/bootcamp.png"


const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Form = () => {
  const [submitted, setSubmitted] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [business, setBusiness] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = e => {
    setSubmitting(true)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "waitlist", firstName, lastName, email, phone, business }),
    })
      .then(() => {
        setSubmitting(false)
        setSubmitted("Thank you for your kind words!")
      })
      .catch(error => alert(error))

    e.preventDefault()
  }

  if (submitting) {
    return (
      <div className="transition ease-in-out duration-300 pb-10 m-auto bg-white text-center pt-20 success">
        <p className="text-2xl font-bold mb-8 text-main-color">
          Adding you to the waitlist...
        </p>
      </div>
    )
  }

  if (submitted) {
    return (
      <Layout>
          <nav class="navbar navbar-expand-md " 
    style={{
      backgroundImage:`url(${Biz})` ,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
      backgroundColor: `blu`
      
      }} >
              <div class="container center">
              <img class="navbar-brand" src={Logo} />
              </div>
          </nav>
          <div class="container">
    <div class="row">
        <div class="col-sm-12 col-lg-8 ">
            <div class="card">
                <div class="card-header bg-primary text-white text-center">  <h2>Thank You, {firstName}! </h2>
                </div>
                <div class="card-body text-center">
              <p><h5> Your confirmation email has been sent to </h5></p>
              <p>{email}</p>
                </div>
                </div>
                </div>
                </div>
                </div>
        </Layout>
    )
  }

  return (
    <Layout>
    <nav class="navbar navbar-expand-md " 
    style={{
      backgroundImage:`url(${Biz})` ,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
      backgroundColor: `blu`
      
      }} >

    <div class="container center">
      
        <img class="navbar-brand" src={Logo} />
     
    </div>
</nav>
<section class="jumbotron text-center">
    <div class="container">
        <h1 class="jumbotron-heading">Registration Form</h1>
        <p class="lead text-muted mb-0">District 9 Small Business Bootcamp</p>
    </div>
</section>

<div class="container">
    <div class="row">
        <div class="col ">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    
                </ol>
            </nav>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-sm-12 col-lg-8 ">
            <div class="card">
                <div class="card-header bg-primary text-white"><i class="fa fa-user"></i> Personal Information
                </div>
                <div class="card-body">
                <form
                  onSubmit={handleSubmit}
                  name="waitlist"
                  className="mt-2 m-auto p-8 md:p-0 max-w-md lg:max-w-lg py-6"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field">

          <input type="hidden" name="form-name" value="waitlist" />
           <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-6 col-form-label">First Name</label>
    <div class="col-sm-12">
    <input  className='form-control' 
            id="validationCustom01" 
            type="text" 
            onChange={({ target }) => setFirstName(target.value)}
            name="firstName"
            value={firstName}
            minLength="5"
            placeholder="First Name"required/>    </div>
          </div>

          <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-6 col-form-label">Last Name</label>
    <div class="col-sm-12">
    <input  className='form-control' 
            id="validationCustom01" 
            type="text" 
            onChange={({ target }) => setLastName(target.value)}
            name="lastName"
            value={lastName}
            minLength="5"
            placeholder="Last Name" required/> </div>
          </div>
          <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-6 col-form-label">Phone</label>
    <div class="col-sm-12">
    <input  className='form-control' 
            id="validationCustom01" 
            type="tel" 
            onChange={({ target }) => setPhone(target.value)}
            name="phone"
            value={phone}
            minLength="5"
            placeholder="Phone" required/> </div>
          </div>
          <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-6 col-form-label">Email</label>
    <div class="col-sm-12">
    <input  className='form-control' 
            id="validationCustom01" 
            type="email" 
            onChange={({ target }) => setEmail(target.value)}
            name="email"
            value={email}
            minLength="5"
            placeholder="Email" required/> </div>
          </div>
          <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-6 col-form-label">Name of Business</label>
    <div class="col-sm-12">
    <input  className='form-control' 
            id="validationCustom01" 
            type="text" 
            onChange={({ target }) => setBusiness(target.value)}
            name="business"
            value={business}
            minLength="5"
            placeholder="Business Name" required/> </div>
          </div>

          <button class="btn btn-primary" type="submit">Send</button>
          
        </form>
   
                </div>
            </div>
            
        </div>
        <div class="col col-sm-12 col-lg-4 ">
            <div class="card bg-light ">
                <div class="card-header bg-success text-white text-uppercase"><i class="fa fa-home"></i> Contact</div>
                <div class="card-body">
                    <h6>Miami-Dade County: District 9 Commissioner's Office</h6>
                    <p>Email: district9@miamidade.gov</p>
                </div>
                <div class="card-body">
                <h6>Tools For Change</h6>
                    <p>Phone: 305-200-5568</p>
                  
                </div>
              </div>
        </div>
    </div>
</div>

{/* <!-- Footer --> */}

  </Layout>
      
  )
}

export default Form
