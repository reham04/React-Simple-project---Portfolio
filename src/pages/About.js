import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import courseImage from "../assets/free-course-967x1024.png"; 
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import f1 from "../assets/fact1.png";
import f2 from "../assets/fact2.png";
import f3 from "../assets/fact3.png";
import f4 from "../assets/fact4.png";
const funFacts = [
  { img: f1, number: "854", title: "Enrolled Students" },
  { img: f2, number: "521", title: "Academic Programs" },
  { img: f3, number: "163", title: "Winning Award" },
  { img: f4, number: "93",  title: "Certified Students" },
];

const cardsData = [
  {
    title: "Learn More Anywhere",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
    icon: icon1,
  },
  {
    title: "Expert Instructor",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
    icon: icon2,
  },
  {
    title: "Team Management",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
    icon: icon3,
  },
  {
    title: "Course Planing",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
    icon: icon4,
  },
  {
    title: "Teacher Monitoring",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
    icon: icon5,
  },
  {
    title: "24/7 Strong Support",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
    icon: icon6,
  },
];
const About = () => {
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
    <div className="about-page">
      <main>
        <section className="about-hero">
          <h1 className="about-title">About Us</h1>
          <div className="hero-box">
            <p className="breadcrumb">
              <Link to="/">Home</Link> / About Us
            </p>
            
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
     
      <div className="about-section">
      <div className="about-image">
        <img src={courseImage} alt="Free Course" />
      </div>
      <div className="about-content">
        <h1 className="about-title">
          <span className="blue">Learn new skills to go </span>
          <span className="green-underline">ahead for your </span>
          <span className="blue">career</span>
        </h1>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply.
        </p>
        <p className="about-text">
          From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages.
        </p>
        <button className="about-btn">Explore More</button>
      </div>
    </div>


      <div className="why-section">
      <div className="small-title-wrapper">
        <h4 className="small-title">Why Choose Edusion</h4>
      </div>
      <h1 className="big-title">
        Find the <span className="green-underline">best features</span> of Edusion
      </h1>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <img src={card.icon} alt={card.title} className="card-icon"/>
              <h2 className="card-title">{card.title}</h2>
            </div>
            <p className="card-text">{card.text}</p>
          </div>
        ))}
      </div>
    </div>

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
    </div>
  );
};

export default About;
