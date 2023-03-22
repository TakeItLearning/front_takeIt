import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { titre, description, image, auteur, niveau, temps, id } = course;

  return (
    <Link to={`/cours/${id}`}>
      <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-lg my-4 hover:shadow-2xl">
        <div className="sm:w-1/3">
          <img
            src={image}
            alt={titre}
            className="w-full h-full object-cover object-center rounded-lg p-8"
          />
        </div>
        <div className="p-6 flex flex-col justify-between sm:w-2/3">
          <div>
            <h2 className="text-gray-900 font-bold text-2xl mb-2">{titre}</h2>
            <p className="text-gray-700 text-base">{description}</p>
            <div className="text-blue-500 font-semibold mt-2">
              <p className="inline-block mr-4">{niveau}</p>
              <p className="inline-block">{temps}</p>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{auteur}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
