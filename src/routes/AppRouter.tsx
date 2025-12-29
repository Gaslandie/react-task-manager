/**
 * FICHIER : AppRouter.tsx
 * ROLE : Centraliser toutes les routes du projet.
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tasks from '../presentation/pages/Tasks';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* On definit le chemin '/' pour afficher notre composant Tasks */}
        <Route path="/" element={<Tasks />} />
        
        {/* Exemple de route 404 */}
        <Route path="*" element={<div style={{padding:'20px'}}>Page 404 - Perdu ?</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;