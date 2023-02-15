import React from "react";

function BulleHome({ imageSrc, title, description }) {
  return (
    <div className=" w-64">
      <div className="flex items-center justify-center">
        <img className="w-24 h-24 rounded-full" src={imageSrc} alt={title} />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-medium mb-2 text-center mt-2">{title}</h3>
        <p className="text-gray-700 text-center">{description}</p>
      </div>
    </div>
  );
}

export default BulleHome;
