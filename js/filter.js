import { showChannels } from "./ui.js";

const channels = JSON.parse(localStorage.getItem("channels"));

const cat = document.querySelector("#categories")

let filtered = channels;

export function filterChannels(){
    cat.addEventListener("click", (e)=>{
        console.log(e.target.value)
        filtered = channels.filter(ch => 
            ch.category.includes(e.target.value)
        )
        console.log(filtered)
        showChannels(filtered);
    })
}


