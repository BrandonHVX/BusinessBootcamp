import React, { Component } from 'react'
import { Link } from "gatsby"
import { navigate } from "gatsby-link";
import Logo from "../images/Bootcamp.png"
import Layout from "../components/layout"
import Seo from "../components/seo"

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}


export default class Index extends Component {
  constructor() {
    super();
    this.state = { name: "", email: "", phone: "", business: "" };
  }



  


  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "registration", ...this.state })
    })
      .then(() => navigate("/thanks"))
      .catch(error => alert(error));

    e.preventDefault();
    
    
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });


  render() {
          const { name, email, phone, business } = this.state;

   
    return (
      <Layout>
    <Seo title="District 9: Small Business Bootcamp" />
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
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
        <div class="col">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    
                </ol>
            </nav>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-12 col-md-6">
            <div class="card">
                <div class="card-header bg-primary text-white"><i class="fa fa-user"></i> Personal Information
                </div>
                <div class="card-body">
                <form 
                   data-netlify="true"
                   name="registration"
                   method="post"
                
                onSubmit={this.handleSubmit}>
                   <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-6 col-form-label">Name</label>
    <div class="col-sm-12">
    <input className='form-control' id="validationCustom01" type="text" name="name"  value={name} onChange={this.handleChange}required/>    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-6 col-form-label">Email</label>
    <div class="col-sm-12">
    <input className='form-control' id="validationCustom02" type="email" name="email" value={email} onChange={this.handleChange} required/>    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-6 col-form-label">Phone</label>
    <div class="col-sm-12">
    <input className='form-control' id="validationCustom03" type="tel" name="phone" value={phone} onChange={this.handleChange} required />    </div>
  </div>
  
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-6 col-form-label">Name of Business</label>
    <div class="col-sm-12">
    <input className='form-control' id="validationCustom04" type="tel" name="business" value={business} onChange={this.handleChange} required />    </div>
  </div>
         
  <button type='submit' class="btn btn-primary mt-5">Submit</button>

      
        </form>
                </div>
            </div>
            
        </div>
        <div class="col-12 col-md-6">
            <div class="card bg-light mb-3">
                <div class="card-header bg-success text-white text-uppercase"><i class="fa fa-home"></i> Contact</div>
                <div class="card-body">
                    <p>Miami-Dade County: District 9 Commissioner's Office</p>
                    <p>Email: district9@miamidade.gov</p>
                </div>
              </div>
        </div>
    </div>
</div>

{/* <!-- Footer --> */}

  </Layout>
    )
  }
}





