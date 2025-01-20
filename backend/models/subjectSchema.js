import { Schema, model } from "mongoose";

const subjectSchema = new Schema({
    subName: {
        type: String,
        required: true,
    },
    subCode: {
        type: String,
        required: true,
    },
    sessions: {
        type: String,
        required: true,
    },
    sclassName: {
        type: Schema.Types.ObjectId,
        ref: 'sclass',
        required: true,
    },
    school: {
        type: Schema.Types.ObjectId,
        ref: 'admin'
    },
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'teacher',
    }
}, { timestamps: true });

export default model("subject", subjectSchema);