import { Schema, model } from "mongoose";

const teacherSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "Teacher"
    },
    school: {
        type: Schema.Types.ObjectId,
        ref: 'admin',
        required: true,
    },
    teachSubject: {
        type: Schema.Types.ObjectId,
        ref: 'subject',
    },
    teachSclass: {
        type: Schema.Types.ObjectId,
        ref: 'sclass',
        required: true,
    },
    attendance: [{
        date: {
            type: Date,
            required: true
        },
        presentCount: {
            type: String,
        },
        absentCount: {
            type: String,
        }
    }]
}, { timestamps: true });

export default model("teacher", teacherSchema)