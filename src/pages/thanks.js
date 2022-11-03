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
      
        <img class="navbar-brand"   src={Logo}  />
     
    </div>
</nav>
<section class="jumbotron text-center mt-5">
    <div class="container">
        <h1 class="jumbotron-heading">Thank You!</h1>
        <p class="lead text-muted mb-0">Your registration has been sent</p>
    </div>
</section>
<section class='mt-5'>
<div class="container text-center">
        <div class="row">
         

         
        </div>
    </div>
    </section>



{/* <!-- Footer --> */}

  </Layout>
    )
  }
}





