import { showChannels } from "./ui.js";

const channels = JSON.parse(localStorage.getItem("channels"));

const search = document.querySelector("#search");

let filtered = channels;

export function searchChannels(){
        // console.log(filtered)

    search.addEventListener("input", (e)=>{
        // console.log(e.target.value.toUpperCase())
        filtered = channels.filter(ch =>
            (ch.name+ch.channelNumber).toUpperCase().includes(e.target.value.toUpperCase())
        )
        showChannels(filtered)
    })
}




