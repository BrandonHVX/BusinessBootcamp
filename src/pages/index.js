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
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"name"}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"text"}
                      name={"name"}
                      onChange={this.handleChange}
                      id={"name"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"email"}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"email"}
                      name={"email"}
                      onChange={this.handleChange}
                      id={"email"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"message"}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={"message"}
                      onChange={this.handleChange}
                      id={"message"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>
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





