import React from 'react'
import { Container, Row, Col, Carousel, Button  } from "react-bootstrap"
import Img1 from "../images/img1.jpg"
import { useState } from "react"


export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const slide1 = (selectedIndex, e) => {
      setIndex(0);
    };
    const slide2 = (selectedIndex, e) => {
        setIndex(1);
      };

      const slide3 = (selectedIndex, e) => {
        setIndex(2);
      };
    return (
        <div>
      <Carousel activeIndex={index} onSelect={slide1}>
    
        <Carousel.Item  activeIndex={0}>
          <img
            className="d-block w-100"
            src={Img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item activeIndex={1}>
          <img
            className="d-block w-100"
            src={Img1}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img1}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

  <Button onClick={slide1}>Slide-1</Button>
  <Button onClick={slide2}>Slide-2</Button>
  <Button onClick={slide3}>Slide-3</Button>
 
      </div>
    );
  }
  

