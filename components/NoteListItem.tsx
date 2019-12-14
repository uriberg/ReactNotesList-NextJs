import React, {Component} from 'react'

import {Note, Todo} from '../stores/notesStore'
import TodoList from "./TodoList";
import {Button, Icon} from "semantic-ui-react";
import Link from "next/link";

interface NoteListItemProps {
    note: Note,
    deleteNote: (id: string) => void;
    addingTodo: (id: string, task: Todo) => void;
    toggleTodoCheckbox: (noteId: string, todoId: string) => void;
}


export class NoteListItem extends Component<NoteListItemProps> {

    state = {
        addMode: false
    };

    addTodoToNote = (noteId: string, todo: Todo) => {
        this.props.addingTodo(noteId, todo);
    };

    toggleAddMode = () => {
        this.setState({
            addMode: !this.state.addMode
        });
    };

    render() {
        return (
            <div className='noteItem'>
                <div style={{margin: '10px 10%', display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{alignSelf: 'center', fontSize: 20}}>{this.props.note.name}</div>
                    <div>
                        <Button onClick={() => this.props.deleteNote(this.props.note._id)} icon>
                            <Icon name="trash"/>
                        </Button>
                        <Link href={`/confirm?noteName=${this.props.note.name}`}>
                            <Button icon>
                                <Icon name='shop'/>
                            </Button>

                        </Link>
                        <Button onClick={() => this.toggleAddMode()} icon>
                            <Icon name={this.state.addMode ? 'check' : 'edit'}/>
                        </Button>
                    </div>
                </div>
                <div className='todoListPart' style={{marginLeft: '11%'}}>
                    <TodoList todoList={this.props.note.todoList} noteId={this.props.note._id}
                              addTodo={this.addTodoToNote} toggleTodoCheckbox={this.props.toggleTodoCheckbox}
                                addMode={this.state.addMode}/>
                </div>
                <style jsx>{`
                .noteItem {
                margin-bottom: 30px;
                }
               
      `}</style>
            </div>
        );
    };
}

export default NoteListItem;

