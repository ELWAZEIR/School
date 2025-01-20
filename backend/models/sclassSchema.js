import { Schema, model } from "mongoose";

const sclassSchema = new Schema({
    sclassName: {
        type: String,
        required: true,
    },
    school: {
        type: Schema.Types.ObjectId,
        ref: 'admin'
    },
}, { timestamps: true });

export default model("sclass", sclassSchema);

