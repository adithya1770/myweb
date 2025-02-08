import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true]
    },

    comment: {
        type: String,
        required: [true]
    }
})

const feedBack = mongoose.models.FeedBack || mongoose.model("FeedBack", feedbackSchema);
export default feedBack;