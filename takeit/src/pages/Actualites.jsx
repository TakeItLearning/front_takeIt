import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';

const Actualites = () => {
  const [tilesData, setTilesData] = useState([]);

  const getRssFeed = async () => {
    const parser = new Parser();
    const feed = await parser.parseURL('http://localhost:8080/https://nantes.maville.com/flux/rss/actu.php?c=loc&code=na');

    console.log('Feed data:', feed);

    const tilesData = feed.items.map((item) => {
      return {
        title: item.title,
        link: item.link,
        date: item.pubDate,
        description: item.contentSnippet,
        image: item.enclosure.url,
      };
    });

    console.log('Tiles data:', tilesData);

    return tilesData;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRssFeed();
      setTilesData(data);
    };
    fetchData();
  }, []);

  return (
    <div class="justify-content items-center py-2 px-3">
      <h1 class="text-2xl font-bold text-gray-800 shadow-md mb-2 py-2 px-2 rounded">Actualités</h1>
      <div class="grid grid-cols-1 gap-4 mt-4">
        {tilesData.map((tile) => (
          <article key={tile.link} class="bg-white p-4 rounded shadow flex">
            {tile.image && <img src={tile.image} alt={tile.title} class=" w-56 object-cover mr-4"/>}
            <div class="p-4 flex-1 md:flex-col justify-center items-center">
              <h2 class="text-lg font-bold">{tile.title}</h2>
              <p class="text-gray-600">{tile.description}</p>
              <p class="text-gray-400 text-sm">{tile.date}</p>
              <a href={tile.link} class="text-blue-500 font-bold">Cliquez pour lire l'article complet</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Actualites;
