import React from "react";
import COURSES_DATA from "./../files/courses.json";
import CourseCard from "./CourseCard";
import { useState } from "react";

const Courses = () => {
  const courses = JSON.parse(JSON.stringify(COURSES_DATA)); // Convertissez le JSON en tableau d'objets
  const [difficulty, setDifficulty] = useState("all");

  // Fonction pour filtrer les cours en fonction de la difficulté choisie
  const filteredCourses = courses.filter((course) => {
    if (difficulty === "all") {
      return true;
    } else {
      return course.niveau === difficulty;
    }
  });

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  console.log("COURSES_DATA:", COURSES_DATA);
  console.log("courses:", courses);

  return (
    <div className="w-full h-full bg-zinc-200 flex flex-col justify-between">
      <div className="container px-5 py-24 mx-auto ">
        <h1 className="font-sans text-3xl font-bold mt-12 mb-6">
          Cours d'informatique
        </h1>

        <select
          id="difficulty"
          value={difficulty}
          onChange={handleDifficultyChange}
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
        >
          <option value="all">Choisir un niveau de difficulté</option>
          <option value="débutant">Débutant</option>
          <option value="expert">Expert</option>
          <option value="confirmé">Confirmé</option>
        </select>
        <div className="flex flex-wrap -m-4 pt-20">
          {filteredCourses.map((course) => (
            <CourseCard course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
