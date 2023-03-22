import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const { title, description, url, author, language, id, image } = article;

  return (
    <Link to={url} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-lg my-4 hover:shadow-2xl">
        <div className="sm:w-1/3">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center rounded-lg p-8"
          />
        </div>
        <div className="p-6 flex flex-col justify-between sm:w-2/3">
          <div>
            <h2 className="text-gray-900 font-bold text-2xl mb-2">{title}</h2>
            <p className="text-gray-700 text-base">{description}</p>
            <div className="text-blue-500 font-semibold mt-2"></div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{author}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
