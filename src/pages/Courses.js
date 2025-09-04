import React from "react";
import { Link } from "react-router-dom";

import course1Img from "../assets/course1.jpg";
import course2Img from "../assets/course2.jpg";
import course3Img from "../assets/course3.jpg";
import course4Img from "../assets/course4.jpg";
import course5Img from "../assets/course5.jpg";
import course6Img from "../assets/course6.jpg";

const courses = [
  {
    price: "$265",
    category: "Business",
    title: "Financial Security Thinking and Principles Theory",
    lessons: "6 Lessons",
    duration: "4 hours",
    rating: 4.5,
    level: "All Levels",
    image: course1Img,
  },
  {
    price: "$250",
    category: "Finance",
    title: "Professional Ceramic Moulding for Beginners",
    lessons: "15 Lessons",
    duration: "4 hours",
    rating: 5.0,
    level: "All Levels",
    image: course2Img,
  },
  {
    price: "Free",
    category: "UI/UX Design",
    title: "Basic Fundamentals of Interior & Graphics Design",
    lessons: "16 Lessons",
    duration: "22 hours 30 minutes",
    rating: 5.0,
    level: "Intermediate",
    image: course3Img,
  },
  {
    price: "Free",
    category: "Digital Program",
    title: "WordPress for Beginners – Master WordPress",
    lessons: "15 Lessons",
    duration: "7 hours 30 minutes",
    rating: 4.33,
    level: "Beginner",
    image: course4Img,
  },
  {
    price: "$300",
    category: "Data Science",
    title: "The Complete Python Course for Beginner 2023",
    lessons: "14 Lessons",
    duration: "18 hours 20 minutes",
    rating: 4.0,
    level: "Intermediate",
    image: course5Img,
  },
  {
    price: "Free",
    category: "UI/UX Design",
    title: "Ultimate Photoshop Training: From Beginner",
    lessons: "14 Lessons",
    duration: "13 hours 20 minutes",
    rating: 3.33,
    level: "All Levels",
    image: course6Img,
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  let stars = "★".repeat(fullStars);
  if (hasHalf) stars += "☆";
  while (stars.length < 5) stars += "☆";
  return stars;
};

export default function Courses() {
  return (
    <main>
      <section className="about-hero">
        <h1 className="about-title">Courses</h1>
        <div className="hero-box">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / Courses
          </p>
        </div>
      </section>

      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <div className="course-image">
              <img src={course.image} alt={course.title} />
              <div className="course-price">{course.price}</div>
            </div>

            <div className="course-category">{course.category}</div>

            <div className="course-details">
              <h2>{course.title}</h2>
              <p>{course.lessons} • {course.duration}</p>
              <p className="course-rating">{renderStars(course.rating)} ({course.rating})</p>
              <p>{course.level}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
