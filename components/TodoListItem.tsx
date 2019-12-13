import React from 'react'

import {Todo} from '../stores/notesStore'
import {Checkbox} from 'semantic-ui-react';


interface TodoListItemProps {
    todo: Todo;
    toggleCheckbox: (noteId: string, todoId: string) => void;
    noteId: string;
}

export const TodoListItem = ({todo, toggleCheckbox, noteId}: TodoListItemProps) =>
    <div>
        <Checkbox label={todo.task} checked={todo.isComplete} onClick={()=> toggleCheckbox(noteId ,todo._id!)}/>
    </div>
