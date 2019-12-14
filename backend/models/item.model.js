const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoItemSchema = new Schema({
    task: {type: String, required: true},
    isComplete: {type: Boolean, required: false}
    //creationDate: {type: Date, required: true}
    //items: [Item]
});


const TodoItem = mongoose.model('TodoItem', TodoItemSchema);

module.exports = TodoItem;
