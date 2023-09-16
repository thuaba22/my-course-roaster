import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [selectCourses, setSelectCourses] = useState([]);
  const handleSelectCourse = (course) => {
    const duplicateCourses = selectCourses.filter(
      (c) => c.course_id === course.course_id
    )[0];
    if (duplicateCourses) {
      toast("You can not add the same course again");
      return;
    }

    const newSelectCourses = [...selectCourses, course];
    setSelectCourses(newSelectCourses);
  };
  return (
    <>
      <h1 className="text-[#1C1B1B]  text-[32px] font-bold text-center mt-12 mb-4">
        Course Registration
      </h1>
      <main className="flex max-w-[1180px] mx-auto mb-[80px]">
        <Cards handleSelectCourse={handleSelectCourse}></Cards>
        <Cart selectCourses={selectCourses}></Cart>
        <ToastContainer />
      </main>
    </>
  );
}

export default App;
