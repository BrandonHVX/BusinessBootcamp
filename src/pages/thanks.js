import React, { Component } from 'react'
import { Link } from "gatsby"
import { navigate } from "gatsby-link";
import Biz from "../images/Biz-1.jpg"

import Logo from "../images/bootcamp.png"
import Layout from "../components/layout"


const SecondPage = () => (
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





  </Layout>
)

export default SecondPage





