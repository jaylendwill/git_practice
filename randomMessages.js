// This file creates random prompts when the function is run

const allMessages = [
    "We will not be remembered by our words, but by our kind deeds. Author Unknown",
    "The only thing that can grow is the thing you give energy to. Ralph Waldo Emerson",
    "Be positive! Negativity doesn't get you anywhere. Peter W. Murphy",   
    "What have you done to inspire or help others? Stephanie Carroll, My Conversations with God Book 4",
    "No greater gift there is, than a generous heart. Yoda",
    "I enjoy every day, because I choose to. Tony Clark",
    "The doors of wisdom are never shut. Benjamin Franklin"
]

function generateMessage() {
    let messages = allMessages;
    let num = Math.floor(Math.random() * messages.length);
    console.log(messages[num]);
}