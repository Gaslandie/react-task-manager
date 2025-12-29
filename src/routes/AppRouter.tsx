/**
 * FICHIER : AppRouter.tsx
 * ROLE : Centraliser toutes les routes du projet.
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../presentation/pages/Home';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route principale */}
        <Route path="/" element={<Home />} />
        
        {/* Exemple de route 404 */}
        <Route path="*" element={<div>Page 404 - Perdu ?</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;