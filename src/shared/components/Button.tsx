/**
 * FICHIER : Button.tsx
 * SOLUTION : Définition explicite du type pour children.
 */
import * as React from 'react';
import styles from './Button.module.scss';

// 1. Définition de l'interface (le contrat) des props
interface ButtonProps {
  children: React.ReactNode; // ✨ CORRECTION : On définit le type ici
  variant?: 'primary' | 'secondary' | 'danger';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  type = 'button' 
}: ButtonProps) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${styles[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;