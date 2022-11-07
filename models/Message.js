const mongoose = require("mongoose")

const messageSchema = mongoose.Schema({
    message: String,
    chatId: String,
    receiverId: String
},
{timestamps: true}
)  

const Message = mongoose.model("Message", messageSchema)

module.exports = Message