import React,{Component} from 'react'

import {Note, Todo} from '../stores/notesStore'
import {TodoListItem} from "./TodoListItem";
import TodoList from "./TodoList";
import {Button} from "semantic-ui-react";
import Link from "next/link";

interface NoteListItemProps {
    note: Note,
    deleteNote: (id: string) => void;
    addingTodo: (id: string, task: Todo) => void;
    toggleTodoCheckbox: (noteId: string, todoId: string) => void;
}



export class NoteListItem extends Component<NoteListItemProps> {

    addTodoToNote = (noteId: string, todo: Todo) => {
        this.props.addingTodo(noteId, todo);
    };

    render() {
        return (
            <>
                <div>{this.props.note.name}</div>
                <TodoList todoList={this.props.note.todoList} noteId={this.props.note._id} addTodo={this.addTodoToNote} toggleTodoCheckbox={this.props.toggleTodoCheckbox}/>
                <Button secondary onClick={() => this.props.deleteNote(this.props.note._id)}>Delete note</Button>
                <Link href={`/confirmationMessage?noteName=${this.props.note.name}`}>
                    <a>Navigate</a>
                </Link>
            </>
        );
    };
}

export default NoteListItem;

