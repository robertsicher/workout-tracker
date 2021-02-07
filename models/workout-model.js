const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    day: {
        type: Date,
        require: true,
        default: Date.now(),
    },
    exercises: {
        type: String,
        trim: true,
        required: true,
    }
}); 

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;

