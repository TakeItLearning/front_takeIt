import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const { title, description, url, author, language, id, image } = article;
  const defaultImageURL =
    "https://media.istockphoto.com/id/1295900106/fr/photo/scientifiques-des-donn%C3%A9es-programmeur-masculin-utilisant-lordinateur-portable-analysant-et.jpg?s=612x612&w=0&k=20&c=S4DKSLKzv4OcCcuCYkKeNwJsnAHTXDSaqPRBHohizIg=";

  return (
    <Link to={url} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-lg my-4 hover:shadow-2xl h-52 w-full min-w-[1300px] max-w-[1300px]">
        <div className="w-1/3">
          <img
            src={image === null ? defaultImageURL : image}
            alt={title}
            className="w-full h-full object-cover object-center rounded-lg p-8"
          />
        </div>
        <div className="p-6 flex flex-col justify-between w-2/3">
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
