import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

const AllInOne = () => {
  return (
    <div name="platforms" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">
          Des thèmes répondant à vos besoins
        </h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          Que vous soyez débutant, intermédiaire ou expert en informatique,
          notre plateforme est conçue pour répondre à vos besoins en matière de
          formation en ligne.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Gérer son compte en banque</h3>
              <p className="text-lg pt-2 pb-4">Administrez vos comptes en banque, surveillez vos dépenses ou effectuez des virements en ligne.</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">
                Déclarez vos impôts en ligne
              </h3>
              <p className="text-lg pt-2 pb-4">Facilitez vos démarches administratives et apprenez à réalisez votre déclaration d'impôsition directement en ligne.</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Maîtriser votre ordinateur</h3>
              <p className="text-lg pt-2 pb-4">Prenez en main les éléments de votre ordinateur, apprenez à vous repérer dans son environnement et maîtriser ses principaux outils.</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">
                Apprenez à vous protéger sur internet
              </h3>
              <p className="text-lg pt-2 pb-4">Familiarisez vous avec votre écosystème numérique et apprenez à discerner les menaces. Adoptez les bons réflexes afin de mieux réagir.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
