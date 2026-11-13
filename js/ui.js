
const chansContainer = document.querySelector("#channels");


function showChannels(data){
    if (!data.length) {
        chansContainer.innerHTML =
        "<tr class='h-10 flex justify-center items-center'><td>No channel found</td></tr>";
        return;
    }

    chansContainer.innerHTML = ""
    chansContainer.innerHTML = data.map(ch => `
        <tr class="channel border-b border-gray-900 px-1 chan-hover" data-id="${ch.id}">
            <td>&nbsp; ${ch.channelNumber}</td><td><img src="${ch.logo}" alt="Channel Logo" class="w-12.75"></td><td>${ch.name}</td>
        </tr>
    `).join("");


 
}

const video = document.querySelector("#player video");
const player = document.querySelector("#player");
const emptyPlayer = document.querySelector("#player #empty-player");

const chanInfo = document.querySelector("#chan-info");

const name = chanInfo.querySelector("#name");
const program = chanInfo.querySelector("#program");
const number = chanInfo.querySelector("#number");
const country = chanInfo.querySelector("#country");
const starts = chanInfo.querySelector("#s-time");
const ends = chanInfo.querySelector("#e-time");


function showChannelInfo(data){
    document.addEventListener("click", (e)=>{

        if(e.target.closest(".channel")){
            const id = e.target.closest(".channel").dataset.id;
            
            const filtered = data.find(ch => ch.id == id);
            // console.log(filtered)
        
            name.textContent = filtered.name;
            country.textContent = filtered.country;
            number.textContent = filtered.channelNumber;
            program.textContent = filtered.epg.currentProgram;
            starts.textContent = filtered.epg.startTime;
            ends.textContent = filtered.epg.endTime;
            // player.style.backgroundImage = `url(${filtered.logo})`
            // console.log(player)
            video.classList.remove("hidden");
            video.src = filtered.streamUrl;
            emptyPlayer.classList.add("hidden")
            player.classList.remove("border-2")
            // ===> Search For: Unified Streaming
    // "previewImage":
        }
    });
}

function someClickEvents(){
    
    document.addEventListener("click", (e)=>{
        
        if(e.target.classList.contains("fa-rotate-right")) location.reload();
        // const reload = document.querySelector(".fa-rotate-right")
        
        if(e.target.closest(".channel")){
            const channels = document.querySelectorAll(".channel");
            
            for(let ch of channels){
                ch.classList.remove("active")
                
            }
            e.target.closest(".channel").classList.add("active")
        }
    })
}


export {showChannels, showChannelInfo, someClickEvents}