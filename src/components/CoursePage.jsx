import { useState, useEffect } from "react";
import COURSES_DATA from "../files/courses.json";
import { useParams } from "react-router-dom";

const CoursePage = () => {
  const [course, setCourse] = useState({});
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    // Charger les données du cours depuis le fichier JSON
    const currentCourse = COURSES_DATA.find(
      (course) => course.id === Number(id)
    );

    setCourse(currentCourse || {});
  }, [id]);

  return (
    <div className="w-full h-full bg-zinc-200 py-24 px-6  items-center">
      <h1 className="text-3xl font-bold mb-6">{course.titre}</h1>
      {course.paragraphes &&
        course.paragraphes.map((paragraph, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-bold mb-2">{paragraph.titre}</h2>
            <p>{paragraph.contenu}</p>
          </div>
        ))}
    </div>
  );
};

export default CoursePage;
