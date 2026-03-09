const chatbot = document.createElement("div")

chatbot.innerHTML = `
<div style="
position:fixed;
bottom:20px;
right:20px;
background:#1e293b;
padding:15px;
border-radius:10px;
width:250px;
">

<b>AI Assistant</b>

<input id="chatInput"
placeholder="Ask about our services"
style="width:100%;margin-top:10px">

<div id="chatResponse"></div>

</div>
`

document.body.appendChild(chatbot)

document.getElementById("chatInput").addEventListener("keydown", function(e){

if(e.key === "Enter"){

let question = this.value

document.getElementById("chatResponse").innerHTML =
"Thanks! We'll respond shortly."

this.value=""

}

})
