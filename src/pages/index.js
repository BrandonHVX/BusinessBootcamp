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
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", phone: "", business: "" };
  }





  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
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
    <Seo title="Page two" />
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container center">
      
        <img class="navbar-brand" src={Logo} />
     
    </div>
</nav>
<section class="jumbotron text-center">
    <div class="container">
        <h1 class="jumbotron-heading">REGISTRATION FORM</h1>
        <p class="lead text-muted mb-0">District 9 Small Business Bootcamp</p>
    </div>
</section>
<section class='mt-5'>
<div class="container">
        <div class="row">
            <div class="col">
                <h5>About</h5>
                <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"/>
                <p class="mb-3">
                    Le Lorem Ipsum est simplement du faux texte employé dans la 
                    composition et la mise en page avant impression.
                </p>
            </div>

         
        </div>
    </div>
    </section>
<div class="container">
    <div class="row">
        <div class="col">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Contact</li>
                </ol>
            </nav>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-header bg-primary text-white"><i class="fa fa-user"></i> Personal Information
                </div>
                <div class="card-body">
                <form 
                   data-netlify="true"
                   name="contact"
                   method="post"
                
                onSubmit={this.handleSubmit}>
          <p>
            <label>
              Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
            </label>
          </p>
          <p>
          <label>
              Phone <input type="number" name="phone" value={phone} onChange={this.handleChange} />
            </label>
          </p>
          <p>
          <label>
              Name of Business <input type="text" name="business" value={business} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-4">
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





