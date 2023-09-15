import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types";

const Cards = ({ handleSelectCourse }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6">
      {courses.map((course) => (
        <Card
          key={course.course_id}
          course={course}
          handleSelectCourse={handleSelectCourse}
        ></Card>
      ))}
    </div>
  );
};
Cards.propTypes = {
  handleSelectCourse: PropTypes.func,
};
export default Cards;
