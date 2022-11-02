import React, { Component } from 'react'
import { Link } from "gatsby"
import { navigate } from "gatsby-link";
import Logo from "../images/Bootcamp.png"
import Layout from "../components/layout"
import Seo from "../components/seo"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };


  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };



  render() {
    return (
      <Layout>
    <Seo title="Page two" />
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container center">
      
        <img class="navbar-brand" src={Logo}  />
     
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
                <h5>Your registration has been sent</h5>
                <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"/>
                <p class="mb-3">
                 Thank You! 
                </p>
            </div>

         
        </div>
    </div>
    </section>



{/* <!-- Footer --> */}

  </Layout>
    )
  }
}





