import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import {Todo, NotesStore} from '../stores/notesStore';
import {TodoListItem} from './TodoListItem'
import {NoteListItem} from "./NoteListItem";
import {Button} from "semantic-ui-react";

interface TodoListProps {
    todoList: Todo [];
    noteId: string;
    addTodo: (id: string, task: Todo) => void;
    toggleTodoCheckbox: (noteId: string, todoId: string) => void;
}

export class TodoList extends Component<TodoListProps>{
    state = {
        currTodo: ''
    };


    handleTodoChange = ({ currentTarget: { value } }: React.SyntheticEvent<HTMLInputElement>) => {
        this.setState({
            currTodo: value
        });
    };


    handleAddTodo = () => {
        const todoToAdd = {
            task: this.state.currTodo,
            isComplete: false
        };

        this.props.addTodo(this.props.noteId, todoToAdd);
        this.setState({
            currTodo: ''
        });
    };

    render() {
        let todoListItems = null;
        if (this.props.todoList.length > 0){
            todoListItems = this.props.todoList!.map((todo: any) => (
                <TodoListItem key={todo!._id} todo={todo} toggleCheckbox={this.props.toggleTodoCheckbox} noteId={this.props.noteId}/>
            ));
        }

        return (
            <div>
                <label>New Todo</label>
                <input value={this.state.currTodo} onChange={this.handleTodoChange} />
                <Button onClick={this.handleAddTodo}>Add</Button>
                {todoListItems}
            </div>
        )
    }
}

export default TodoList;
