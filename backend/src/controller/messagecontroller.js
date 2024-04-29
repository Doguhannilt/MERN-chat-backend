const Conversation = require("../models/conversationModel")
const Message = require("../models/messageModel")
const mongoose = require("mongoose")

exports.sendMessage = async (req,res) => {
    try {
        const { message } = req.body
        const { id: receiverId } = req.params
        const senderId = req.user._id

        // Update: Removed unnecessary await keyword
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }, // Modified filter here
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        // Add the new message to the conversation
        if(newMessage){
        conversation.messages.push(newMessage._id);
        }
        
        await Promise.all([conversation.save(), newMessage.save()])

        res.status(201).json({ message: "Message sent" })

    } catch (err) {
        console.log(err)
    }
}

exports.getMessages = async (req,res) => {
    try {
		const { id: userToChatId } = req.params;
		const senderId = req.user._id;

        console.log(senderId)
		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatId] },
		}).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES

		if (!conversation) return res.status(200).json([]);

		const messages = conversation.messages;

		res.status(200).json(messages);
	} catch (error) {
		console.log("Error in getMessages controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
}