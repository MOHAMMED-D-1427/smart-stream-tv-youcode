import { getChannels } from "../services/api.js";
import { showChannels } from "./ui.js";


const cat = document.querySelector("#categories")

let filtered = [];
// Regarding those who don't know what we put in the Documentation, this is the right form ⬇️(Coach recommendation)  
export function filterChannels(){
    
    cat.addEventListener("click", async (e)=>{
        const channels = await getChannels();
        // console.log(e.target.value)
        filtered = channels.filter(ch => 
            ch.category.includes(e.target.value)
        )
        // console.log(filtered)
        showChannels(filtered);
    })
}


