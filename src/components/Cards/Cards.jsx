import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6">
      {courses.map((course) => (
        <Card key={course.course_id} course={course}></Card>
      ))}
    </div>
  );
};

export default Cards;
