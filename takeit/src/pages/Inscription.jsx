import React from 'react';

const Inscription = () => (
  <div class ="h-screen w-screen overflow-hidden bg-gray-200 flex content-center justify-center items-center">
    <div class="bg-white shadow-lg max-w-lg md:flex">
      <img class="flex-1 w-full h-40 object-cover md:h-full" src="https://picsum.photos/id/1047/200/300" alt=""></img>
      <div class="p-4 flex-1 md:flex-col justify-center items-center">
        <h1 class="text-2xl font-bold text-gray-800 mb-2">Inscription</h1> 
        <div class="mb-4">
          <label class="block text-gray-600 mb-2" for="username">Nom d'utilisateur</label>
          <input class="border shadow-inner py-2 px-3 text-gray-700 w-full focus:shadow-outline rounded" type="text" id="username" name="username"></input>
        </div>
        <div class="mb-4">
          <label class="block text-gray-600 mb-2" for="password">Mot de Passe</label>
          <input class="border shadow-inner py-2 px-3 text-gray-700 w-full focus:shadow-outline rounded" type="password" id="password" name="password"></input>
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 self-start">S'inscrire</button>
      </div>
    </div>
  </div>
);

export default Inscription;
