import * as React from 'react';
import Button from '../../../shared/components/Button';
import styles from '../Tasks.module.scss';

//on definit ce que le composant reçoit
interface TaskItemProps {
    task: {
        id: number;
        title: string;
        completed: boolean;
    }
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
    return(
        <li className={styles.task}>
            <span className={`${styles.taskText} ${task.completed ? styles.taskCompleted : ''}`}
                onClick={() => onToggle(task.id)}
            >   {task.completed ? '✅ ' : '⏳ '}
                {task.title}
            </span>
            <Button variant="danger" onClick={() => onDelete(task.id)}>
                Supprimer
            </Button>
        </li>
    )
}

export default TaskItem;