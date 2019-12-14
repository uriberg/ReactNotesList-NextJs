

const router = require('express').Router();
let Note = require('../models/note.model');

router.route('/').get((req, res) => {
    Note.find()
        .then(notes => {
            res.json(notes)
        })
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/add').post((req, res) => {
    const noteName = req.body.name;
    const newNote = new Note ({
        name: noteName,
        todoList: []
    });

    newNote.save()
        .then(() => res.json(newNote))
        .catch(err => res.status(400).json('Error ' + err));
    // const name = req.body.name;
    // const creationDate = Date.parse(req.body.creationDate);
    //
    // const newNote = new Note({
    //     name,
    //     creationDate
    // });
    //

});

router.route('/:id').delete((req, res) => {
    Note.findByIdAndDelete(req.params.id)
        .then(res.json('Note Deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id/todoList/add').post((req,res) => {
    Note.findByIdAndUpdate(req.params.id)
        .then(note => {
            note.todoList.push(req.body.todo);
            note.save();
            res.json(note);
        })
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:noteId/todoList/:id').put((req,res) => {
    Note.findByIdAndUpdate(req.params.noteId)
        .then(note => {
            let todoList = note.todoList;
            for (let i=0; i < todoList.length; i++ ) {
                if (String(todoList[i]._id) === req.params.id) {
                    todoList[i].isComplete = !todoList[i].isComplete;
                    note.save();
                    res.json('toggled checkbox!');
                    break;
                }
            }
            //res.json("didn't find");
        })
        .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;

