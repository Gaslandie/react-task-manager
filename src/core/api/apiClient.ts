/**
 * Fichier: apiClient.ts
 * Interet: Gestion centrale des appels HTTP
 * Fonction: Configure Axios avec l'url de base et les intercepteurs
 * pour gerer les tokens d'authentification et les erreurs 401
 */

import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

//Intercpeteur pour ajouter le token si besoin
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


export default apiClient;