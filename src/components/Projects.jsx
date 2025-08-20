import React from "react";
import { project } from "../constants";
import Card from "./Project_cards.jsx";

const Projects = () => {
  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center p-4 sm:p-8">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-8 mt-10">
          Projects
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.map((item, index) => (
          <Card key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
