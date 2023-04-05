import React from "react";
import COURSES_DATA from "./../files/courses.json";
import CourseCard from "./CourseCard";
import ArticlesCard from "./ArticleCard";
import { useState, useEffect } from "react";

const Articles = () => {
  const [keywords, setKeywords] = useState("all");
  const [articles, setArticles] = useState([]);

  // fetch des données
  useEffect(() => {
    fetch(
      "http://api.mediastack.com/v1/news?access_key=f96cf2eb2defbe28dcfcea8431f88989&countries=fr&keywords=informatique"
    )
      .then((response) => response.json())
      .then((data) => setArticles(data.data))
      .catch((error) => console.error(error));
  }, []);

  // Fonction pour filtrer les cours en fonction de la difficulté choisie

  return (
    <div className="w-full h-full bg-zinc-200 flex flex-col justify-between">
      <div className="container px-5 py-24 mx-auto ">
        <h1 className="font-sans text-3xl font-bold mt-12 mb-6">
          Articles d'informatique
        </h1>
        <div className="flex flex-wrap -m-4 pt-20">
          {articles.map((article) => (
            <ArticlesCard article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
