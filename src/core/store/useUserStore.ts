/**
 * FICHIER : useUserStore.ts
 * ROLE : Gérer l'état global de l'utilisateur.
 * NOMENCLATURE : On commence souvent par 'use' car c'est un Hook.
 * 
 */
import { create } from 'zustand';

// 1. Définition du type de notre état
interface UserState {
  username: string;
  isLoggedIn: boolean;
  // Fonctions pour modifier l'état (Actions)
  login: (name: string) => void;
  logout: () => void;
}

// 2. Création du store
export const useUserStore = create<UserState>((set) => ({
  // Valeurs initiales
  username: '',
  isLoggedIn: false,

  // Action : Connexion
  login: (name: string) => set({ 
    username: name, 
    isLoggedIn: true 
  }),

  // Action : Déconnexion
  logout: () => set({ 
    username: '', 
    isLoggedIn: false 
  }),
}));