import { create } from "zustand";

/**
 * Interface: definition de la structure d'une tache
 * id: identifiant unique(timestamp)
 * title: le nom de la tache
 * completed: etat de la tache(faite ou non)
 */

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// interface: definition de l'etat global (State) et des actions

interface TaskState {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

/**
 * Store: creation du hook useTaskStore
 * set: fonction fournie par Zustand pour mettre à jour l'etat
 */

export const useTaskStore = create<TaskState>((set) => ({
    //etat initial: une liste vide
    tasks: [],

    //action: ajouter une tache
    // on utilise le "spread operator" (...) pour garder les anciennes taches et ajouter la nouvell
  addTask: (title: string) =>
    set((state) => ({ tasks: [...state.tasks, { id: Date.now(), title, completed: false }] })),

  //Action: inverser l'etat completé
  //on parcourt la liste avec .map(), si l'ID correspond, on change juste 'completed
  toggleTask: (id: number) =>
    set((state) => ({
      tasks: state.tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    })),

  //Action: supprimer une tache
  //on utilise .filter() pour ne garder que les taches dont l'ID est different de celui à supprimer
  deleteTask: (id: number) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
}));