const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoItemSchema = new Schema({
    task: String,
    isComplete: Boolean
});


const NoteSchema = new Schema({
        name: {type: String, required: true},
        todoList: {type: [TodoItemSchema], required: false},
        createdAt: {type: Date},
        updatedAt: { type: Date}
        //creationDate: {type: Date, required: true}
        //items: [Item]

    }
);

NoteSchema.pre('save', function(next) {
    if (!this.createdAt){
        this.updatedAt = this.createdAt = Date.now();
    }
    else {
        this.updatedAt = Date.now();
    }
    return next();
});

const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;
