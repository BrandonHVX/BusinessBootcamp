import React, { Component } from 'react'
import { Link } from "gatsby"
import { navigate } from "gatsby-link";
import Logo from "../images/Bootcamp.png"
import Layout from "../components/layout"
import Seo from "../components/seo"


export default class Thanks extends Component {

   

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
        <p class="lead text-muted mb-0">Your registration     
 has been sent</p>

    
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





