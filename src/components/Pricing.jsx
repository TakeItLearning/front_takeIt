import React from 'react';

import { CheckIcon } from '@heroicons/react/solid';

const Pricing = () => {
  return (
    <div name='pricing' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-3xl uppercase'>Tarifs</h2>
          <h3 className='text-5xl font-bold text-white py-8'>Le juste prix pour vos besoin.</h3>
          <p className='text-3xl'>
            Choisissez l'offre qui convient le mieux à vos attentes.
          </p>
        </div>

        <div className='grid md:grid-cols-2'>

          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>0€</p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>
              Si vous débutez en informatique et souhaitez apprendre
              </p><br></br>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Accès à l'ensemble des cours débutants et intermédiaires</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Accès au support en illimité</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Accès au service d'actualités</p>
                <button className='w-full py-4 my-4'>Commencer</button>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Complet</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>35€<span className='text-xl text-slate-500 flex flex-col justify-end'>/mois</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>
              Si vous possédez déjà un niveau avancé, que vous souhaitez aller plus loin avec nos cours de niveau Confirmé ou Certifiantes
              </p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Accès aux cours experts</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Possibilité de passer des formations diplômantes ou certifiantes</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Accès au suivi personnalisé</p>
                <button className='w-full py-4 my-4'>Commencer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
