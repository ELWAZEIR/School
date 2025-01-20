import { Schema, model } from 'mongoose';

const complainSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'student',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    complaint: {
        type: String,
        required: true
    },
    school: {
        type: Schema.Types.ObjectId,
        ref: 'admin',
        required: true,
    }
});

export default model("complain", complainSchema);