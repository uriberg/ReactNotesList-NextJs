import React, {Component} from 'react'
import {Todo} from '../stores/notesStore';
import {TodoListItem} from './TodoListItem'
import {Button, List, Label, Icon, Form} from "semantic-ui-react";

interface TodoListProps {
    todoList: Todo [];
    noteId: string;
    addTodo: (id: string, task: Todo) => void;
    toggleTodoCheckbox: (noteId: string, todoId: string) => void;
    addMode: boolean;
}

export class TodoList extends Component<TodoListProps> {
    state = {
        currTodo: ''
    };


    handleTodoChange = ({currentTarget: {value}}: React.SyntheticEvent<HTMLInputElement>) => {
        this.setState({
            currTodo: value
        });
    };


    handleAddTodo = () => {
        if (this.state.currTodo === '') {
            alert('you must type at least one char');
        } else {
            const todoToAdd = {
                task: this.state.currTodo,
                isComplete: false
            };

            this.props.addTodo(this.props.noteId, todoToAdd);
            this.setState({
                currTodo: ''
            });
        }
    };

    render() {
        let todoListItems = null;
        if (this.props.todoList.length > 0) {
            todoListItems = this.props.todoList!.map((todo: any) => (
                <List.Item key={todo!._id}>
                    <TodoListItem todo={todo} toggleCheckbox={this.props.toggleTodoCheckbox}
                                  noteId={this.props.noteId}/>
                </List.Item>
            ));
        }

        return (
            <div className='todoList'>
                <List divided verticalAlign='middle' style={{marginRight: '10%'}}>
                    {todoListItems}
                </List>
                {this.props.addMode ?
                    <>
                        <Form>
                            <Form.Field>
                                <Label pointing='below' style={{display: 'block', width: '35%'}}>Add new item</Label>
                                <input value={this.state.currTodo} onChange={this.handleTodoChange}
                                       style={{width: '60%'}}/>
                                <Button onClick={this.handleAddTodo} icon style={{height: '38px'}}>
                                    <Icon name="add"/>
                                </Button>
                            </Form.Field>
                        </Form>
                    </>
                    :
                    null
                }
                <style jsx>{`
                    Input {
                        list-style: none;
                        margin: 25px 0;
                    }
                `}</style>
            </div>
        )
    }
}

export default TodoList;
