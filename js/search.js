import { getChannels } from "../services/api.js";
import { showChannels } from "./ui.js";


const search = document.querySelector("#search");

let filtered = [];

export function searchChannels(){
        // console.log(filtered)
        
        
        search.addEventListener("input", async (e)=>{
            const channels = await getChannels();
            console.log(e.target.value)
        // console.log(e.target.value.toUpperCase())
        filtered = channels.filter(ch =>
            (ch.name+ch.channelNumber).toUpperCase().includes(e.target.value.toUpperCase())
        )
        showChannels(filtered)
    })
}




