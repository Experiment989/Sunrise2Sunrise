const bot = document.createElement("div")

bot.innerHTML = `

<div class="chatbot">

<h4>AI Assistant</h4>

<input id="question" placeholder="Ask about our services">

<div id="response"></div>

</div>

`

document.body.appendChild(bot)

document.getElementById("question")
.addEventListener("keydown",function(e){

if(e.key==="Enter"){

document.getElementById("response")
.innerText="Thanks! We'll respond shortly."

}

})
