import React from "react";
import girlImg from "../assets/home-image.png";
import { Card, CardGroup, Button } from "react-bootstrap";
import aboutImg from "../assets/about1.png"; 
import { Container, Row, Col } from "react-bootstrap";
import f1 from "../assets/fact1.png";
import f2 from "../assets/fact2.png";
import f3 from "../assets/fact3.png";
import f4 from "../assets/fact4.png";
import "../index.css";

const funFacts = [
  { img: f1, number: "854", title: "Enrolled Students" },
  { img: f2, number: "521", title: "Academic Programs" },
  { img: f3, number: "163", title: "Winning Award" },
  { img: f4, number: "93",  title: "Certified Students" },
];


export default function Home() {
  
  const cards = [
    {
      title: "Quality Education",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore."
    },
    {
      title: "Experienced Teachers",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore."
    },
    {
      title: "Delicious Food",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore."
    }
  ];

  return (
    <main>
      <section className="hero" style={{ display: "flex", alignItems: "center", padding: "50px 20px", gap: "40px" }}>
        <div className="hero-text">
          <h1 style={{color: "#1b0c59"}}> Better </h1><h1 style={{color: "#139853ff"}}>Learning Future </h1><h1 style={{color: "#1b0c59"}}> Starts With Edusion</h1>
          <p>It is a long established fact that reader will be distracted readable content of a page when.</p>
          <Button
            style={{
              backgroundColor: "#fff",
              color: "#000",
              border: "none",
              borderRadius: "5px",
              padding: "12px 25px",
              fontWeight: "bold",
              transition: "0.3s",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer"
            }}
            onMouseEnter={e => e.target.style.backgroundColor = "green"}
            onMouseLeave={e => e.target.style.backgroundColor = "#fff"}
          >
            Explore Courses <span style={{ fontSize: "16px" }}>→</span>
          </Button>
        </div>
        <div className="hero-image">
          <img src={girlImg} alt="Girl Learning" style={{ width: "300px", borderRadius: "10px" }} />
        </div>
      </section>

      <CardGroup style={{ marginTop: "40px", gap: "0" }}>
        {cards.map((card, index) => (
          <Card key={index}>
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
              <Button
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  transition: "0.3s",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  cursor: "pointer"
                }}
                onMouseEnter={e => e.target.style.backgroundColor = "green"}
                onMouseLeave={e => e.target.style.backgroundColor = "#fff"}
              >
                Explore Courses <span style={{ fontSize: "16px" }}>→</span>
              </Button>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
     <section className="about-section">
      {/* left: image */}
      <div className="about-left">
        <img src={aboutImg} alt="student writing" className="about-image" />
      </div>

      {/* right: text, icon, cards, button */}
      <div className="about-right">
        <div className="about-intro">
         

          <h2>Learn new skills to go ahead for your career.</h2>
          <p className="about-lead">
            Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <h4>Our Mission</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
          </div>

          <div className="about-card">
            <h4>Our Vision</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
          </div>
        </div>

        <div className="about-actions">
          <button className="discover-btn">Discover More</button>
        </div>
      </div>
    </section>
     
     

     <div className="funfacts-container">
      <div className="funfacts-header">
        <p className="small-title">Some Fun Fact</p>
        <h2 className="big-title">
          Our Great <span className="blue">Achievement</span>
        </h2>
      </div>
      <div className="cards-row">
        {funFacts.map((fact, index) => (
          <div key={index} className="fun-card">
            <img src={fact.img} alt={fact.title} className="card-img" />
            <div className="card-text">
              <h3>{fact.number}</h3>
              <p>{fact.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </main>
  );
}
