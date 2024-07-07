/** depand collection that store data inside it bstkhdm feha mongoDB Schema */
import mongoose from "mongoose";
const { Schema } = mongoose;

/** question model */
const questionModel = new Schema({
    questions: { type : Array, default: []}, // create question with [] default value
    answers : { type : Array, default: []},
    /** createdAt ==> add property */
    createdAt: { type: Date, default: Date.now },
});
/** stor user answer data in mongoDB ==> Question */
export default mongoose.model('Question', questionModel);