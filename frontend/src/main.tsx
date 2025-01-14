import React from 'react';
import ReactDOM from 'react-dom/client'; // Utilisation de React 18 avec la nouvelle API "createRoot"
import App from './App'; // Composant principal de l'application

const rootElement = document.getElementById('root') as HTMLElement; // Récupère l'élément HTML avec id "root"

const root = ReactDOM.createRoot(rootElement); // Crée un "root" React

root.render(
  <React.StrictMode>
    <App />  {/* Rendu du composant App */}
  </React.StrictMode>
);