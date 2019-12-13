import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import {Todo, NotesStore} from '../stores/notesStore';
import {NoteListItem} from "./NoteListItem";
import {Button, Label, Input, Icon} from "semantic-ui-react";
import Link from 'next/link';

interface NoteListProps {
    notesStore?: NotesStore;
}

@inject('notesStore')
@observer
export class NoteList extends Component<NoteListProps> {


    componentDidMount(): void {
        this.props.notesStore!.getNotes();
    }

    handleNoteChange = ({currentTarget: {value}}: React.SyntheticEvent<HTMLInputElement>) => {
        this.props.notesStore!.currNote = value
    };

    handleAddNote = () => {
        const noteToAdd = {
            name: this.props.notesStore!.currNote
        };
        this.props.notesStore!.addNote(noteToAdd);
        this.props.notesStore!.currNote = ''
    };

    handleDeleteNote = (id: string) => {
        this.props.notesStore!.deleteNote(id);
    };

    addTodoToNote = (id: string, task: Todo) => {
        this.props.notesStore!.addTodo(id, task);
    };

    handleCheckboxToggle = (noteId: string, todoId: string) => {
        this.props.notesStore!.toggleCheckbox(noteId, todoId);
    };

    render() {
        return (
            <div>
                <h1>Uri</h1>
                <Label pointing="right">Enter a new note name</Label>
                <div className="uri">
                    <Input placeholder="Add a new Note" icon="sticky note" value={this.props.notesStore!.currNote}
                           onChange={this.handleNoteChange}/>
                    <Button primary onClick={this.handleAddNote} icon>
                        <Icon name="add"/>
                    </Button>
                </div>


                {this.props.notesStore!.notesList.map((note: any) => (
                    <NoteListItem key={note._id} note={note} deleteNote={this.handleDeleteNote}
                                  addingTodo={this.addTodoToNote} toggleTodoCheckbox={this.handleCheckboxToggle}/>
                ))}
                <nav>
                    <Link href="/confirmationMessage">
                        <a onClick={() => this.props.notesStore!.getNotes()}>Navigate</a>
                    </Link>
                </nav>
                <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
          color: blue;
        }

        ul {
          padding: 0;
        }
        
        .uri {
            display: flex;
            justify-content: center;
        }

        Input {
          list-style: none;
          margin: 25px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
            </div>
        )
    }

}


export default NoteList;




