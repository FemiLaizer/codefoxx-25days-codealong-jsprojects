const messageInput = document.querySelector('#message-input');
const messageOutput = document.querySelector('#message-output');

function getMessage(){
    messageOutput.innerHTML = messageInput.value;
    messageInput.value = "";
}

messageInput.addEventListener('keydown', function(event){
    if(event.key === "Enter"){
        getMessage();
    }
})