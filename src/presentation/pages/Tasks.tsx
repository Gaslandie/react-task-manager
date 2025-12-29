import * as React from 'react';
import { useState } from 'react';
import { useTaskStore } from '../../core/store/useTaskStore';
import Button from '../../shared/components/Button';
import styles from './Tasks.module.scss';

const Tasks = () => {
  // État local pour le champ de saisie
  const [title, setTitle] = useState('');
  
  // On récupère les données et actions du store Zustand
  const { tasks, addTask, toggleTask, deleteTask } = useTaskStore();

  const handleCreateTask = () => {
    if (title.trim()) {
      addTask(title); // Appel de l'action Zustand
      setTitle('');   // On vide l'input
    }
  };

  return (
    <div className={styles.container}>
      <h1>Mes Missions 🚀</h1>

      <div className={styles.inputGroup}>
        <input 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Quelle est votre prochaine mission ?"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
                handleCreateTask();
            }
          }}
        />
        <Button onClick={handleCreateTask}>Ajouter</Button>
      </div>

      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.taskItem}>
            <span 
              className={`${styles.taskText} ${task.completed ? styles.completed : ''}`}
              onClick={() => toggleTask(task.id)}
            >
              {task.completed ? '✅ ' : '⏳ '}
              {task.title}
            </span>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>
              Supprimer
            </Button>
          </li>
        ))}
      </ul>
      
      {tasks.length === 0 && (
        <p style={{ textAlign: 'center', color: '#64748b' }}>
          Aucune tâche en cours. Reposez-vous ! ☕
        </p>
      )}
    </div>
  );
};

export default Tasks;