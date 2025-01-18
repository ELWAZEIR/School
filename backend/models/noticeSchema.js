import { Schema, model } from "mongoose";

const noticeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    school: {
        type: Schema.Types.ObjectId,
        ref: 'admin'
    },
}, { timestamps: true });

export default model("notice", noticeSchema)