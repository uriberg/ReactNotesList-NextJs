import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import {Todo, NotesStore} from '../stores/notesStore';
import {NoteListItem} from "./NoteListItem";
import {Button, Input, Icon} from "semantic-ui-react";


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
        if (this.props.notesStore!.currNote !== '') {
            const noteToAdd = {
                name: this.props.notesStore!.currNote
            };
            if (this.props.notesStore!.notesNum == 10) {
                alert('You have reached the max number of notes');
            } else {
                this.props.notesStore!.addNote(noteToAdd);
                this.props.notesStore!.currNote = '';
            }
        }
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
            <div className="noteList">
                {/*<h1>Uri</h1>*/}
                {/*<Label pointing="right">Enter a new note name</Label>*/}
                <div className="noteInput">
                    <Input style={{width: '80%'}} placeholder="Add a new Note" icon="sticky note"
                           value={this.props.notesStore!.currNote}
                           onChange={this.handleNoteChange}/>
                    <Button primary onClick={this.handleAddNote} icon>
                        <Icon name="add"/>
                    </Button>
                </div>


                {this.props.notesStore!.notesList.map((note: any) => (
                    <NoteListItem key={note._id} note={note} deleteNote={this.handleDeleteNote}
                                  addingTodo={this.addTodoToNote} toggleTodoCheckbox={this.handleCheckboxToggle}/>
                ))}
                <style jsx>{`
                .noteList {
                    margin: 20px 0;        
                }
                
        h1,
        a {
          font-family: 'Arial';
          color: blue;
        }

        ul {
          padding: 0;
        }
        
        .noteInput {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
        }
        
  
        
        
        .ui.input{
            width: 80%; !important
        }
        Input {
          list-style: none;
          margin: 25px 0;
          width: 20%;
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




